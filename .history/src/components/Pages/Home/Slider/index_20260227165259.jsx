import React from "react";
import SlickSlider from "react-slick";
import "./index.css";
import Slider1 from '../../../../assets/images/slider-1-min.png';
import Slider2 from '../../../../assets/images/slider-2-min.png';
import Button from '@mui/material/Button';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const SliderComponent = SlickSlider.default || SlickSlider;

const HomeSlider = () => {

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
    <section className="homeSlider position-relative">
  <div className="container-fluid px-0">

    <SliderComponent {...settings} className="home_slider_Main">

      <div className="item position-relative">
        <img src={Slider1} className="img-fluid w-100" alt="Slider 1" />

        <div className="info">
          <h2>Don't miss <br /> amazing Grocery Deals</h2>
          <p>Signup for the daily newsletter</p>
        </div>
      </div>

      <div className="item position-relative">
        <img src={Slider2} className="img-fluid w-100" alt="Slider 2" />

        <div className="info">
          <h2>Fresh Vegetables <br /> Big discount</h2>
          <p>Signup for the daily newsletter</p>
        </div>
      </div>

    </SliderComponent>

    {/* Newsletter */}
    <div className="newsLetterBanner">
      <div className="input-wrapper">
        <SendOutlinedIcon />
        <input type="text" placeholder="Your email address" />
      </div>
      <Button className="subscribe-btn">Subscribe</Button>
    </div>

  </div>
</section>
  );
};

export default HomeSlider;
