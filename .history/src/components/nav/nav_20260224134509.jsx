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
                    <li className='list-inline-item'><a href='/products'>Pages</a></li>
                    
                    <li className='list-inline-item'><a href='/contact'>Contact</a></li>
               </ul>
            </div>
            <div className='col-sm-2 part3 d-flex align-items-center'>
<div className='phNo d-flex align-items-center'>
<span><Headphones OutlinedIcon/></span>
<div className='info ml-3'>
Ch3 className='text-gImb-01900888</h3>
<p>24/7 Support Center</p>
</div>
</div>
</div>
        </div>
    
</nav>
    );

    
};

export default Nav;
