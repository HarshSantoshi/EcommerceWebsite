import { Divider } from '@mui/material';
import { React, useEffect, useState } from 'react';
import "./buynow.css";
import Option from "./Option";
import Right from "./Right";
import Subtotal from "./Subtotal";
import EmptyCart from '../image/EmptyCart.jpg'

const Buynow = () => {
    const [cartdata, setCartdata] = useState("");

    const getdatabuy = async () => {
        const res = await fetch("/cartdetails", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        const data = await res.json();

        if (res.status !== 201) {
            console.log("error");
        } else {
            setCartdata(data.carts);
        }
    };

    useEffect(() => {
        getdatabuy();
    }, []);
    return (
        <>{
            cartdata.length ? <div className='buynow_section'>
                <div className='buynow_container'>
                    <div className='left_buy'>
                        <h1>Shopping Cart</h1>
                        <p>Select all items</p>
                        <span className='leftbuyprice'>Price</span>
                        <Divider />{
                            cartdata.map((e, ind) => {
                                return (
                                    <>
                                        <div className="item_container" key={ind}>
                                            <img src={e.detailUrl} alt="imgitem" />
                                            <div className="item_details">
                                                <h3>{e.title.longTitle}</h3>
                                                <h3>{e.title.shortTitle}</h3>
                                                <h3 className="diffrentprice">₹{e.price.cost}.00</h3>
                                                <p className="unusuall">Usually dispatched in 8 days.</p>
                                                <p>Eligible for FREE Shipping</p>
                                                <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                                                <Option deletedata={e.id} get={getdatabuy} />
                                            </div>
                                            <h3 className="item_price"> ₹{e.price.cost}.00</h3>
                                        </div>
                                        <Divider />
                                    </>
                                )
                            })
                        }


                        <Subtotal iteam={cartdata} />
                    </div>
                    <Right iteam={cartdata} />
                </div>
            </div> :
                <div style={{ minHeight: 'auto' }}>
                    <div style={{ minHeight: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                        <img src={EmptyCart} alt="img" />
                    </div>


                </div>
        }

        </>

    )
};

export default Buynow