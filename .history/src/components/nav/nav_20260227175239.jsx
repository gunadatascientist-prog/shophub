import React from 'react'
import './nav.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadsetIcon from '@mui/icons-material/Headset';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Nav =()=>{
    return(

       <nav className="navBar">
  <div className="container-fluid">
    <div className="row align-items-center">

      {/* LEFT — CATEGORY BUTTON */}
      <div className="col-6 col-md-3">
        <button className="catTab w-100">
          <GridViewIcon fontSize="small" />
          <span className="ms-2 d-none d-md-inline">Browse All Categories</span>
          <KeyboardArrowDownIcon fontSize="small" />
        </button>
      </div>

      {/* MOBILE TOGGLE */}
      <div className="col-6 d-md-none text-end">
        <button
          className="menuToggle"
          onClick={() => setMobileMenu(prev => !prev)}
        >
          ☰
        </button>
      </div>

      {/* CENTER MENU */}
      <div className={`col-12 col-md-6 menuWrapper ${mobileMenu ? "show" : ""}`}>
        <ul className="menu-links list-inline mb-0">

          <li className="list-inline-item"><Link to="/">Home</Link></li>
          <li className="list-inline-item"><Link to="/about">About</Link></li>
          <li className="list-inline-item"><Link to="/shop">Shop</Link></li>
          <li className="list-inline-item"><Link to="/shop">Vendors</Link></li>

          <li className="list-inline-item position-relative megaParent">
            <Link to="/shop">Mega Menu</Link>

            <div className="dropdown_menu Megamenu">
              <div className="row">
                <div className="col-md-3">
                  <h4>Fruit & Vegetables</h4>
                  <ul>
                    <li><Link to="">Fresh Vegetables</Link></li>
                    <li><Link to="">Herbs</Link></li>
                    <li><Link to="">Sprouts</Link></li>
                  </ul>
                </div>

                <div className="col-md-3">
                  <h4>Breakfast & Dairy</h4>
                  <ul>
                    <li><Link to="">Milk</Link></li>
                    <li><Link to="">Cheese</Link></li>
                    <li><Link to="">Butter</Link></li>
                  </ul>
                </div>

                <div className="col-md-3">
                  <h4>Meat & Seafood</h4>
                  <ul>
                    <li><Link to="">Chicken</Link></li>
                    <li><Link to="">Fish</Link></li>
                    <li><Link to="">Eggs</Link></li>
                  </ul>
                </div>

                <div className="col-md-3 d-none d-md-block">
                  <img
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png"
                    className="w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>

          <li className="list-inline-item"><Link to="/blog">Blog</Link></li>
          <li className="list-inline-item"><Link to="/contact">Contact</Link></li>

        </ul>
      </div>

      {/* RIGHT SUPPORT */}
      <div className="col-md-3 d-none d-md-block">
        <div className="phNo d-flex align-items-center justify-content-end">
          <span className="headseticon"><HeadsetIcon /></span>
          <div className="info ms-2">
            <h6 className="mb-0">1900-888</h6>
            <small>24/7 Support</small>
          </div>
        </div>
      </div>

    </div>
  </div>
</nav>
    );

    
};

export default Nav;
