import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import Rating from '@mui/material/Rating';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import './style.css';

// Reliable image URLs from Unsplash
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
    electronics: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200",
    vegetables: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200",
    fruits: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=1200",
    dairy: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=1200",
    bakery: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200",
    beverages: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=1200",
    snacks: "https://images.unsplash.com/photo-1599599810769-bcde5a45dd03?w=1200",
    meat: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=1200"
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
    },
    vegetables: {
      title: 'Vegetables',
      description: 'Fresh organic vegetables from local farms',
      banner: getBannerUrl('vegetables'),
      products: [
        { id: 1, image: getImageUrl(1), category: "Vegetables", title: "Organic Fresh Vegetables Pack", rating: 4.5, brand: "FreshFarm", price: "28.85", oldPrice: "35.00" },
        { id: 2, image: getImageUrl(2), category: "Vegetables", title: "Fresh Green Spinach Bundle", rating: 4.3, brand: "GreenGrow", price: "5.99", oldPrice: "7.99" },
        { id: 3, image: getImageUrl(3), category: "Vegetables", title: "Organic Carrots 1kg", rating: 4.6, brand: "FarmFresh", price: "4.99", oldPrice: "6.99" },
        { id: 4, image: getImageUrl(4), category: "Vegetables", title: "Fresh Tomatoes Pack", rating: 4.2, brand: "RedFarm", price: "6.99", oldPrice: "8.99" },
        { id: 5, image: getImageUrl(5), category: "Vegetables", title: "Organic Broccoli Bundle", rating: 4.7, brand: "GreenGrow", price: "7.99", oldPrice: "9.99" },
        { id: 6, image: getImageUrl(6), category: "Vegetables", title: "Fresh Potatoes 5kg", rating: 4.4, brand: "FarmFresh", price: "12.99", oldPrice: "15.99" }
      ]
    },
    fruits: {
      title: 'Fruits',
      description: 'Delicious fresh fruits from around the world',
      banner: getBannerUrl('fruits'),
      products: [
        { id: 2, image: getImageUrl(2), category: "Fruits", title: "Organic Fresh Fruits Box", rating: 4.2, brand: "FruitFresh", price: "45.99", oldPrice: "55.00" },
        { id: 1, image: getImageUrl(1), category: "Fruits", title: "Fresh Apple Pack", rating: 4.5, brand: "AppleFarm", price: "15.99", oldPrice: "19.99" },
        { id: 2, image: getImageUrl(2), category: "Fruits", title: "Organic Banana Bundle", rating: 4.3, brand: "TropicalFresh", price: "8.99", oldPrice: "10.99" },
        { id: 3, image: getImageUrl(3), category: "Fruits", title: "Fresh Orange Juice 1L", rating: 4.6, brand: "FreshSqueeze", price: "9.99", oldPrice: "12.99" },
        { id: 4, image: getImageUrl(4), category: "Fruits", title: "Mixed Berries Pack", rating: 4.8, brand: "BerryGood", price: "18.99", oldPrice: "22.99" },
        { id: 5, image: getImageUrl(5), category: "Fruits", title: "Fresh Mangoes 1kg", rating: 4.7, brand: "TropicalFresh", price: "12.99", oldPrice: "15.99" }
      ]
    },
    dairy: {
      title: 'Dairy',
      description: 'Fresh dairy products and milk',
      banner: getBannerUrl('dairy'),
      products: [
        { id: 3, image: getImageUrl(3), category: "Dairy", title: "Organic Whole Milk 1L", rating: 4.8, brand: "DairyBest", price: "5.99", oldPrice: "7.99" },
        { id: 1, image: getImageUrl(1), category: "Dairy", title: "Fresh Greek Yogurt 500g", rating: 4.6, brand: "YogurtPro", price: "7.99", oldPrice: "9.99" },
        { id: 2, image: getImageUrl(2), category: "Dairy", title: "Premium Cheese Block", rating: 4.5, brand: "CheeseCraft", price: "14.99", oldPrice: "18.99" },
        { id: 3, image: getImageUrl(3), category: "Dairy", title: "Organic Butter 250g", rating: 4.7, brand: "DairyBest", price: "8.99", oldPrice: "10.99" },
        { id: 4, image: getImageUrl(4), category: "Dairy", title: "Fresh Cream 1L", rating: 4.4, brand: "FreshDairy", price: "6.99", oldPrice: "8.99" },
        { id: 5, image: getImageUrl(5), category: "Dairy", title: "Chocolate Milk 1L", rating: 4.3, brand: "CocoMilk", price: "4.99", oldPrice: "5.99" }
      ]
    },
    bakery: {
      title: 'Bakery',
      description: 'Freshly baked goods and bread',
      banner: getBannerUrl('bakery'),
      products: [
        { id: 4, image: getImageUrl(4), category: "Bakery", title: "Fresh Whole Wheat Bread", rating: 4.0, brand: "BakeryDelight", price: "4.50", oldPrice: "5.50" },
        { id: 1, image: getImageUrl(1), category: "Bakery", title: "Croissants Pack (4)", rating: 4.7, brand: "FrenchBakery", price: "8.99", oldPrice: "10.99" },
        { id: 2, image: getImageUrl(2), category: "Bakery", title: "Chocolate Chip Cookies", rating: 4.5, brand: "SweetTreats", price: "6.99", oldPrice: "8.99" },
        { id: 3, image: getImageUrl(3), category: "Bakery", title: "Fresh Donuts (6 Pack)", rating: 4.6, brand: "DonutKing", price: "9.99", oldPrice: "12.99" },
        { id: 4, image: getImageUrl(4), category: "Bakery", title: "Sourdough Bread Loaf", rating: 4.8, brand: "ArtisanBake", price: "7.99", oldPrice: "9.99" },
        { id: 5, image: getImageUrl(5), category: "Bakery", title: "Cinnamon Rolls (4)", rating: 4.4, brand: "SweetTreats", price: "8.99", oldPrice: "10.99" }
      ]
    },
    beverages: {
      title: 'Beverages',
      description: 'Refreshing drinks and juices',
      banner: getBannerUrl('beverages'),
      products: [
        { id: 5, image: getImageUrl(5), category: "Beverages", title: "Fresh Orange Juice 1L", rating: 4.3, brand: "FreshSqueeze", price: "8.99", oldPrice: "10.99" },
        { id: 1, image: getImageUrl(1), category: "Beverages", title: "Green Tea Pack (50 bags)", rating: 4.6, brand: "TeaGarden", price: "12.99", oldPrice: "15.99" },
        { id: 2, image: getImageUrl(2), category: "Beverages", title: "Organic Coffee Beans 500g", rating: 4.8, brand: "CoffeeRoast", price: "18.99", oldPrice: "22.99" },
        { id: 3, image: getImageUrl(3), category: "Beverages", title: "Coconut Water 1L", rating: 4.5, brand: "TropicalFresh", price: "5.99", oldPrice: "7.99" },
        { id: 4, image: getImageUrl(4), category: "Beverages", title: "Smoothie Mix Pack", rating: 4.4, brand: "FreshBlend", price: "14.99", oldPrice: "17.99" },
        { id: 5, image: getImageUrl(5), category: "Beverages", title: "Lemonade 1L", rating: 4.2, brand: "FreshSqueeze", price: "4.99", oldPrice: "5.99" }
      ]
    },
    snacks: {
      title: 'Snacks',
      description: 'Tasty snacks for every occasion',
      banner: getBannerUrl('snacks'),
      products: [
        { id: 6, image: getImageUrl(6), category: "Snacks", title: "Premium Mixed Nuts", rating: 4.7, brand: "NuttyWorld", price: "15.99", oldPrice: "19.99" },
        { id: 1, image: getImageUrl(1), category: "Snacks", title: "Potato Chips Variety Pack", rating: 4.5, brand: "CrispKing", price: "9.99", oldPrice: "12.99" },
        { id: 2, image: getImageUrl(2), category: "Snacks", title: "Trail Mix Energy Bars", rating: 4.6, brand: "EnergyBar", price: "11.99", oldPrice: "14.99" },
        { id: 3, image: getImageUrl(3), category: "Snacks", title: "Popcorn Butter 500g", rating: 4.3, brand: "PopLife", price: "6.99", oldPrice: "8.99" },
        { id: 4, image: getImageUrl(4), category: "Snacks", title: "Protein Chips Pack", rating: 4.4, brand: "FitSnack", price: "8.99", oldPrice: "10.99" },
        { id: 5, image: getImageUrl(5), category: "Snacks", title: "Dark Chocolate 70% 200g", rating: 4.8, brand: "CocoaLux", price: "7.99", oldPrice: "9.99" }
      ]
    },
    meat: {
      title: 'Meat',
      description: 'Fresh meat and poultry',
      banner: getBannerUrl('meat'),
      products: [
        { id: 7, image: getImageUrl(7), category: "Meat", title: "Fresh Chicken Breast 500g", rating: 4.5, brand: "FarmFresh", price: "9.99", oldPrice: "12.99" },
        { id: 1, image: getImageUrl(1), category: "Meat", title: "Premium Beef Steak 500g", rating: 4.7, brand: "MeatMaster", price: "15.99", oldPrice: "19.99" },
        { id: 2, image: getImageUrl(2), category: "Meat", title: "Fresh Salmon Fillet 400g", rating: 4.8, brand: "SeaFresh", price: "18.99", oldPrice: "22.99" },
        { id: 3, image: getImageUrl(3), category: "Meat", title: "Pork Chops 500g", rating: 4.4, brand: "FarmFresh", price: "11.99", oldPrice: "14.99" },
        { id: 4, image: getImageUrl(4), category: "Meat", title: "Ground Beef 500g", rating: 4.5, brand: "MeatMaster", price: "10.99", oldPrice: "13.99" },
        { id: 5, image: getImageUrl(5), category: "Meat", title: "Turkey Breast 500g", rating: 4.6, brand: "FarmFresh", price: "14.99", oldPrice: "17.99" }
      ]
    }
  };

  const category = categoryData[categorySlug] || categoryData.groceries;

  return (
    <div className="category-page">
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

      <div className="category-content">
        <div className="container-fluid">
          <div className="category-info">
            <h2>Shop {category.title}</h2>
            <p>Showing {category.products.length} products</p>
          </div>

          <div className="shop-toolbar">
            <div className="toolbar-left">
              <span className="showing-products">Showing {category.products.length} products</span>
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
                <button className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')}>
                  <GridViewIcon />
                </button>
                <button className={`view-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')}>
                  <ViewListIcon />
                </button>
              </div>
            </div>
          </div>

          <div className={`products-${viewMode}`}>
            {category.products.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.title} onError={(e) => { e.target.src = `https://via.placeholder.com/400x400?text=${product.category}`; }} />
                    <span className="discount-tag">-{Math.round((1 - parseFloat(product.price)/parseFloat(product.oldPrice)) * 100)}%</span>
                    <div className="product-actions">
                      <button className="action-btn" title="Add to Wishlist">♥</button>
                      <button className="action-btn" title="Add to Compare">⇄</button>
                      <button className="action-btn" title="Quick View">👁</button>
                    </div>
                  </div>
                  <div className="product-info">
                    <span className="category">{product.category}</span>
                    <h3 className="title"><Link to={`/product/${product.id}`}>{product.title}</Link></h3>
                    <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                    <span className="brand">By <a href="#">{product.brand}</a></span>
                    <div className="price-row">
                      <div className="price">
                        <span className="current">${product.price}</span>
                        <span className="old">${product.oldPrice}</span>
                      </div>
                      <button className="add-to-cart" onClick={() => addToCart(product)}>Add</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
