import React from 'react'
import './nav.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';

const Nav =()=>{
    return(

        <nav className='nav d-flex align-items-center'>
    <div className='container-fluid'>
        <div className='row'>
            <div className='part1'>
                <button className='catTab'>
                    <span className='menu-icon'></span>
                 <GridViewIcon/>  Browse All Categories <KeyboardArrowDownIcon/>
                </button>
            </div>
            <div className='part2'>
                <div className='menu-links'>
                    <a href='/'>Home</a>
                    <a href='/shop'>Shop</a>
                    <a href='/products'>Products</a>
                    <a href='/blog'>Blog</a>
                    <a href='/about'>About</a>
                    <a href='/contact'>Contact</a>
                </div>
            </div>
            <div className='part3'>
                <div className='nav-contact'>
                    <div className='phone-icon'>📞</div>
                    <div className='contact-info'>
                        <span>Hotline</span>
                        <strong>+1 234 567 890</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
    );

    
};

export default Nav;
