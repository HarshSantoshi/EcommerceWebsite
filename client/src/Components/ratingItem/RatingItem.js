import React from 'react';
import Rating from '@mui/material/Rating';

export const ItemRating = ({ value, text }) => {
    return (
       <>
        <div style={{display:'flex' , alignItems:'center' , marginBottom:20}}>
        <div>
            <Rating name="half-rating-read" value={value} precision={0.1} readOnly />
        </div>
        <div>
        {text} reviews
        </div>
        </div>
       </>
        
    );
};
