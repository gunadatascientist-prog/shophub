import React, { useState } from 'react';
import '../SelectDrop/select.css';

 const  Select =()=>{

  const[x,y]=useState(false)
  const openselect=()=>{
    y(!x);
  }
    return(
        <div className='selecrDrop cursor position-relative'>
              <span className='openselect' onClick={openselect}>All Categories</span>
              {
                 x===true &&
               <div className='selectDrop'>
            <div className='searchfield'>
               <input type='text'/>
              <ul className='searchresults'> 
                <li onClick={y(false)}>Milk and Diaries</li>
                <li onClick={y(false)}>Milk and Diaries</li>
                <li onClick={y(false)}>Milk and Diaries</li>
                <li onClick={y(false)}>Milk and Diaries</li>
                <li onClick={y(false)}>Milk and Diaries</li>
                <li onClick={y(false)}>Milk and Diaries</li>
                <li onClick={y(false)}>Milk and Diaries</li>
                
              </ul>

            

              </div>
                
        </div>
 }
               
                </div>
        
        

    );

}
export default Select;