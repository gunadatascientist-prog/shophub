import React, { useState, useEffect } from "react";
import "./header.css";
import Logo from "../../assets/images/logo.svg";
import IconCompare from "../../assets/images/IconCompare.svg";
import WishList from "../../assets/images/WishList.svg";
import Cart from "../../assets/images/Cart.svg";
import Account from "../../assets/images/Account.svg";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import Select from "../SelectDrop/select";
import axios from "axios";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import Button from "@mui/material/Button";

const Header = () => {
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

   const [x, y] = useState(false)
  const countrylist = [];

  useEffect(() => {
    getcountry("https://countriesnow.space/api/v0.1/countries/");
  });

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
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} />
            </div>
            <div className="col-sm-4">
              {/*header search starts here*/}
              <div className="header-search d-flex alighn-items-center">
                <Select
                  data={Categories}
                  placeholder={" All Categories"}
                  icon={<CategoryTwoToneIcon />}
                />

                <div className="search">
                  <input type="text" placeholder="Search here for items" />
                  <ManageSearchIcon className="searchicon" />
                </div>
              </div>
              {/*header search starts here*/}
            </div>
            <div className="col-sm-5 ms-auto ">
              <div className="CountryWrapper">
                <Select
                  data={countrylist}
                  placeholder={"Your Location"}
                  icon={<LocationPinIcon />}
                />
              </div>
            </div>
            <ul className="list list-inline mb-0 headerTabs">
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
                <span className="header-icon-wrap">
                  <img src={Cart} alt="Cart" />
                  <span className="icon-label">Cart</span>
                  <span className="badge">3</span>
                </span>
              </li>

              <li className="list-inline-item">
                <span className="header-icon-wrap" > 
                  <img src={Account} alt="Account" />
                  <span className="icon-label" onClick={()=> y=!(x)}>Account</span>
                  {  x!==false &&
                  <ul className='dropdownMenu'>
                    <li><Button>My Account</Button></li>
                    <li><Button>Order Tracking</Button></li>
                    <li><Button>My Wishlist</Button></li>
                    <li><Button>Settings</Button></li>
                    <li><Button>Sighn Out</Button></li>
                  </ul>
}
                
                </span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
