import React from 'react'
import { Link } from 'react-router-dom'
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
                  <Link to="/shop" className='cursor btn-filter active'>All</Link>
                </li>
                <li className='list-inline-item'>
                  <Link to="/cat/groceries" className='cursor btn-filter'>Groceries</Link>
                </li>
                <li className='list-inline-item'>
                  <Link to="/cat/fashion" className='cursor btn-filter'>Fashion</Link>
                </li>
                <li className='list-inline-item'>
                  <Link to="/cat/electronics" className='cursor btn-filter'>Electronics</Link>
                </li>
                <li className='list-inline-item'>
                  <Link to="/cat/vegetables" className='cursor btn-filter'>Vegetables</Link>
                </li>
                <li className='list-inline-item'>
                  <Link to="/cat/fruits" className='cursor btn-filter'>Fruits</Link>
                </li>
                <li className='list-inline-item'>
                  <Link to="/cat/dairy" className='cursor btn-filter'>Dairy</Link>
                </li>
                <li className='list-inline-item'>
                  <Link to="/cat/bakery" className='cursor btn-filter'>Bakery</Link>
                </li>
                <li className='list-inline-item'>
                  <Link to="/cat/beverages" className='cursor btn-filter'>Beverages</Link>
                </li>
                <li className='list-inline-item'>
                  <Link to="/cat/snacks" className='cursor btn-filter'>Snacks</Link>
                </li>
                <li className='list-inline-item'>
                  <Link to="/cat/men" className='cursor btn-filter'>Men</Link>
                </li>
                <li className='list-inline-item'>
                  <Link to="/cat/women" className='cursor btn-filter'>Women</Link>
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
