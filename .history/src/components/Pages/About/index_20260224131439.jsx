import React from 'react'
import './Style.css'

const About = () => {
    return(
        <div className='about-page'>
            <h1>About Us</h1>
            
            <div className='about-content'>
                <div className='about-section'>
                    <h2>Who We Are</h2>
                    <p>We are a premier online grocery store dedicated to providing fresh, high-quality products to our customers. With a focus on sustainability and customer satisfaction, we source the best ingredients from local farms and trusted suppliers.</p>
                </div>
                
                <div className='about-features'>
                    <div className='feature-card'>
                        <div className='icon'>🥬</div>
                        <h3>Fresh Produce</h3>
                        <p>Daily fresh vegetables and fruits from local farms</p>
                    </div>
                    <div className='feature-card'>
                        <div className='icon'>🚚</div>
                        <h3>Fast Delivery</h3>
                        <p>Quick and reliable delivery to your doorstep</p>
                    </div>
                    <div className='feature-card'>
                        <div className='icon'>💯</div>
                        <h3>Quality First</h3>
                        <p>Premium quality products guaranteed</p>
                    </div>
                </div>
                
                <div className='about-team'>
                    <h2>Our Team</h2>
                    <div className='team-grid'>
                        <div className='team-member'>
                            <div className='avatar'>👨‍💼</div>
                            <h4>John Smith</h4>
                            <span>CEO & Founder</span>
                        </div>
                        <div className='team-member'>
                            <div className='avatar'>👩‍💼</div>
                            <h4>Sarah Johnson</h4>
                            <span>Operations Manager</span>
                        </div>
                        <div className='team-member'>
                            <div className='avatar'>👨‍🍳</div>
                            <h4>Mike Davis</h4>
                            <span>Quality Head</span>
                        </div>
                        <div className='team-member'>
                            <div className='avatar'>👩‍🔬</div>
                            <h4>Emily Brown</h4>
                            <span>Customer Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
