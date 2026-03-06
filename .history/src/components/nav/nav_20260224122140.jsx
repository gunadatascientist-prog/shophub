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
            <div className='col-sm-7 part2'>
               <ul className='list list-inline'>
<li className='list-inline-item'>
</li>
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
