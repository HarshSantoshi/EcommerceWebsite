import { Divider } from '@mui/material';
import React from 'react'
import './cart.css';
const Cart = () => {
  return (
    <div className='cart_section'>
        <div className='cart_container'>
            <div className='left_cart'>
                <img src='https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70' alt='cart_img' />
                <div className='cart_btn'>
                    <button className='cart_btn1'>Add to Cart</button>
                    <button className='cart_btn2'>Add to Cart</button>
                </div>
            </div>
            <div className='right_cart'>
                <h3>Fitness Gear</h3>
                <h4>Pigeon FAVOURITE Electric Kettle (1.5L , Silver, Black)</h4>
                <Divider />
                <p className='mrp'>M.R.P : Rs.1195</p>
                <p>Deal of the Day : <span style={{color: "#B12704"}}>Rs.625.00</span></p>
                <p>You save : <span style={{color: "#B12704"}}>Rs.570 (47%)</span></p>
                <div className='discount_box'>
                    <h5>Discount : <span style={{color:"#111"}}>Extra 10% off</span></h5>
                    <h4>Free Delivery :<span style={{color:"#111",fontWeight:"600"}}>Oct 8 - 21</span> Details</h4>
                    <p>Fastest Delivery :<span style={{color:"#111",fontWeight:"600"}}>Tomorrow 11AM</span></p>
                </div>
                <p className='description'>About the Items : <span style={{color:"#565659",fontSize:14,fontWeight:500,letterSpacing:"0.4px"}}>A kettle, sometimes called a tea kettle or teakettle, is a type of pot specialized for boiling water, commonly with a lid, spout, and handle, or a small electric kitchen appliance of similar shape that functions in a self-contained manner.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Cart