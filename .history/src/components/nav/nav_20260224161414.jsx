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
        <div className='row align-items-center'>
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
                    <li className='list-inline-item'><Link to='/shop'>Vendors</Link></li>
                    <li className='list-inline-item position-static'><Link to='/shop'>Mega Menu</Link>
                    <div className='dropdown_menu Megamenu w-100 '>
                        </div></li>
                    
                    <li className='list-inline-item'><Link to='/blog'>Blog</Link></li>
                    <li className='list-inline-item'><Link to='/products'>Pages</Link>
                    <div className='dropdown_menu'>
                            <ul>
                            <li><Button><Link to="/about">About Us</Link></Button></li>
                            <li><Button><Link to="/about">Contact</Link></Button></li>
                            <li><Button><Link to="/about">My Account</Link></Button></li>
                            <li><Button><Link to="/about">Login</Link></Button></li>
                            <li><Button><Link to="/about">Register</Link></Button></li>
                            <li><Button><Link to="/about">Forgot password</Link></Button></li>
                            <li><Button><Link to="/about">Reset password</Link></Button></li>
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
