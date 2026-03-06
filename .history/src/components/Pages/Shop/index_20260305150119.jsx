import React, { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import FilterListIcon from '@mui/icons-material/FilterList';
import './style.css';

const Shop = () => {
  const { addToCart } = useCart();
  const [viewMode, setViewMode] = useState('grid');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    'All',
    'Fresh Vegetables',
    'Fresh Fruits',
    'Dairy & Milk',
    'Meat & Seafood',
    'Bakery',
    'Beverages',
    'Snacks',
    'Frozen Foods',
    'Organic'
  ];

  const productsData = [
    {
        id: 1,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg",
        category: "Vegetables",
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rating: 3.5,
        brand: "NestFood",
        price: "28.85",
        oldPrice: "32.8"
    },
    {
        id: 2,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg",
        category: "Fruits",
        title: "Organic Fresh Bananas",
        rating: 4.5,
        brand: "FreshFarm",
        price: "12.99",
        oldPrice: "15.99"
    },
    {
        id: 3,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg",
        category: "Dairy",
        title: "Organic Whole Milk",
        rating: 4.0,
        brand: "DairyBest",
        price: "5.99",
        oldPrice: "7.99"
    },
    {
        id: 4,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg",
        category: "Bakery",
        title: "Fresh Whole Wheat Bread",
        rating: 3.5,
        brand: "BakeryDelight",
        price: "4.50",
        oldPrice: "5.50"
    },
    {
        id: 5,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
        category: "Beverages",
        title: "Organic Orange Juice",
        rating: 4.2,
        brand: "FreshSqueeze",
        price: "8.99",
        oldPrice: "10.99"
    },
    {
        id: 6,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg",
        category: "Snacks",
        title: "Mixed Nuts Pack",
        rating: 4.8,
        brand: "NuttyWorld",
        price: "15.99",
        oldPrice: "19.99"
    },
    {
        id: 7,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg",
        category: "Meat",
        title: "Fresh Chicken Breast",
        rating: 4.0,
        brand: "FarmFresh",
        price: "9.99",
        oldPrice: "12.99"
    },
    {
        id: 8,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg",
        category: "Frozen",
        title: "Frozen Mixed Berries",
        rating: 3.8,
        brand: "FrozenGood",
        price: "7.99",
        oldPrice: "9.99"
    },
    {
        id: 9,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg",
        category: "Organic",
        title: "Organic Baby Spinach",
        rating: 4.5,
        brand: "GreenLeaf",
        price: "4.99",
        oldPrice: "6.99"
    },
    {
        id: 10,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-1.jpg",
        category: "Vegetables",
        title: "Fresh Red Tomatoes",
        rating: 4.2,
        brand: "FarmFresh",
        price: "3.99",
        oldPrice: "4.99"
    },
    {
        id: 11,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-11-1.jpg",
        category: "Dairy",
        title: "Greek Yogurt",
        rating: 4.6,
        brand: "DairyBest",
        price: "5.49",
        oldPrice: "6.99"
    },
    {
        id: 12,
        image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-12-1.jpg",
        category: "Beverages",
        title: "Green Tea Collection",
        rating: 4.3,
        brand: "TeaMasters",
        price: "12.99",
        oldPrice: "15.99"
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? productsData 
    : productsData.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="shop-page">
      <div className="shop-header">
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
          {/* Category Tabs */}
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Shop Toolbar */}
          <div className="shop-toolbar">
            <div className="toolbar-left">
              <span className="showing-products">
                Showing {filteredProducts.length} products
              </span>
            </div>
            <div className="toolbar-right">
              <div className="sort-by">
                <label>Sort by:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Rating</option>
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

          {/* Products Grid/List */}
          <div className={`products-${viewMode}`}>
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />
                    <span className="discount-tag">-{Math.round((1 - product.price/product.oldPrice) * 100)}%</span>
                    <div className="product-actions">
                      <button className="action-btn" title="Add to Wishlist">♥</button>
                      <button className="action-btn" title="Add to Compare">⇄</button>
                      <button className="action-btn" title="Quick View">👁</button>
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

          {/* Pagination */}
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
