import React, { useState, useRef } from "react";
import SlickSlider from "react-slick";
import "./Style.css";

const SliderComponent = SlickSlider.default || SlickSlider;

const CatSlider = () => {

    const [itemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
    ]);
    
    const sliderRef = useRef(null);

    // Custom arrow components
    const NextArrow = ({ onClick }) => (
        <div className="custom-arrow next-arrow" onClick={onClick}>
            <span>&#8250;</span>
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="custom-arrow prev-arrow" onClick={onClick}>
            <span>&#8249;</span>
        </div>
    );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
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
                {itemBg.length !== 0 && itemBg.map((bg, index) => {
                    return (
                        <div className='item' key={index}>
                            <div className="info" style={{ backgroundColor: bg }}>
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
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
