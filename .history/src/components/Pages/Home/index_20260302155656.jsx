import React from 'react'
import HomeSlider from './Slider/index'
import CatSlider from '../../catSlider/index'
import Banner from '../../Banner/index'
import '../Home/index.css'
import Product from '../../products/index'

const Home = () => {

    
    return(
      <div >< HomeSlider className='fullfield' />
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
<button className='cursor' >Ghee & Oils Atta & Flours</button>
</li>
<li className='list-inline-item'>
<button className='cursor' >Atta & Flours</button>
</li>
<li className='list-inline-item'>
<button className='cursor' >masalas spices</button>
</li>
<br />

<li className='list-inline-item'>
<button className='cursor' >Rice & RiceProducts</button>
</li>
<li className='list-inline-item'>
<button className='cursor' >Mobiles & Tablets</button>
</li>
<li className='list-inline-item'>
<button className='cursor' >TV & Speaker</button>
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
<Product/>
</section>

      </div>
       
    );
}

export default Home;

