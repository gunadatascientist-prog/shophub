import React from 'react'
import HomeSlider from './Slider/index'
import CatSlider from '../../catSlider/index'
import Banner from '../../Banner/index'

const Home = () => {

    
    return(
      <><HomeSlider />
      <CatSlider/>
      <Banner/>
      <section className='homeProducts'>
<div className='container-fluid'>
<div className='d-flex align-items-center'>
<h2 className='hd mb-0 mt-0'>Popular Products</h2>
<ul className='list list-inline'>
<li className='list-inline-item'>
<a className='cursor' >All</a>
</li>
<li className='list-inline-item'>
<a className='cursor' >dals and pulses</a>
</li>
<li className='list-inline-item'>
<a className='cursor' >Ghee & OilsAtta & Floursmasalas</a>
</li>
<li className='list-inline-item'>
<a className='cursor' >spicesRice & RiceProducts</a>
</li>
<li className='list-inline-item'>
<a className='cursor' >Mobiles & TabletsTV & Speaker</a>
</li>
<li className='list-inline-item'>
<a className='cursor' >Men Western Wear</a>
</li>
<li className='list-inline-item'>
<a className='cursor' >Women Western Wear</a>
</li>
</ul>
</div>
</div>
</section>
      </>
       
    );
}

export default Home;

