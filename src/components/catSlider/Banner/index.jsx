import React from 'react';
import './Style.css';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';

const Banner = () => {
    return (
        <div className='Banner'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-grid'>
                        <div className='box'>
                            <img src={banner1} alt="Banner 1" className='w-100 transition' />
                        </div>
                    </div>
                    <div className='col-grid'>
                        <div className='box'>
                            <img src={banner2} alt="Banner 2" className='w-100 transition'/>
                        </div>
                    </div>
                    <div className='col-grid'>
                        <div className='box'>
                            <img src={banner3} alt="Banner 3" className='w-100 transition'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
