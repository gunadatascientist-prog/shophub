import React from 'react'
import about from '../../assets/images/about-1.png'
import './style.css'
import NewSlider from '../../newslider/newslide.jsx'
import wave from '../../assets/images/wave.png'
import icon1 from '../../assets/images/icon-1.png'
import icon2 from '../../assets/images/icon-2.png'
import icon3 from '../../assets/images/icon-3.png'
import icon4 from '../../assets/images/icon-4.png'
import icon5 from '../../assets/images/icon-5.png'
import icon6 from '../../assets/images/icon-6.svg'
import whowe from '../../assets/images/whowe-are1.png'



const About = () => {
    return(
      <div className="about-container">
        {/* Section 1: About with image, heading, text, slider */}
        <div className="about-hero">
          <div className="about-image-wrapper">
            <img src={about} className="about-image" alt="About Nest" />
          </div>
          <div className="about-content">
            <h1>Welcome to Nest</h1>
            <div className="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id
                est laborum.
              </p>
              <p>
                Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et ut
                placerat legendos interpre. Donec vitae sapien ut libero venenatis
                faucibus. Nullam quis ante. Etiam sit amet orci eget. Quis commodo odio
                aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus.
                Auctor elit sed vulputate mi sit amet.
              </p>
            </div>
          </div>
        </div>

        <div className="about-slider">
          <NewSlider />
        </div>

        {/* Section 2: What We Provide */}
        <div className="services-section">
          <h2>What We Provide?</h2>
          <div className="wave-decoration">
            <img src={wave} alt="Wave decoration" />
          </div>
        </div>

        {/* Section 3: Services cards */}
        <div className="services-container">
          <div className="service-card">
            <img src={icon1} alt="24/7 Support icon" className="service-icon" />
            <div className="service-content">
              <h3>24/7 Support</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form.
              </p>
            </div>
          </div>

          <div className="service-card">
            <img src={icon6} alt="100% Satisfaction icon" className="service-icon" />
            <div className="service-content">
              <h3>100% Satisfaction</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Performance section with image and text */}
        <div className="performance-section">
          <div className="performance-image">
            <img src={whowe} alt="Who we are" />
          </div>
          <div className="performance-content">
            <h3>Our performance</h3>
            <h4>Your Partner for e-commerce grocery solution</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              aliquam cum delectus. Iure aliquam quis repellendus eaque ea! Libero
              odio iusto ad perferendis excepturi cupiditate!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              aliquam cum delectus. Iure aliquam quis repellendus eaque ea! Libero
              odio.
            </p>
          </div>
        </div>
</div>
    );
}

export default About;
