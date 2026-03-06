import React from 'react';
import './style.css';
import Rating from '@mui/material/Rating'

const Product =()=>{
return(
    <div className='productThumb'>
            <div className='imgWrapper'>
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg" className='w-10px'/>
                <div>
                <div className='info'>
                <span className='d-block brand'>Snack</span>
               <h4> Cha Seeds of Change Organic Quinoa, Brown, & Red Rice</h4>
               <Rating name='ready-only' value={4} readynly/>
                </div>
                </div>
              </div>
    </div>
)}


export default Product;