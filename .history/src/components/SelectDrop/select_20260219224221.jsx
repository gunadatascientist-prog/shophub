import React, { useState } from 'react';
import '../SelectDrop/select.css';

 const  Select =()=>{

  const[x,y]=useState(false)
  const[select,unselect]=useState(0)
  const openselect=()=>{
    y(!x);
  }
  const closeselect=(index)=>{
    select(index);
    y(false);

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
                <li onClick={()=>closeselect(0)}className={`${select===0 ? 'active':''}`}>All Categories</li>
                <li onClick={()=>closeselect(1)}className={`${select===1 ? 'active':''}`}>Milk and Diaries</li>
                <li onClick={()=>closeselect(2)}className={`${select===2 ? 'active':''}`}>Milk and Diaries</li>
                <li onClick={()=>closeselect(3)}className={`${select===3 ? 'active':''}`}>Milk and Diaries</li>
                <li onClick={()=>closeselect(4)}className={`${select===4 ? 'active':''}`}>Milk and Diaries</li>
                <li onClick={()=>closeselect(5)}className={`${select===5 ? 'active':''}`}>Milk and Diaries</li>
                <li onClick={()=>closeselect(6)}className={`${select===6 ? 'active':''}`}>Milk and Diaries</li>
                
              </ul>

            

              </div>
                
        </div>
 }
               
                </div>
        
        

    );

}
export default Select;