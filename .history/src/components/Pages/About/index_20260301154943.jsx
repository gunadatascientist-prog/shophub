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
        <div className='containerfield7'>
            <h2>What We Provide?</h2>
            <div>
                   <img src= {wave}/>
            </div>
        </div>
        <div className='containerfield8'>
            <div className='containerfield9'>
                <div className='blink'>
                    <img src={icon1} alt={icon1} />
                
                <div>
                    <h3>24/7 Support</h3>
                    <p>There are many variations of passages of <br/>Lorem Ipsum available, but the majority have <br/>suffered alteration in some form</p>
                </div>
                <div></div>
                </div>
            </div>
            <div className='containerfield9'>
                <div className='blink'><img src={icon6} className='imgrum w-10' />
                <div>
                    <h3>100% Satisfaction</h3>
                    <p>There are many variations of passages of <br/>Lorem Ipsum available, but the majority have <br/>suffered alteration in some form</p>
                </div>
                <div></div>
                </div>
            </div>


        </div>

         <div className='containerfield10'>
             {/* this is a vertical bock ocuupies full row*/}
             <div>
                 {/* this is a vertical bock ocuupies full row*/}
                 <div>
                    {/*this a horizontal block occupies less space */}
               
                    <div className='horizon'>
                         {/*this a sub horizontal block occupies less space */}
                         <img src={whowe} className='whoweimg'/>
                    </div>
                 </div>
                 <div className='containerfield11'>
                    {/*this a horizontal block occupies less space */}
                 
                         {/*this a sub vertical block occupies vertially  space */}
                        <h3 className='heading'>Our performance</h3>
                    
                    
                         {/*this a sub vertical block occupies vertially  space */}
                        <h4 className='subheading'>Your Partner for
e-commerce grocery solution</h4> 
                    
                    
                         {/*this a sub vertical block occupies vertially  space */}
                        <p className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam <br/>aliquam cum delectus. Iure aliquam quis repellendus eaque ea! Libero  <br/>odio iusto ad perferendis excepturi cupiditate!


Lorem ipsum dolor, sit  <br/>amet consectetur adipisicing elit. <br/> Veniam aliquam cum delectus. Iure aliquam quis repellendus eaque ea! Libero odio
</p>                     
                 </div>
             </div>
         </div>
        </div>
    );
}

export default About;
