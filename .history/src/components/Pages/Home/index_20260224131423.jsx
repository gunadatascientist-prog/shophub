import React from 'react'
import './Style.css'

const Home = () => {
    return(
        <div className='home-page'>
            <h1>Welcome to Our Store</h1>
            
            <div className='hero-section'>
                <h2>Fresh Groceries Delivered to Your Door</h2>
                <p>Discover the best quality products at unbeatable prices</p>
                <a href='/shop' className='btn-hero'>Shop Now</a>
            </div>
            
            <div className='container'>
                <div className='product-grid'>
                    <div className='product-card'>
                        <h3>Fresh Vegetables</h3>
                        <p>Farm fresh vegetables delivered daily</p>
                    </div>
                    <div className='product-card'>
                        <h3>Organic Fruits</h3>
                        <p>100% organic and chemical-free</p>
                    </div>
                    <div className='product-card'>
                        <h3>Dairy Products</h3>
                        <p>Fresh milk, cheese, and more</p>
                    </div>
                    <div className='product-card'>
                        <h3>Bakery Items</h3>
                        <p>Freshly baked bread and pastries</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
