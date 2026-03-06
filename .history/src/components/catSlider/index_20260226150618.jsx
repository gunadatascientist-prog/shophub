import React from "react";
import SlickSlider from "react-slick";
import "./Style.css";


const SliderComponent = SlickSlider.default || SlickSlider;

const catSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade : true,
    arrows : true
  };

  return (
    <>
    <div className='catSlidersection'>
        <div className='container-fluid'>
            <h2 className='hd'>Featured Categories</h2>
            <SliderComponent {...settings} className='cat_slider_Main'>
                <div className='item'>
                    
                </div>
                <div className='item'>
                    
                </div>
                <div className='item'>
                    
                </div>
                <div className='item'>
                    
                </div>
                <div className='item'>
                    
                </div>
                <div className='item'>
                    
                </div>
                <div className='item'>
                    
                </div>
                <div className='item'>
                    
                </div>
            </SliderComponent>
        </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/>
<br/>
    </>
  );
};

export default catSlider;
