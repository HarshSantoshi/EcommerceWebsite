import { Divider } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './cart.css';
import { LoginContext } from '../Context/contextProvider';
import CircularProgress from '@mui/material/CircularProgress';

const Cart = () => {
    const { id } = useParams("");
    const cartHistory = useNavigate("");

    const {account ,setAccount} = useContext(LoginContext);
    const [idvData, setidvData] = useState("");

    const getIndividualData = async () => {
        const response = await fetch(`/getproductsone/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const Data = await response.json();
        setidvData(Data);
    };

    useEffect(() => {
        setTimeout( getIndividualData ,500)
       
    }, [id]);

    const addTocart = async(id)=>{
        const checkres = await fetch(`/addCart/${id}` ,{
            method :"POST" ,
            headers :{
                Accept :"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                idvData
            }),
            credentials:"include"
        });
        const data1 = await checkres.json();
        console.log(data1);
        if(checkres.status === 401 || !data1){
            console.log("User Invalid");
            alert("User invalid");
        }else{
            // alert("Data added in your cart successfully");
            cartHistory("/buynow")
            setAccount(data1);
        }

    }

    return (
        <div className='cart_section'>
            {idvData && Object.keys(idvData).length > 0 && (
                <div className='cart_container'>
                    <div className='left_cart'>
                        <img src={idvData.detailUrl} alt='cart_img' />
                        <div className='cart_btn'>
                            <button className='cart_btn1' onClick={()=>addTocart(idvData.id)}>Add to Cart</button>
                            <button className='cart_btn2'>Buy now</button>
                        </div>
                    </div>
                    <div className='right_cart'>
                        <h3>{idvData.title.shortTitle}</h3>
                        <h4>{idvData.title.longTitle}</h4>
                        <Divider /> 
                        <p className='mrp' >M.R.P: <span style={{ textDecorationLine: "line-through" }}> ₹{idvData.price.mrp}</span>
                        </p>

                        <p>Deal of the Day: <span style={{ color: "#B12704" }}>₹{idvData.price.cost}</span></p>
                        <p>You save: <span style={{ color: "#B12704" }}>₹{idvData.price.mrp - idvData.price.cost} ({idvData.price.discount})</span></p>
                        <div className='discount_box'>
                            <h5>Discount: <span style={{ color: "#111" }}>{idvData.discount}</span></h5>
                            <h4>Free Delivery: <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
                            <p>Fastest Delivery: <span style={{ color: "#111", fontWeight: "600" }}>Tomorrow 11AM</span></p>
                        </div>
                        <p className='description'>About the Items: <span style={{ color: "#565659", fontSize: 14, fontWeight: 500, letterSpacing: "0.4px" }}>{idvData.description}</span></p>
                    </div>
                </div>
            )}

            {
                !idvData ?   <div className='circle'>
                <CircularProgress/>
                <h2>Loading...</h2>
              </div> :
              ""
            }
        </div>
    );
};

export default Cart;
