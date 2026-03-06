import React, { useRef } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./newslide.css";
import about1 from "../../assets/images/about-1.png";
import about3 from "../../assets/images/about-3.png";
import about4 from "../../assets/images/about-4.png";

const SliderComponent = SlickSlider.default || SlickSlider;

export const NewSlider = () => {

    const categories = [
        {
            id: 1,
            name: "About Us 1",
            image: about1,
            
            bgColor: "#fffceb"
        },
        {
            id: 2,
            name: "About Us 2",
            image: about3,
            
            bgColor: "#ecffec"
        },
        {
            id: 3,
            name: "About Us 3",
            image: about4,
           
            bgColor: "#feefea"
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
    <div className='catSlidersection'>
        <div className='container-fluid'>
            <div className="section-header">
                <h2 className='hd'>About Us</h2>
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
