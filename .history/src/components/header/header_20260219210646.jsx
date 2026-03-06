import React from 'react';
import './header.css';
import Logo from '../../assets/images/logo.svg';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Select from '../SelectDrop/select'



 const Header = () => {
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
            <div className='header-search dflex alighn-items-center'>
              <Select/>
              <div className='selecrDrop cursor position-relative'>
               All Categories
                
                </div>
                
                <div className='search'>
                  <input type='text'placeholder='search for items'/>
                  <ManageSearchIcon className='searchicon'/>
                  </div>
               

      </div>
      {/*header search starts here*/}
      </div>
          </div>
    
            </div>
        </header>
 </>
  );

  };
export  default Header;

console.log("header.jsx executed");