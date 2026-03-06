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
<button className='cursor' >All</button>
</li>
<li className='list-inline-item'>
<button className='cursor' >dals and pulses</button>
</li>
<li className='list-inline-item'>
<button className='cursor' >Ghee & OilsAtta & Floursmasalas</button>
</li>
<br />

<li className='list-inline-item'>
<button className='cursor' >spicesRice & RiceProducts</button>
</li>
<li className='list-inline-item'>
<button className='cursor' >Mobiles & TabletsTV & Speaker</button>
</li>
<li className='list-inline-item'>
<button className='cursor' >Men Western Wear</button>
</li>
<li className='list-inline-item'>
<button className='cursor' >Women Western Wear</button>
</li>
</ul>
</div>
</div>
</section>
      </>
       
    );
}

export default Home;

