import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./newslide.css";
import about1 from "../../assets/images/about-2.png";
import about3 from "../../assets/images/about-3.png";
import about4 from "../../assets/images/about-4.png";

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="slick-arrow slick-prev" onClick={onClick}>
            ‹
        </button>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="slick-arrow slick-next" onClick={onClick}>
            ›
        </button>
    );
};

export const NewSlider = () => {

    const categories = [
        {
            id: 1,
            name: "About Us 1",
            image: about1,
        },
        {
            id: 2,
            name: "About Us 2",
            image: about3,
        },
        {
            id: 3,
            name: "About Us 3",
            image: about4,
        }
    ];
    
    const sliderRef = useRef(null);

    const handleCategoryClick = (categoryName) => {
        console.log(`Clicked on ${categoryName}`);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
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
        <div className='about-slider-section'>
            <div className='about-slider-container'>
                <Slider 
                    ref={sliderRef}
                    {...settings} 
                    className='about-slider' 
                >
                    {categories.map((category) => {
                        return (
                            <div className='about-slide' key={category.id} onClick={() => handleCategoryClick(category.name)}>
                                <img src={category.image} alt={category.name}/>
                                <h5>{category.name}</h5>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};
