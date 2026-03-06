import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LogoutIcon from '@mui/icons-material/Logout';
import './style.css';

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: <PersonIcon />, label: 'Dashboard' },
    { id: 'orders', icon: <ShoppingBagIcon />, label: 'Orders' },
    { id: 'wishlist', icon: <FavoriteIcon />, label: 'Wishlist' },
    { id: 'address', icon: <LocationOnIcon />, label: 'Addresses' },
    { id: 'account', icon: <PersonIcon />, label: 'Account Details' },
    { id: 'logout', icon: <LogoutIcon />, label: 'Logout' },
  ];

  const orders = [
    { id: '#ORD-001', date: '2024-01-15', status: 'Delivered', total: '$125.99' },
    { id: '#ORD-002', date: '2024-01-10', status: 'Processing', total: '$89.50' },
    { id: '#ORD-003', date: '2024-01-05', status: 'Shipped', total: '$45.00' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="dashboard-content">
            <h3>Welcome back, John!</h3>
            <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
            
            <div className="dashboard-stats">
              <div className="stat-card">
                <ShoppingBagIcon className="stat-icon" />
                <div className="stat-info">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Orders</span>
                </div>
              </div>
              <div className="stat-card">
                <FavoriteIcon className="stat-icon" />
                <div className="stat-info">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Wishlist</span>
                </div>
              </div>
              <div className="stat-card">
                <LocationOnIcon className="stat-icon" />
                <div className="stat-info">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Addresses</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'orders':
        return (
          <div className="orders-content">
            <h3>My Orders</h3>
            <div className="orders-table">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.date}</td>
                      <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
                      <td>{order.total}</td>
                      <td><button className="view-btn">View</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'wishlist':
        return (
          <div className="wishlist-content">
            <h3>My Wishlist</h3>
            <div className="wishlist-items">
              <div className="wishlist-item">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg" alt="Product" />
                <div className="item-info">
                  <h4>Organic Quinoa</h4>
                  <span className="price">$28.85</span>
                </div>
                <button className="add-cart-btn">Add to Cart</button>
                <button className="remove-btn">×</button>
              </div>
              <div className="wishlist-item">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg" alt="Product" />
                <div className="item-info">
                  <h4>Fresh Bananas</h4>
                  <span className="price">$12.99</span>
                </div>
                <button className="add-cart-btn">Add to Cart</button>
                <button className="remove-btn">×</button>
              </div>
            </div>
          </div>
        );

      case 'address':
        return (
          <div className="address-content">
            <h3>My Addresses</h3>
            <div className="address-cards">
              <div className="address-card">
                <h4>Home Address <span className="default-badge">Default</span></h4>
                <p>John Doe</p>
                <p>123 Main Street</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
                <p>+1 234 567 890</p>
                <button className="edit-btn">Edit</button>
              </div>
              <div className="address-card">
                <h4>Office Address</h4>
                <p>John Doe</p>
                <p>456 Business Ave</p>
                <p>San Francisco, CA 94105</p>
                <p>United States</p>
                <p>+1 987 654 321</p>
                <button className="edit-btn">Edit</button>
              </div>
            </div>
            <button className="add-address-btn">+ Add New Address</button>
          </div>
        );

      case 'account':
        return (
          <div className="account-content">
            <h3>Account Details</h3>
            <form className="account-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" defaultValue="John" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" defaultValue="Doe" />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" defaultValue="+1 234 567 890" />
              </div>
              <h4>Change Password</h4>
              <div className="form-group">
                <label>Current Password</label>
                <input type="password" placeholder="Enter current password" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>New Password</label>
                  <input type="password" placeholder="Enter new password" />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" placeholder="Confirm new password" />
                </div>
              </div>
              <button type="submit" className="save-btn">Save Changes</button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="myaccount-page">
      <div className="account-header">
        <div className="container-fluid">
          <h1>My Account</h1>
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>My Account</span>
          </nav>
        </div>
      </div>

      <div className="account-content-wrapper">
        <div className="container-fluid">
          <div className="account-layout">
            <div className="account-sidebar">
              <div className="user-info">
                <div className="user-avatar">JD</div>
                <h3>John Doe</h3>
                <p>john.doe@example.com</p>
              </div>
              <ul className="account-menu">
                {menuItems.map(item => (
                  <li key={item.id}>
                    <button 
                      className={activeTab === item.id ? 'active' : ''}
                      onClick={() => setActiveTab(item.id)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="account-main">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
