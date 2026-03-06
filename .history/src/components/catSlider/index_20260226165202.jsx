import React, { useState, useRef } from "react";
import SlickSlider from "react-slick";
import "./Style.css";

const SliderComponent = SlickSlider.default || SlickSlider;

const CatSlider = () => {

    const categories = [
        {
            id: 1,
            name: "Groceries",
            image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png",
            items: "26 items",
            bgColor: "#fffceb"
        },
        {
            id: 2,
            name: "Electronics",
            image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png",
            items: "15 items",
            bgColor: "#ecffec"
        },
        {
            id: 3,
            name: "Fashion",
            image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png",
            items: "32 items",
            bgColor: "#feefea"
        }
    ];
    
    const sliderRef = useRef(null);

    const handleCategoryClick = (categoryName) => {
        console.log(`Clicked on ${categoryName}`);
        // Add your navigation logic here
    };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
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
                        <div className='item' key={category.id} onClick={() => handleCategoryClick(category.name)}>
                            <div className="info" style={{ backgroundColor: category.bgColor }}>
                                <img src={category.image} alt={category.name}/>
                                <h5>{category.name}</h5>
                                <p>{category.items}</p>
                            </div>
                        </div>
                    );
                })}
            </SliderComponent>
        </div>
    </div>
  );
};

export default CatSlider;
