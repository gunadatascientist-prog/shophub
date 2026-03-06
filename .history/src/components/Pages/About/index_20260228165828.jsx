import React from 'react'
import about from '../../../assets/images/about-1.png'
import './style.css'

const About = () => {
    return(
        <div className='container-field1'>
<div className='container-field2'>
                 <img src={about} className="about-image" /> 
            </div>
            <div className='container-field3'>
                  <h1>Welcome to Nest</h1>
            </div>
            <div className='container-field4'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
</p>
            </div>
            <div className='container-field5'>
                  
            </div>
            <div className='container-field6'>
                  
            </div>
             
        </div>
    );
}

export default About;
