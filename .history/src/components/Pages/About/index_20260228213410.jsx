import React from 'react'
import about from '../../../assets/images/about-1.png'
import './style.css'
import NewSlider from '../../newslider/newslide.jsx'
import wave from '../../../assets/images/wave.png'

const About = () => {
    return(
        <div>
        <div className='container-field1'>
            <div className='container-field2'>
                 <img src={about} className="about-image" /> 
            </div>
            <div className='container-field3'>
                  <h1>Welcome to Nest</h1>
            </div>
            <div className='container-field4'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br/>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis <br/>aute irure dolor in reprehenderit in voluptate id est laborum.
</p>
<p>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat <br/>legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis<br/> ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis<br/> massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet.<br/> Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est<br/> laborum.

</p>

            </div>
            <div className='container-field5'>
                  <NewSlider/>
            </div>
            <div className='container-field6'>
                  
            </div>
             
        </div>
        <div>
            <h2>What We Provide?</h2>
            <div>
                    {wave}
            </div>
        </div>
        <div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>
        </div>
    );
}

export default About;
