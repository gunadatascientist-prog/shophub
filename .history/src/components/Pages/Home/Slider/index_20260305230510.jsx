import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const productImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800",
    alt: "Fresh Vegetables",
    category: "Vegetables"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800",
    alt: "Fresh Fruits",
    category: "Fruits"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800",
    alt: "Dairy Products",
    category: "Dairy"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800",
    alt: "Fresh Beverages",
    category: "Beverages"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
    alt: "Bakery Items",
    category: "Bakery"
  }
];

const HomeSlider = () => {
  return (
    <section className="homeSlider position-relative">
      <div className="container-fluid px-0">
        <div className="masonryGrid">
          <div className="masonryItem large">
            <img src={productImages[0].url} alt={productImages[0].alt} />
            <div className="overlay">
              <span className="category">{productImages[0].category}</span>
              <h3>Fresh Organic Produce</h3>
              <Link to="/shop" className="shop-btn">Shop Now</Link>
            </div>
          </div>
          
          <div className="masonryItem small-top">
            <img src={productImages[1].url} alt={productImages[1].alt} />
            <div className="overlay">
              <span className="category">{productImages[1].category}</span>
            </div>
          </div>
          
          <div className="masonryItem small-bottom">
            <img src={productImages[2].url} alt={productImages[2].alt} />
            <div className="overlay">
              <span className="category">{productImages[2].category}</span>
            </div>
          </div>
          
          <div className="masonryItem wide">
            <img src={productImages[3].url} alt={productImages[3].alt} />
            <div className="overlay">
              <span className="category">{productImages[3].category}</span>
              <h3>Premium Quality Beverages</h3>
              <Link to="/shop" className="shop-btn">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;

