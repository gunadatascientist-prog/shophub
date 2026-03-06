import React, { useState, useEffect } from 'react';
import './header.css';
import Logo from '../../assets/images/logo.svg';
import IconCompare from '../../assets/images/IconCompare.svg';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Select from '../SelectDrop/select';
import axios from 'axios';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';



const Header = () => {

  const [Categories, setcategories] = useState([
    ' Milk and Diaries',
    ' Wines & Drinks',
    ' Clothings & Beauty',
    ' Fresh SeaFood',
    ' Pets Food & Toys',
    ' Fast Food',
    ' Baking Materials',
    ' Vegetables',
    ' Frest Foods',
    ' read & Jucies',
    ' Fresh SeaFood'
  ]);

  const countrylist = [];

  useEffect(() => {
    getcountry('https://countriesnow.space/api/v0.1/countries/');

  })

  const getcountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.data.map((item, index) => {
            countrylist.push(item.country);
          })
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <>
      <header>
        <div className='container-fluid'>
          < div className='row'>
            <div className='col-sm-2'>
              <img src={Logo} />


            </div>
            <div className='col-sm-4'>
              {/*header search starts here*/}
              <div className='header-search d-flex alighn-items-center'>
                <Select data={Categories} placeholder={' All Categories'} icon={<CategoryTwoToneIcon />} />

                <div className='search'>
                  <input type='text' placeholder='Search here for items' />
                  <ManageSearchIcon className='searchicon' />
                </div>



              </div>
              {/*header search starts here*/}

              
            </div>
            <div className='col-sm-2 ms-auto '>
              <div className='CountryWrapper'>
                <Select data={countrylist} placeholder={'Your Location'} icon={<LocationPinIcon />} />

              </div>
            
              </div>
               < ul className='list list-inline mb-0 headerTabs'>
               <li className='list-inline-item'>
                <span><img src={IconCompare}/>Compare
                <span className='badge'>3</span></span>
                </li>
             </ul>
          </div>

        </div>
      </header>
    </>
  );

};
export default Header;

