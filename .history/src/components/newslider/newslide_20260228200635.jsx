import React, { useRef } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./newslide.css";
import about1 from "../../assets/images/about-2.png";
import about3 from "../../assets/images/about-3.png";
import about4 from "../../assets/images/about-4.png";

const SliderComponent = SlickSlider.default || SlickSlider;

export const NewSlider = () => {

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
            id: 4,
       
            image: about1,
        },
        {
            id: 5,
           
            image: about3,
        },
        {
            id: 6,
            
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
            <SliderComponent 
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
            </SliderComponent>
        </div>
    </div>
  );
};
