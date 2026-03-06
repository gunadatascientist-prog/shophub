import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import Rating from '@mui/material/Rating';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import './style.css';

// Reliable image URLs from multiple sources
const getImageUrl = (id, type = 'product') => {
  const images = {
    // Groceries products
    1: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400",
    2: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400",
    3: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
    4: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
    5: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
    6: "https://images.unsplash.com/photo-1599599810769-bcde5a45dd03?w=400",
    7: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400",
    8: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400",
    // Fashion products
    101: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
    102: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400",
    103: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    104: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400",
    105: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    106: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
    107: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
    108: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400",
    // Electronics products
    201: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    202: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    203: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    204: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400",
    205: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    206: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400",
    207: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    208: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400"
  };
  return images[id] || `https://via.placeholder.com/400x400?text=Product+${id}`;
};

// Category banners
const getBannerUrl = (slug) => {
  const banners = {
    groceries: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200",
    fashion: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200",
    electronics: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200"
  };
  return banners[slug] || "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200";
};

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const { addToCart } = useCart();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');

  // Category data with specific products
  const categoryData = {
    groceries: {
      title: 'Groceries',
      description: 'Fresh groceries delivered to your door',
      banner: getBannerUrl('groceries'),
      products: [
        { id: 1, image: getImageUrl(1), category: "Vegetables", title: "Organic Fresh Vegetables Pack", rating: 4.5, brand: "FreshFarm", price: "28.85", oldPrice: "35.00" },
        { id: 2, image: getImageUrl(2), category: "Fruits", title: "Organic Fresh Fruits Box", rating: 4.2, brand: "FruitFresh", price: "45.99", oldPrice: "55.00" },
        { id: 3, image: getImageUrl(3), category: "Dairy", title: "Organic Whole Milk 1L", rating: 4.8, brand: "DairyBest", price: "5.99", oldPrice: "7.99" },
        { id: 4, image: getImageUrl(4), category: "Bakery", title: "Fresh Whole Wheat Bread", rating: 4.0, brand: "BakeryDelight", price: "4.50", oldPrice: "5.50" },
        { id: 5, image: getImageUrl(5), category: "Beverages", title: "Fresh Orange Juice 1L", rating: 4.3, brand: "FreshSqueeze", price: "8.99", oldPrice: "10.99" },
        { id: 6, image: getImageUrl(6), category: "Snacks", title: "Premium Mixed Nuts", rating: 4.7, brand: "NuttyWorld", price: "15.99", oldPrice: "19.99" },
        { id: 7, image: getImageUrl(7), category: "Meat", title: "Fresh Chicken Breast 500g", rating: 4.5, brand: "FarmFresh", price: "9.99", oldPrice: "12.99" },
        { id: 8, image: getImageUrl(8), category: "Frozen", title: "Frozen Mixed Berries 500g", rating: 4.1, brand: "FrozenGood", price: "7.99", oldPrice: "9.99" }
      ]
    },
    fashion: {
      title: 'Fashion',
      description: 'Trending fashion wear for all occasions',
      banner: getBannerUrl('fashion'),
      products: [
        { id: 101, image: getImageUrl(101), category: "Men", title: "Classic Cotton Shirt", rating: 4.3, brand: "FashionHub", price: "29.99", oldPrice: "39.99" },
        { id: 102, image: getImageUrl(102), category: "Women", title: "Elegant Evening Dress", rating: 4.6, brand: "StylePlus", price: "59.99", oldPrice: "79.99" },
        { id: 103, image: getImageUrl(103), category: "Men", title: "Slim Fit Jeans", rating: 4.4, brand: "DenimCo", price: "49.99", oldPrice: "65.00" },
        { id: 104, image: getImageUrl(104), category: "Women", title: "Summer Floral Dress", rating: 4.2, brand: "BloomStyle", price: "39.99", oldPrice: "49.99" },
        { id: 105, image: getImageUrl(105), category: "Accessories", title: "Leather Belt Set", rating: 4.5, brand: "LeatherCraft", price: "24.99", oldPrice: "34.99" },
        { id: 106, image: getImageUrl(106), category: "Men", title: "Wool Blend Sweater", rating: 4.7, brand: "WarmWool", price: "45.99", oldPrice: "55.99" },
        { id: 107, image: getImageUrl(107), category: "Women", title: "Designer Handbag", rating: 4.8, brand: "LuxuryBag", price: "89.99", oldPrice: "120.00" },
        { id: 108, image: getImageUrl(108), category: "Kids", title: "Kids Cotton T-Shirt Pack", rating: 4.3, brand: "KidStyle", price: "19.99", oldPrice: "25.99" }
      ]
    },
    electronics: {
      title: 'Electronics',
      description: 'Latest gadgets and electronics',
      banner: getBannerUrl('electronics'),
      products: [
        { id: 201, image: getImageUrl(201), category: "Smartphones", title: "Latest Smartphone 128GB", rating: 4.8, brand: "TechPro", price: "699.99", oldPrice: "899.99" },
        { id: 202, image: getImageUrl(202), category: "Laptops", title: "Ultra Slim Laptop 15.6\"", rating: 4.6, brand: "ComputeX", price: "999.99", oldPrice: "1299.99" },
        { id: 203, image: getImageUrl(203), category: "Audio", title: "Wireless Bluetooth Headphones", rating: 4.5, brand: "SoundMax", price: "149.99", oldPrice: "199.99" },
        { id: 204, image: getImageUrl(204), category: "Tablets", title: "10\" Tablet 64GB", rating: 4.4, brand: "TabPro", price: "299.99", oldPrice: "399.99" },
        { id: 205, image: getImageUrl(205), category: "Cameras", title: "Digital Camera 24MP", rating: 4.7, brand: "PhotoTech", price: "449.99", oldPrice: "599.99" },
        { id: 206, image: getImageUrl(206), category: "Gaming", title: "Gaming Console 1TB", rating: 4.9, brand: "GameZone", price: "399.99", oldPrice: "499.99" },
        { id: 207, image: getImageUrl(207), category: "Smartwatches", title: "Smart Watch Series 8", rating: 4.6, brand: "WristTech", price: "249.99", oldPrice: "329.99" },
        { id: 208, image: getImageUrl(208), category: "Accessories", title: "Phone Case & Screen Protector", rating: 4.2, brand: "GadgetGuard", price: "19.99", oldPrice: "29.99" }
      ]
    }
  };

  const category = categoryData[categorySlug] || categoryData.groceries;

  return (
    <div className="category-page">
      {/* Category Banner */}
      <div className="category-banner" style={{ backgroundImage: `url(${category.banner})` }}>
        <div className="container-fluid">
          <div className="banner-content">
            <h1>{category.title}</h1>
            <p>{category.description}</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>{category.title}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Category Content */}
      <div className="category-content">
        <div className="container-fluid">
          {/* Category Info */}
          <div className="category-info">
            <h2>Shop {category.title}</h2>
            <p>Showing {category.products.length} products</p>
          </div>

          {/* Shop Toolbar */}
          <div className="shop-toolbar">
            <div className="toolbar-left">
              <span className="showing-products">
                Showing {category.products.length} products
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

          {/* Products Grid */}
          <div className={`products-${viewMode}`}>
            {category.products.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.title} onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x400?text=${product.category}`;
                    }} />
                    <span className="discount-tag">-{Math.round((1 - parseFloat(product.price)/parseFloat(product.oldPrice)) * 100)}%</span>
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
            <button className="page-btn">→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
