import { Divider } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './cart.css';
import { LoginContext } from '../Context/contextProvider';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import shopzone from "../image/shopzone_logo.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';
import { ItemRating } from '../ratingItem/RatingItem';
import styled from '@emotion/styled';

const StarStyle = styled(ItemRating)`
margin-bottom:20px;
`
const Cart = () => {
    const { id } = useParams("");
    const cartHistory = useNavigate("");

    const { account, setAccount } = useContext(LoginContext);
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
        setTimeout(getIndividualData, 500)

    }, [id]);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const addTocart = async (id) => {
        if (account) {
            const checkres = await fetch(`/addCart/${id}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    idvData
                }),
                credentials: "include"
            });
            const data1 = await checkres.json();
            if (checkres.status === 401 || !data1) {
                console.log("User Invalid");
                alert("User invalid");
            } else {
                cartHistory("/buynow");
                setAccount(data1);
            }
        } else {
            toast.warn("User Not Logged in!", {
                position: "top-center"
            });
        }
    }
    // payment
    const handleOpenRazorpay = (data) => {
        const options = {
            key : process.env.KEY_ID,
            amount : Number( data.amount ),
            currency : data.currency , 
            name:'ShopZone',
            description : 'Shopping becomes easy' ,
            image : shopzone ,
            order_id : data.id ,
            handler:function(response){
                axios.post('http://localhost:3000/verify' , {response: response})
                    .then(res=>{
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        };
        const rzpay = new window.Razorpay(options);
        rzpay.open();
    }
    const handlePayment = (amount) => {
        const _data = { amount: amount };
        axios.post('http://localhost:3000/orders', _data)
            .then(res => {
                handleOpenRazorpay(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='cart_section'>
            <div className='back_button'>
              <NavLink to="/"><ArrowBackIcon /></NavLink>
            </div>
            {idvData && Object.keys(idvData).length > 0 && (
                <div className='cart_container'>
                    <div className='left_cart'>
                        <img src={idvData.detailUrl} alt='cart_img' />
                        <div className='cart_btn'>
                            <button className='cart_btn1' onClick={() => addTocart(idvData.id)}>Add to Cart</button>
                            <button className='cart_btn2' onClick={() => handlePayment(idvData.price.cost)}>Buy now</button>
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
                            <h5>Discount: <span style={{ color: "#111" }}>{idvData.price.discount}</span></h5>
                           <h5> <StarStyle value = { idvData.rating } text = { idvData.reviews }/></h5>
                            <h4>Free Delivery: <span style={{ color: "#111", fontWeight: "600" }}>August 8 - 21</span> Details</h4>
                            <p>Fastest Delivery: <span style={{ color: "#111", fontWeight: "600" }}>Tomorrow 11AM</span></p>
                        </div>
                        <p className='description'>About the Items: <span style={{ color: "#565659", fontSize: 14, fontWeight: 500, letterSpacing: "0.4px" }}>{idvData.description}</span></p>
                    </div>
                </div>
            )}

            {
                !idvData ? <div className='circle'>
                    <CircularProgress />
                    <h2>Loading...</h2>
                </div> :
                    ""
            }
        </div>
    );
};

export default Cart;
