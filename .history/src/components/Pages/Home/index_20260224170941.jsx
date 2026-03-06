import React from 'react'
import Slider from './Slider/index'


const Home = () => {

    var settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1
};
    return(
        <HomeSlider/>
    );
}

export default Home;
