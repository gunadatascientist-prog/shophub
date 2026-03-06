import React from 'react';
import './style.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

// Product Card Component
const ProductCard = ({ image, category, title, rating, brand, price, oldPrice }) => {
    return (
        <div className="productThumb">
            <div className='imgWrapper'>
                <img src={image} className='w-100' alt={title}/>
            </div>
            <div className='info'>
                <span className='d-block catName'>{category}</span>
                <h4 className='title'>
                    <a href="#">{title}</a>
                </h4>
                <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                <span className='brand d-block'>By
                    <a className='text-g' href="#">{brand}</a>
                </span>
                <div className='priceWrapper'>
                    <div className='d-flex align-items-center'>
                        <span className='price'>${price}</span>
                        <span className='oldPrice'>${oldPrice}</span>
                    </div>
                    <Button className='bg-g'>Add</Button>
                </div>
            </div>
        </div>
    );
};

// Sample Products Data
const productsData = [
    {
        id: 1,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg",
        category: "Snack",
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rating: 3.5,
        brand: "NestFood",
        price: "28.85",
        oldPrice: "32.8"
    },
    {
        id: 2,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg",
        category: "Snack",
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rating: 3.5,
        brand: "NestFood",
        price: "28.85",
        oldPrice: "32.8"
    },
    {
        id: 3,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg",
        category: "Snack",
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rating: 3.5,
        brand: "NestFood",
        price: "28.85",
        oldPrice: "32.8"
    },
    {
        id: 4,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg",
        category: "Snack",
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rating: 3.5,
        brand: "NestFood",
        price: "28.85",
        oldPrice: "32.8"
    },
    {
        id: 5,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg",
        category: "Snack",
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rating: 3.5,
        brand: "NestFood",
        price: "28.85",
        oldPrice: "32.8"
    },
    {
        id: 6,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg",
        category: "Snack",
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rating: 3.5,
        brand: "NestFood",
        price: "28.85",
        oldPrice: "32.8"
    },
    {
        id: 7,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg",
        category: "Snack",
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rating: 3.5,
        brand: "NestFood",
        price: "28.85",
        oldPrice: "32.8"
    },
    {
        id: 8,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg",
        category: "Snack",
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rating: 3.5,
        brand: "NestFood",
        price: "28.85",
        oldPrice: "32.8"
    }
];

const Products = () => {
    return (
        <div className="product-grid-container">
            {productsData.map((product) => (
                <ProductCard
                    key={product.id}
                    image={product.image}
                    category={product.category}
                    title={product.title}
                    rating={product.rating}
                    brand={product.brand}
                    price={product.price}
                    oldPrice={product.oldPrice}
                />
            ))}
        </div>
    );
};

export default Products;
