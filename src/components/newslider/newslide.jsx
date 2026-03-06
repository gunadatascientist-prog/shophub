import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./newslide.css";
import about1 from "../../assets/images/about-2.png";
import about3 from "../../assets/images/about-3.png";
import about4 from "../../assets/images/about-4.png";

function NewSlider(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const categories = [
        {
            id: 1,
            
            image: about1,
        },
        {
            id: 2,
           
            image: about3,
        },
        {
            id: 3,
            
            image: about4,
        },
         {
            id: 1,
            
            image: about1,
        },
        {
            id: 2,
           
            image: about3,
        },
        {
            id: 3,
            
            image: about4,
        },
         {
            id: 1,
            
            image: about1,
        },
        {
            id: 2,
           
            image: about3,
        },
        {
            id: 3,
            
            image: about4,
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % categories.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [categories.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrev = () => {
        setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % categories.length);
    };

    const handleCategoryClick = (categoryName) => {
        console.log(`Clicked on ${categoryName}`);
    };

    return (
        <div className='about-slider-section'>
            <div className='about-slider-container'>
                <div className='about-slider'>
                    <button className="slick-arrow slick-prev" onClick={goToPrev}>
                        ‹
                    </button>
                    
                    <div className='about-slides-wrapper'>
                        {categories.map((category, index) => {
                           
                            const isVisible = index >= currentSlide && index < currentSlide + 3;
                            if (!isVisible && !(currentSlide + 3 > categories.length && index < (currentSlide + 3) % categories.length)) {
                                return null;
                            }
                            return (
                                <div 
                                    className='about-slide' 
                                    key={category.id} 
                                    onClick={() => handleCategoryClick(category.name)}
                                >
                                    <img src={category.image} alt={category.name}/>
                                    <h5>{category.name}</h5>
                                </div>
                            );
                        })}
                    </div>
                    
                    <button className="slick-arrow slick-next" onClick={goToNext}>
                        ›
                    </button>
                </div>
                
                <div className='slick-dots'>
                    {categories.map((_, index) => (
                        <button 
                            key={index} 
                            className={`slick-dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewSlider;
