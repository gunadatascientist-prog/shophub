import React from "react";
import SlickSlider from "react-slick";
import "./Style.css";

const SliderComponent = SlickSlider.default || SlickSlider;

const CatSlider = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade : false,
    arrows : true
  };

  return (
    <div className='catSlidersection'>
        <div className='container-fluid'>
            <h2 className='hd'>Featured Categories</h2>
            <SliderComponent {...settings} className='cat_slider_Main'>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="info">
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png' alt="Cake & Milk"/>
                        <h5>Cake & Milk</h5>
                        <p>26 items</p>
                    </div>
                </div>
            </SliderComponent>
        </div>
    </div>
  );
};

export default CatSlider;
