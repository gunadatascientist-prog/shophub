import React from "react";
import SlickSlider from "react-slick";
import "./index.css";
import Slider1 from '../../../../assets/images/slider-1-min.png';
import Slider2 from '../../../../assets/images/slider-2-min.png';
import Button from '@mui/material/Button';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


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
    <div className='catSlidersection'>
        <div className='container-fluid'>
            <h1 className='hd'>Featured Categories</h1>
            <SliderComponent {...settings} className='home_slider_Main'>

            </SliderComponent>

        </div>
    </div>
  );
};

export default catSlider;