import React from 'react'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from'../../assets/images/banner2.jpg'
import banner3 from'../../assets/images/banner3.jpg'

const Banner =()=>{
    return(
        <div className='Banner'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='box'>
                        <src img={banner1} />
                        </div>
                        <div className='box'>
                        <src img={banner2} />
                        </div>
                        <div className='box'>
                        <src img={banner3} />
                        </div>
                    </div>
                </div>
            
            
            </div>
            </div>
    );
}

export default Banner;