import React from 'react'
import './nav.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadsetIcon from '@mui/icons-material/Headset';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Nav =()=>{
    return(

        <nav className='nav d-flex align-items-center'>
    <div className='container-fluid'>
        <div className='row align-items-center '>
            <div className='part1'>
                <button className='catTab'>
                    <GridViewIcon style={{ fontSize: 20 }} />
                    Browse All Categories 
                    <KeyboardArrowDownIcon style={{ fontSize: 20 }} />
                </button>
            </div>
            <div className='part2'>
               <ul className='menu-links list list-inline'>
                    <li className='list-inline-item'><Link to='/'>Home</Link></li>
                    <li className='list-inline-item'><Link to='/about'>About</Link></li>
                    <li className='list-inline-item'><Link to='/shop'>Shop</Link></li>
                    
                   
                   
                    <li className='list-inline-item position-static'>
                        <Link to='/cat/groceries'>Categories</Link>
                        <div className='dropdown_menu Megamenu w-100 '>
                       <div className='row'>
                            <div className='col'>
                            <h4 className='text-g'>Groceries</h4>
                            <ul className='mt-3 mb-0'>
                                <li><Link to="/cat/groceries">Fresh Vegetables</Link></li>
                                <li><Link to="/cat/groceries">Fresh Fruits</Link></li>
                                <li><Link to="/cat/groceries">Dairy Products</Link></li>
                                <li><Link to="/cat/groceries">Meat & Seafood</Link></li>
                                <li><Link to="/cat/groceries">Beverages</Link></li>
                            </ul>
                      </div>
                            <div className='col'>
                            <h4>Fashion</h4>
                            <ul className='mt-3 mb-0'>
                                <li><Link to="/cat/fashion">Men's Wear</Link></li>
                                <li><Link to="/cat/fashion">Women's Wear</Link></li>
                                <li><Link to="/cat/fashion">Kids Wear</Link></li>
                                <li><Link to="/cat/fashion">Accessories</Link></li>
                                <li><Link to="/cat/fashion">Footwear</Link></li>
                            </ul>
                            </div>
                            <div className='col'>
                            <h4>Electronics</h4>
                            <ul className='mt-3 mb-0'>
                                <li><Link to="/cat/electronics">Smartphones</Link></li>
                                <li><Link to="/cat/electronics">Laptops</Link></li>
                                <li><Link to="/cat/electronics">Audio</Link></li>
                                <li><Link to="/cat/electronics">Cameras</Link></li>
                                <li><Link to="/cat/electronics">Gaming</Link></li>
                            </ul>
                            </div>
                            <div className='col'>
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png" className='w-100' />
                            </div>
                            </div>
                            </div>
                    </li>
                    
                    <li className='list-inline-item'><Link to='/shop'>Blog</Link></li>
                    <li className='list-inline-item'><Link to='/products'>Pages</Link>
                    <div className='dropdown_menu'>
                            <ul>
                            <li><Button><Link to="/about">About Us</Link></Button></li>
                            <li><Button><Link to="/contact">Contact</Link></Button></li>
                            <li><Button><Link to="/my-account">My Account</Link></Button></li>
                            <li><Button><Link to="/my-account">Login</Link></Button></li>
                            <li><Button><Link to="/my-account">Register</Link></Button></li>
                            <li><Button><Link to="/my-account">Forgot password</Link></Button></li>
                            <li><Button><Link to="/my-account">Reset password</Link></Button></li>
                            <li><Button><Link to="/about">Purchase Guide</Link></Button></li>
                            <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                            <li><Button><Link to="/about">Terms of Service</Link></Button></li>
                            </ul>
                    </div></li>
                    
                    <li className='list-inline-item'><Link to='/contact'>Contact</Link></li>
               </ul>
            </div>
            <div className='part3'>
                <div className='phNo d-flex align-items-center'>
                    <span className='headseticon'><HeadsetIcon/></span>
                    <div className='info'>
                    <h3 className='mb-0'>1900-888</h3>
                    <p>24/7 Support Center</p>
                     </div>
                </div>
            </div>
        </div>
    </div>
</nav>
    );

    
};

export default Nav;
