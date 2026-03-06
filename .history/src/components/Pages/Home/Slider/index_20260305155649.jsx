import React from "react";
import SlickSlider from "react-slick";
import { Link } from "react-router-dom";
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
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="homeSlider position-relative">
      <div className="container-fluid px-0">

        <SliderComponent {...settings} className="home_slider_Main">

          <div className="item position-relative">
            <img src={Slider1} className="img-fluid w-100" alt="Summer Sale" />
            <div className="info">
              <h2>Don't Miss<br />Amazing Grocery Deals</h2>
              <p>Save up to 50% on fresh vegetables and fruits</p>
              <Link to="/shop" className="shop-btn">Shop Now</Link>
            </div>
          </div>

          <div className="item position-relative">
            <img src={Slider2} className="img-fluid w-100" alt="Fresh Vegetables" />
            <div className="info">
              <h2>Fresh Vegetables<br />Big Discount</h2>
              <p>Organic produce at unbeatable prices</p>
              <Link to="/cat/groceries" className="shop-btn">Shop Now</Link>
            </div>
          </div>

        </SliderComponent>

        
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
