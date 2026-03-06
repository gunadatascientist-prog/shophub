import React from 'react';
import './header.css';
import Logo from '../../assets/images/logo.png';

 const Header = () => {
  return(
 <>
    <header>
          <div className='container-fluid'>
          < div className='row'>
          <div className='col-sm-2'>
            <img src={Logo} />
    
            </div>
          </div>
    
            </div>
        </header>
 </>
  )

  }
export  default Header;