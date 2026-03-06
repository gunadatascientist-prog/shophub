import React from 'react';
import './style.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const getImageUrl = (id) => {
  const images = {
    1: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400",
    2: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400",
    3: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
    4: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
    5: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
    6: "https://images.unsplash.com/photo-1599599810769-bcde5a45dd03?w=400",
    7: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400",
    8: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400",
  };
  return images[id] || `https://via.placeholder.com/400x400?text=Product+${id}`;
};


const ProductCard = ({ id, image, category, title, rating, brand, price, oldPrice }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="productThumb">
      <div className='imgWrapper'>
        <img src={image} className='w-100' alt={title} onError={(e) => {
          e.target.src = `https://via.placeholder.com/400x400?text=${category}`;
        }} />
      </div>
      <div className='info'>
        <span className='d-block catName'>{category}</span>
        <h4 className='title'>
          <Link to={`/product/${id}`}>{title}</Link>
        </h4>
        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        <span className='brand d-block'>By
          <a className='text-g' href="#">{brand}</a>
        </span>
        <div className='priceWrapper'>
          <div className='d-flex align-items-center'>
            <span className='price'>${price}</span>
            <span className='oldPrice'>${oldPrice}</span>
          </div>
          <Button 
            className='bg-g' 
            onClick={() => addToCart({ id, image, category, title, rating, brand, price, oldPrice })}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};


const productsData = [
  { id: 1, image: getImageUrl(1), category: "Vegetables", title: "Organic Fresh Vegetables Pack", rating: 3.5, brand: "FreshFarm", price: "28.85", oldPrice: "32.8" },
  { id: 2, image: getImageUrl(2), category: "Fruits", title: "Organic Fresh Fruits Box", rating: 3.5, brand: "FruitFresh", price: "28.85", oldPrice: "32.8" },
  { id: 3, image: getImageUrl(3), category: "Dairy", title: "Organic Whole Milk", rating: 3.5, brand: "DairyBest", price: "28.85", oldPrice: "32.8" },
  { id: 4, image: getImageUrl(4), category: "Bakery", title: "Fresh Whole Wheat Bread", rating: 3.5, brand: "BakeryDelight", price: "28.85", oldPrice: "32.8" },
  { id: 5, image: getImageUrl(5), category: "Beverages", title: "Fresh Orange Juice", rating: 3.5, brand: "FreshSqueeze", price: "28.85", oldPrice: "32.8" },
  { id: 6, image: getImageUrl(6), category: "Snacks", title: "Premium Mixed Nuts", rating: 3.5, brand: "NuttyWorld", price: "28.85", oldPrice: "32.8" },
  { id: 7, image: getImageUrl(7), category: "Meat", title: "Fresh Chicken Breast", rating: 3.5, brand: "FarmFresh", price: "28.85", oldPrice: "32.8" },
  { id: 8, image: getImageUrl(8), category: "Frozen", title: "Frozen Mixed Berries", rating: 3.5, brand: "FrozenGood", price: "28.85", oldPrice: "32.8" }
];

const Products = () => {
  return (
    <div className="product-grid-container">
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          category={product.category}
          title={product.title}
          rating={product.rating}
          brand={product.brand}
          price={product.price}
          oldPrice={product.oldPrice}
        />
      ))}
    </div>
  );
};

export default Products;
