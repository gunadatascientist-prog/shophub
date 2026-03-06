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
    id: 4,
    url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
    alt: "Bakery Items",
    category: "Bakery"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800",
    alt: "Fresh Beverages",
    category: "Beverages"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1599599810769-bcde5a45dd03?w=800",
    alt: "Premium Snacks",
    category: "Snacks"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=800",
    alt: "Fresh Meat",
    category: "Meat"
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
          
          <div className="masonryItem small-1">
            <img src={productImages[1].url} alt={productImages[1].alt} />
            <div className="overlay">
              <span className="category">{productImages[1].category}</span>
            </div>
          </div>
          
          <div className="masonryItem small-2">
            <img src={productImages[2].url} alt={productImages[2].alt} />
            <div className="overlay">
              <span className="category">{productImages[2].category}</span>
            </div>
          </div>
          
          <div className="masonryItem medium-1">
            <img src={productImages[3].url} alt={productImages[3].alt} />
            <div className="overlay">
              <span className="category">{productImages[3].category}</span>
            </div>
          </div>
          
          <div className="masonryItem medium-2">
            <img src={productImages[4].url} alt={productImages[4].alt} />
            <div className="overlay">
              <span className="category">{productImages[4].category}</span>
            </div>
          </div>
          
          <div className="masonryItem wide-1">
            <img src={productImages[5].url} alt={productImages[5].alt} />
            <div className="overlay">
              <span className="category">{productImages[5].category}</span>
              <h3>Premium Snacks Collection</h3>
              <Link to="/shop" className="shop-btn">Shop Now</Link>
            </div>
          </div>
          
          <div className="masonryItem wide-2">
            <img src={productImages[6].url} alt={productImages[6].alt} />
            <div className="overlay">
              <span className="category">{productImages[6].category}</span>
              <h3>Fresh Meat & Poultry</h3>
              <Link to="/shop" className="shop-btn">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;

