import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./newslide.css";
import about1 from "../../assets/images/about-2.png";
import about3 from "../../assets/images/about-3.png";
import about4 from "../../assets/images/about-4.png";

function NewSlider(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const sliderRef = useRef(null);
    
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

    const minSwipeDistance = 50;

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 2000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrev = () => {
        setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % categories.length);
    };

    // Touch handlers for swipe
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrev();
        }
    };

    // Mouse drag handlers for desktop swipe
    const onMouseDown = (e) => {
        setTouchEnd(null);
        setTouchStart(e.clientX);
    };

    const onMouseMove = (e) => {
        setTouchEnd(e.clientX);
    };

    const onMouseUp = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrev();
        }
    };

    const handleCategoryClick = (categoryName) => {
        console.log(`Clicked on ${categoryName}`);
    };

    return (
        <div className='about-slider-section'>
            <div className='about-slider-container'>
                <div 
                    className='about-slider'
                    ref={sliderRef}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseUp}
                >
                    <button className="slick-arrow slick-prev" onClick={goToPrev}>
                        ‹
                    </button>
                    
                    <div className='about-slides-wrapper'>
                        {categories.map((category, index) => {
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
