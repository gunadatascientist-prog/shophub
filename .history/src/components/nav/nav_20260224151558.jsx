import React from 'react'
import './nav.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadsetIcon from '@mui/icons-material/Headset';;
import { Link } from 'react-router-dom';

const Nav =()=>{
    return(

        <nav className='nav d-flex align-items-center'>
    <div className='container-fluid'>
        <div className='row'>
            <div className='part1'>
                <button className='catTab'>
                    <GridViewIcon style={{ fontSize: 20 }} />
                    Browse All Categories 
                    <KeyboardArrowDownIcon style={{ fontSize: 20 }} />
                </button>
            </div>
            <div className='part2'>
               <ul className='menu-links list list-inline'>
                    <li className='list-inline-item'><a href='/'>Home</a></li>
                    <li className='list-inline-item'><a href='/about'>About</a></li>
                    <li className='list-inline-item'><a href='/shop'>Shop</a></li>
                    <li className='list-inline-item'><a href='/shop'>Vendors</a></li>
                    <li className='list-inline-item'><a href='/shop'>Mega Menu</a></li>
                    
                    <li className='list-inline-item'><a href='/blog'>Blog</a></li>
                    <li className='list-inline-item'><a href='/products'>Pages</a>
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
                            <li><Button><Link to="/about">Terms of Service</Link></Button></li>
                            </ul>
                    </div></li>
                    
                    <li className='list-inline-item'><a href='/contact'>Contact</a></li>
               </ul>
            </div>
            <div className='col-sm-2 part3 d-flex align-items-center'>
                <div className='phNo d-flex align-items-center'>
                    <span className='headericon'><HeadsetIcon/></span>
                    <div className='info ml-3'>
                    <h3  className='text-gImb-0'>1900-888</h3>
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
