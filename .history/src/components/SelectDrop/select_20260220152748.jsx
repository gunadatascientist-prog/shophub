import React, { useState } from 'react';
import '../SelectDrop/select.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

 const  Select =()=>{

  const[x,y]=useState(false)
  const[select,unselect]=useState(0)
  const[selectitem,unselectitem]=useState('All Categories')


  const openselect=()=>{
    y(!x);
  }
  const closeselect=(index,name)=>{
    unselect(index);
    y(false);
    unselectitem(name);

  }
    return(
        <div className='selecrDrop cursor position-relative'>
              <span className='openselect' onClick={openselect}>{selectitem}<KeyboardDoubleArrowDownIcon className='arrow'/> </span>
              {
                 x===true &&
               <div className='selectDrop'>
            <div className='searchfield'>
               <input type='text'/>
              <ul className='searchresults'> 
                <li onClick={()=>closeselect(0,'All Categories')}className={`${select===0 ? 'active':''}`}>All Categories</li>
                <li onClick={()=>closeselect(1,'Wines and Drinks')}className={`${select===1 ? 'active':''}`}>Wines & Drinks</li>
                <li onClick={()=>closeselect(2,'Clothings & Beauty')}className={`${select===2 ? 'active':''}`}>Clothings & Beauty</li>
                <li onClick={()=>closeselect(3,'Fresh SeaFood')}className={`${select===3 ? 'active':''}`}>Fresh SeaFood</li>
                <li onClick={()=>closeselect(4,'Pets Food & Toys')}className={`${select===4 ? 'active':''}`}>Pets Food & Toys</li>
                <li onClick={()=>closeselect(5,'Fast Food')}className={`${select===5 ? 'active':''}`}>Fast Food</li>
                <li onClick={()=>closeselect(6,'Baking Material')}className={`${select===6 ? 'active':''}`}>Baking Materials</li>
                <li onClick={()=>closeselect(7,'Vegetables')}className={`${select===7 ? 'active':''}`}>Vegetables</li>
                <li onClick={()=>closeselect(8,'Fresh Foods')}className={`${select===8 ? 'active':''}`}>Fresh Foods</li>
                <li onClick={()=>closeselect(9,'read & Juices')}className={`${select===9 ? 'active':''}`}>read & Jucies</li>
                <li onClick={()=>closeselect(10,'Fresh SeaFood')}className={`${select===10 ? 'active':''}`}>Fresh SeaFood</li>
                
              </ul>

            

              </div>
                
        </div>
 }
               
                </div>
        
        

    );

}
export default Select;