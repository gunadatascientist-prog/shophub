import React, { useState } from 'react';
import '../SelectDrop/select.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';


 const  Select =(props)=>{

  const[x,y]=useState(false)
  const[select,unselect]=useState(0)
  const[selectitem,unselectitem]=useState({placeholder})


  const openselect=()=>{
    y(!x);
  }
  const closeselect=(index,name)=>{
    unselect(index);
    y(false);
    unselectitem(name);

  }
    return(
      <ClickAwayListener onClickAway={()=>y(false)}>
        <div className='selecrDrop cursor position-relative'>
              <span className='openselect' onClick={openselect}>{selectitem}<KeyboardDoubleArrowDownIcon className='arrow'/> </span>
              {
                 x===true &&
               <div className='selectDrop'>
            <div className='searchfield'>
               <input type='text' placeholder='Search here ...'/>
              <ul className='searchresults'> 
                {
                  props.data.map((item,index)=>{
                    return(
                      <li onClick={()=>closeselect(index,item)}className={`${select===index ? 'active':''}`}>{item}</li>
                    )
                  })
                }
                
                
              </ul>

            

              </div>
                
        </div>
 }
               
                </div>
        
        </ClickAwayListener>

    );

}
export default Select;