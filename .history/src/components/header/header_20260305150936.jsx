import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo1.svg";
import IconCompare from "../../assets/images/IconCompare.svg";
import WishList from "../../assets/images/WishList.svg";
import CartIcon from "../../assets/images/Cart.svg";
import Account from "../../assets/images/Account.svg";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import Select from "../SelectDrop/select";
import axios from "axios";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import Button from "@mui/material/Button";
import { useCart } from "../../context/CartContext";


const Header = () => {
  const { cartCount } = useCart();
  
  const [Categories, setcategories] = useState([
    " Milk and Diaries",
    " Wines & Drinks",
    " Clothings & Beauty",
    " Fresh SeaFood",
    " Pets Food & Toys",
    " Fast Food",
    " Baking Materials",
    " Vegetables",
    " Frest Foods",
    " read & Jucies",
    " Fresh SeaFood",
  ]);

   const [open, setopen] = useState(false);
  const countrylist = [];

  useEffect(() => {
    getcountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getcountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.data.map((item, index) => {
            countrylist.push(item.country);
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <header>
  <div className="container-fluid">
    <div className="row align-items-center gy-2">

      {/* Logo */}
      <div className="col-6 col-md-2">
        <img src={Logo} alt="Logo" className="img-fluid" />
      </div>

      {/* Search */}
      <div className="col-12 col-md-5 order-3 order-md-2">
        <div className="header-search d-flex align-items-center flex-wrap">
          <Select
            data={Categories}
            placeholder="All Categories"
            icon={<CategoryTwoToneIcon />}
          />

          <div className="search flex-grow-1">
            <input type="text" placeholder="Search here for items" className="w-100" />
            <ManageSearchIcon className="searchicon" />
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="col-6 col-md-2 order-2 order-md-3">
        <div className="CountryWrapper">
          <Select
            data={countrylist}
            placeholder="Your Location"
            icon={<LocationPinIcon />}
          />
        </div>
      </div>

      {/* Icons */}
      <div className="col-12 col-md-3 order-4">
        <ul className="list list-inline mb-0 headerTabs d-flex justify-content-md-end justify-content-between flex-wrap">

          <li className="list-inline-item">
            <span className="header-icon-wrap">
              <img src={IconCompare} alt="Compare" />
              <span className="icon-label">Compare</span>
              <span className="badge">3</span>
            </span>
          </li>

          <li className="list-inline-item">
            <span className="header-icon-wrap">
              <img src={WishList} alt="WishList" />
              <span className="icon-label">WishList</span>
              <span className="badge">3</span>
            </span>
          </li>

          <li className="list-inline-item">
            <Link to="/cart" className="header-icon-wrap">
              <img src={CartIcon} alt="Cart" />
              <span className="icon-label">Cart</span>
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </Link>
          </li>

          <li className="list-inline-item position-relative">
            <span className="header-icon-wrap">
              <img src={Account} alt="Account" />
              <span
                className="icon-label"
                onClick={() => setopen(prev => !prev)}
              >
                Account
              </span>

              {open && (
                <ul className="dropdownMenu position-absolute">
                  <li><Link to="/my-account"><Button>My Account</Button></Link></li>
                  <li><Link to="/my-account"><Button>Order Tracking</Button></Link></li>
                  <li><Link to="/my-account"><Button>My Wishlist</Button></Link></li>
                  <li><Button>Settings</Button></li>
                  <li><Button>Sign Out</Button></li>
                </ul>
              )}
            </span>
          </li>

        </ul>
      </div>

    </div>
  </div>
</header>
      
    </>
  );
};
export default Header;
