import { React, useEffect, useState } from 'react';
import axios from 'axios';
import shopzone from "../image/shopzone_logo.png";
import { useContext } from 'react';

import { LoginContext } from '../Context/contextProvider';

const Right = ({ iteam }) => {
  const [price, setPrice] = useState(0);
  const { account, setAccount } = useContext(LoginContext);

  useEffect(() => {
    totalAmount();
  }, [iteam]);

  const totalAmount = () => {
    let totalPrice = 0;
    iteam.map((item) => {
      totalPrice += item.price.cost;
    });
    setPrice(totalPrice);
  };

  // Remove item from cart
  const removeData = async (id) => {
    try {
      const res = await fetch(`/remove/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();

      if (res.status === 400 || !data) {
        console.log("error");
      } else {
        setAccount(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Payment
  const handleOpenRazorpay = (data) => {
    const options = {
      key: process.env.KEY_ID,
      amount: Number(data.amount),
      currency: data.currency,
      name: 'ShopZone',
      description: 'Shopping becomes easy',
      image: shopzone,
      order_id: data.id,
      handler: function (response) {
        console.log(response, "function is running");
        axios.post('http://localhost:3000/verify', { response: response })
          .then(res => {
            console.log(res, "payment done");
          })
          .catch(err => {
            console.log(err)
          })
      }
    };
    const rzpay = new window.Razorpay(options);
    rzpay.open();
  };

  const handlePayment = (amount) => {
    const _data = { amount: amount };
    axios.post('http://localhost:3000/orders', _data)
      .then(res => {
        handleOpenRazorpay(res.data.data);
      })
      .catch(err => {
        console.log(err)
      });
  };

  return (
    <div className="right_buy">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg" />
      <div className="cost_right">
        <p>Your order is eligible for FREE Delivery. </p> <br />
        <span style={{ color: "#565959" }}> Select this option at checkout. Details</span>
        <h3>Subtotal ({iteam.length} items): <span style={{ fontWeight: "700" }}>₹{price}.00</span></h3>
        <button className="rightbuy_btn" onClick={() => handlePayment(price)}>Proceed to Buy</button>
        <div className="emi">
          Emi available
        </div>
      </div>
    </div>
  )
}

export default Right;
