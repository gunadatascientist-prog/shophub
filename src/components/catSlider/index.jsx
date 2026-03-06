import React, { useState, useRef } from "react";
import SlickSlider from "react-slick";
import { Link } from "react-router-dom";
import "./Style.css";

const SliderComponent = SlickSlider.default || SlickSlider;

const CatSlider = () => {

    const categories = [
        {
            id: 1,
            name: "Groceries",
            slug: "groceries",
            image: "https://cdn-icons-png.flaticon.com/512/3724/3724788.png",
            bgColor: "#fffceb"
        },
        {
            id: 2,
            name: "Electronics",
            slug: "electronics",
            image: "https://cdn-icons-png.flaticon.com/128/3659/3659898.png",
            bgColor: "#ecffec"
        },
        {
            id: 3,
            name: "Fashion",
            slug: "fashion",
            image: "https://cdn-icons-png.flaticon.com/128/12516/12516451.png",
            bgColor: "#feefea"
        },
        {
            id: 4,
            name: "Vegetables",
            slug: "vegetables",
            image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
            bgColor: "#e8f5e9"
        },
        {
            id: 5,
            name: "Fruits",
            slug: "fruits",
            image: "https://cdn-icons-png.flaticon.com/512/1135/1135543.png",
            bgColor: "#fff3e0"
        },
        {
            id: 6,
            name: "Dairy",
            slug: "dairy",
            image: "https://cdn-icons-png.flaticon.com/512/7398/7398098.png",
            bgColor: "#e3f2fd"
        },
        {
            id: 7,
            name: "Bakery",
            slug: "bakery",
            image: "https://cdn-icons-png.flaticon.com/512/3157/3157321.png",
            bgColor: "#fce4ec"
        },
        {
            id: 8,
            name: "Beverages",
            slug: "beverages",
            image: "https://cdn-icons-png.flaticon.com/512/1026/1026555.png",
            bgColor: "#e0f7fa"
        },
        {
            id: 9,
            name: "Snacks",
            slug: "snacks",
            image: "https://cdn-icons-png.flaticon.com/512/2965/2965710.png",
            bgColor: "#fff8e1"
        },
        {
            id: 10,
            name: "Meat",
            slug: "meat",
            image: "https://cdn-icons-png.flaticon.com/512/2224/2224124.png",
            bgColor: "#ffebee"
        }
    ];
    
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='catSlidersection'>
            <div className='container-fluid'>
                <div className="section-header">
                    <h2 className='hd'>Featured Categories</h2>
                    <div className="header-arrows">
                        <button className="arrow-btn prev" onClick={() => sliderRef.current?.slickPrev()}>
                            <span>&#8249;</span>
                        </button>
                        <button className="arrow-btn next" onClick={() => sliderRef.current?.slickNext()}>
                            <span>&#8250;</span>
                        </button>
                    </div>
                </div>
                <SliderComponent 
                    ref={sliderRef}
                    {...settings} 
                    className='cat_slider_Main' 
                    id='cat_slider_Main'
                >
                    {categories.map((category) => {
                        return (
                            <div className='item' key={category.id}>
                                <Link to={`/cat/${category.slug}`} className="category-link">
                                    <div className="info" style={{ backgroundColor: category.bgColor }}>
                                        <img src={category.image} alt={category.name}/>
                                        <h5>{category.name}</h5>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </SliderComponent>
            </div>
        </div>
    );
};

export default CatSlider;
