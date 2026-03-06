import React from 'react'
import './nav.css'
import Button from '@mui/material/Button'


const Nav =()=>{
    return(

        <div className='nav d-flex align-items-center'>
    <div className='container-fluid d-flex'>
        <div className='row'>
            <div className='col-sm-3 part1'>
                <button className='bg-g text-white catTab'>Browse All Categories</button>
                </div>
                <div className='col-sm-7 part2'></div>
                <div className='col-sm-2 part3'>
            </div>
        </div>
    </div>
</div>
    );

    
};

export default Nav;