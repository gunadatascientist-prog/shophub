import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import Rating from '@mui/material/Rating';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import './style.css';

// Reliable image URLs
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
    9: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
    10: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400",
    11: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    12: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400",
    13: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    14: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
    15: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
    16: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400",
    17: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    18: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    19: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    20: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400",
  };
  return images[id] || `https://via.placeholder.com/400x400?text=Product+${id}`;
};

const productsData = [
  { id: 1, image: getImageUrl(1), category: "Vegetables", title: "Organic Fresh Vegetables Pack", rating: 4.5, brand: "FreshFarm", price: "28.85", oldPrice: "35.00" },
  { id: 2, image: getImageUrl(2), category: "Fruits", title: "Organic Fresh Fruits Box", rating: 4.2, brand: "FruitFresh", price: "45.99", oldPrice: "55.00" },
  { id: 3, image: getImageUrl(3), category: "Dairy", title: "Organic Whole Milk 1L", rating: 4.8, brand: "DairyBest", price: "5.99", oldPrice: "7.99" },
  { id: 4, image: getImageUrl(4), category: "Bakery", title: "Fresh Whole Wheat Bread", rating: 4.0, brand: "BakeryDelight", price: "4.50", oldPrice: "5.50" },
  { id: 5, image: getImageUrl(5), category: "Beverages", title: "Fresh Orange Juice 1L", rating: 4.3, brand: "FreshSqueeze", price: "8.99", oldPrice: "10.99" },
  { id: 6, image: getImageUrl(6), category: "Snacks", title: "Premium Mixed Nuts", rating: 4.7, brand: "NuttyWorld", price: "15.99", oldPrice: "19.99" },
  { id: 7, image: getImageUrl(7), category: "Meat", title: "Fresh Chicken Breast 500g", rating: 4.5, brand: "FarmFresh", price: "9.99", oldPrice: "12.99" },
  { id: 8, image: getImageUrl(8), category: "Frozen", title: "Frozen Mixed Berries 500g", rating: 4.1, brand: "FrozenGood", price: "7.99", oldPrice: "9.99" },
  { id: 9, image: getImageUrl(9), category: "Men", title: "Classic Cotton Shirt", rating: 4.3, brand: "FashionHub", price: "29.99", oldPrice: "39.99" },
  { id: 10, image: getImageUrl(10), category: "Women", title: "Elegant Evening Dress", rating: 4.6, brand: "StylePlus", price: "59.99", oldPrice: "79.99" },
  { id: 11, image: getImageUrl(11), category: "Men", title: "Slim Fit Jeans", rating: 4.4, brand: "DenimCo", price: "49.99", oldPrice: "65.00" },
  { id: 12, image: getImageUrl(12), category: "Women", title: "Summer Floral Dress", rating: 4.2, brand: "BloomStyle", price: "39.99", oldPrice: "49.99" },
  { id: 13, image: getImageUrl(13), category: "Accessories", title: "Leather Belt Set", rating: 4.5, brand: "LeatherCraft", price: "24.99", oldPrice: "34.99" },
  { id: 14, image: getImageUrl(14), category: "Men", title: "Wool Blend Sweater", rating: 4.7, brand: "WarmWool", price: "45.99", oldPrice: "55.99" },
  { id: 15, image: getImageUrl(15), category: "Women", title: "Designer Handbag", rating: 4.8, brand: "LuxuryBag", price: "89.99", oldPrice: "120.00" },
  { id: 16, image: getImageUrl(16), category: "Kids", title: "Kids Cotton T-Shirt Pack", rating: 4.3, brand: "KidStyle", price: "19.99", oldPrice: "25.99" },
  { id: 17, image: getImageUrl(17), category: "Smartphones", title: "Latest Smartphone 128GB", rating: 4.8, brand: "TechPro", price: "699.99", oldPrice: "899.99" },
  { id: 18, image: getImageUrl(18), category: "Laptops", title: "Ultra Slim Laptop 15.6\"", rating: 4.6, brand: "ComputeX", price: "999.99", oldPrice: "1299.99" },
  { id: 19, image: getImageUrl(19), category: "Audio", title: "Wireless Bluetooth Headphones", rating: 4.5, brand: "SoundMax", price: "149.99", oldPrice: "199.99" },
  { id: 20, image: getImageUrl(20), category: "Tablets", title: "10\" Tablet 64GB", rating: 4.4, brand: "TabPro", price: "299.99", oldPrice: "399.99" }
];

const categories = [
  "All", "Groceries", "Fashion", "Electronics", "Vegetables", "Fruits", "Dairy", "Bakery", "Beverages", "Snacks", "Meat", "Frozen", "Men", "Women", "Kids", "Accessories", "Smartphones", "Laptops", "Audio", "Tablets"
];

const Shop = () => {
  const { addToCart } = useCart();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? productsData 
    : productsData.filter(p => p.category === selectedCategory);

  return (
    <div className="shop-page">
      <div className="shop-banner">
        <div className="container-fluid">
          <h1>Shop</h1>
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Shop</span>
          </nav>
        </div>
      </div>

      <div className="shop-content">
        <div className="container-fluid">
          <div className="shop-header">
            <div className="shop-info">
              <h2>All Products</h2>
              <p>Showing {filteredProducts.length} products</p>
            </div>
            
            <div className="shop-toolbar">
              <div className="category-filter">
                {categories.slice(0, 8).map((cat) => (
                  <button 
                    key={cat} 
                    className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              
              <div className="sort-view">
                <div className="sort-by">
                  <label>Sort by:</label>
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
                <div className="view-mode">
                  <button 
                    className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <GridViewIcon />
                  </button>
                  <button 
                    className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                    onClick={() => setViewMode('list')}
                  >
                    <ViewListIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={`products-${viewMode}`}>
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.title} onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x400?text=${product.category}`;
                    }} />
                    <span className="discount-tag">
                      -{Math.round((1 - parseFloat(product.price)/parseFloat(product.oldPrice)) * 100)}%
                    </span>
                    <div className="product-actions">
                      <button className="action-btn" title="Add to Wishlist">♥</button>
                      <button className="action-btn" title="Add to Compare">⇄</button>
                    </div>
                  </div>
                  <div className="product-info">
                    <span className="category">{product.category}</span>
                    <h3 className="title">
                      <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </h3>
                    <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                    <span className="brand">By <a href="#">{product.brand}</a></span>
                    <div className="price-row">
                      <div className="price">
                        <span className="current">${product.price}</span>
                        <span className="old">${product.oldPrice}</span>
                      </div>
                      <button 
                        className="add-to-cart"
                        onClick={() => addToCart(product)}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
