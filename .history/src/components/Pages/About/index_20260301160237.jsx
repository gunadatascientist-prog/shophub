import React from 'react'
import about from '../../../assets/images/about-1.png'
import './style.css'
import NewSlider from '../../newslider/newslide.jsx'
import wave from '../../../assets/images/wave.png'
import icon1 from '../../../assets/images/icon-1.png'
import icon2 from '../../../assets/images/icon-2.png'
import icon3 from '../../../assets/images/icon-3.png'
import icon4 from '../../../assets/images/icon-4.png'
import icon5 from '../../../assets/images/icon-5.png'
import icon6 from '../../../assets/images/icon-6.svg'
import whowe from '../../assets/images/whowe-are1.png'



const About = () => {
    return(
      <div>
  <div className="container-field1">
    <div className="container-field2">
      <img src={about} className="about-image" alt="About Nest" />
    </div>

    <div className="container-field3">
      <h1>Welcome to Nest</h1>
    </div>

    <div className="container-field4">
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

    <div className="container-field5">
      <NewSlider />
    </div>

    <div className="container-field6"></div>
  </div>

  <div className="container-field7">
    <h2>What We Provide?</h2>
    <div>
      <img src={wave} alt="Wave decoration" />
    </div>
  </div>

  <div className="container-field8">
    <div className="container-field9">
      <div className="blink">
        <img src={icon1} alt="24/7 Support icon" />
        <div>
          <h3>24/7 Support</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>
    </div>

    <div className="container-field9">
      <div className="blink">
        <img
          src={icon6}
          className="imgrum w-10"
          alt="100% Satisfaction icon"
        />
        <div>
          <h3>100% Satisfaction</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="container-field10">
    <div>
      <div>
        <div className="horizon">
          <img src={whowe} className="whoweimg" alt="Who we are" />
        </div>
      </div>

      <div className="container-field11">
        <h3 className="heading">Our performance</h3>

        <h4 className="subheading">
          Your Partner for e-commerce grocery solution
        </h4>

        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          aliquam cum delectus. Iure aliquam quis repellendus eaque ea! Libero
          odio iusto ad perferendis excepturi cupiditate!
        </p>

        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          aliquam cum delectus. Iure aliquam quis repellendus eaque ea! Libero
          odio.
        </p>
      </div>
    </div>
  </div>
</div>
    );
}

export default About;
