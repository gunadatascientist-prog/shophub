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
                    <li className='list-inline-item'><a href='/shop'>Shop</a></li>
                    <li className='list-inline-item'><a href='/products'>Products</a></li>
                    <li className='list-inline-item'><a href='/blog'>Blog</a></li>
                    <li className='list-inline-item'><a href='/about'>About</a></li>
                    <li className='list-inline-item'><a href='/contact'>Contact</a></li>
               </ul>
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
