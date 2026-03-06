import React , { useState , useEffect } from 'react';
import './header.css';
import Logo from '../../assets/images/logo.svg';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Select from '../SelectDrop/select';
import axios from 'axios';



 const Header = () => {

  const [ Categories , setcategories ]= useState([
  'All Categories',
'Milk and Diaries',
'Wines & Drinks',
'Clothings & Beauty',
'Fresh SeaFood',
'Pets Food & Toys',
'Fast Food',
'Baking Materials',
'Vegetables',
'Frest Foods',
'read & Jucies',
'Fresh SeaFood'
  ]);

  const countrylist=[];

  useEffect(()=>{
    getcountry('https://countriesnow.space/api/v0.1/countries/');

  })

 const getcountry=async(url)=>{
  try{
      await axios.get(url).then((res)=>{
      if(res!== null){
              console.log(res.data.data);
      }
      })
  }catch(error){
           console.log(error.message)
  }
}
  

  return(
 <>
    <header>
          <div className='container-fluid'>
          < div className='row'>
          <div className='col-sm-2'>
            <img src={Logo} />
            
    
            </div>
            <div className='col-sm-5'>
            {/*header search starts here*/}
            <div className='header-search d-flex alighn-items-center'>
              <Select data={Categories}/>
              
                <div className='search'>
                  <input type='text'placeholder='search for items'/>
                  <ManageSearchIcon className='searchicon'/>
                  </div>
                  
               

      </div>
      {/*header search starts here*/}

      <div className='col-sm-6'>
                  <Select/>
                  </div>
      </div>
          </div>
    
            </div>
        </header>
 </>
  );

  };
export  default Header;

