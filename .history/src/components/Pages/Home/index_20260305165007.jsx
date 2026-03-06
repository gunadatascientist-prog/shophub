import React from 'react'
import HomeSlider from './Slider/index'
import CatSlider from '../../catSlider/index'
import Banner from '../../Banner/index'
import '../Home/index.css'
import Product from '../../products/index'

const Home = () => {
    return(
      <div className="home-page">
        <HomeSlider className='fullfield' />
        <CatSlider/>
        <Banner/>
        <section className='homeProducts'>
          <div className='container-fluid'>
            <div className='d-flex align-items-center flex-wrap gap-3 mb-4'>
              <h2 className='hd mb-0'>Popular Products</h2>
              <ul className='list list-inline mb-0'>
                <li className='list-inline-item'>
                  <button className='cursor btn-filter active'>All</button>
                </li>
                <li className='list-inline-item'>
                  <button className='cursor btn-filter'>Dals & Pulses</button>
                </li>
                <li className='list-inline-item'>
                  <button className='cursor btn-filter'>Ghee & Oils</button>
                </li>
                <li className='list-inline-item'>
                  <button className='cursor btn-filter'>Atta & Flours</button>
                </li>
                <li className='list-inline-item'>
                  <button className='cursor btn-filter'>Masalas & Spices</button>
                </li>
                <li className='list-inline-item'>
                  <button className='cursor btn-filter'>Rice Products</button>
                </li>
                <li className='list-inline-item'>
                  <button className='cursor btn-filter'>Mobiles</button>
                </li>
                <li className='list-inline-item'>
                  <button className='cursor btn-filter'>TV & Speaker</button>
                </li>
              </ul>
            </div>
          </div>
          <Product/>
        </section>
      </div>
    );
}

export default Home;
