import React from "react";
import SlickSlider from "react-slick";
import "./index.css";
import Slider1 from '../../../../assets/images/slider-1-min.png'
import Slider2 from '../../../../assets/images/slider-2-min.png'

const SliderComponent = SlickSlider.default || SlickSlider;

const HomeSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="homeSlider">
      <div className="container-fluid">
        <SliderComponent {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
        </SliderComponent>
      </div>
    </section>
  );
};

export default HomeSlider;