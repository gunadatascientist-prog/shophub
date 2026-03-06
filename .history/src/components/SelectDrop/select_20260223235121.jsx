import React, { useState } from 'react';
import '../SelectDrop/select.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';


const Select = ({ data, placeholder, icon }) => {

  const [x, y] = useState(false)
  const [select, unselect] = useState(0)
  const [selectitem, unselectitem] = useState(placeholder)
  const [listData , setListData]=useState(data)
  const [listData2 , setListData2]=useState(data)


  const openselect = () => {
    y(!x);
  }
  const closeselect = (index, name) => {
    unselect(index);
    y(false);
    unselectitem(name);

  }

  const Filterlist = parameter1 => {
  const keyword = parameter1.target.value.toLowerCase();
  const list = listData2.filter((parameter2)=>{
    return  parameter2.toLowerCase().includes(keyword);
  const list2= list.filter((item, index, self) => {
    
    return self.indexOf(item) === index;
  
});
    
      })

      setListData(list2);

  }
  return (
    <ClickAwayListener onClickAway={() => y(false)}>
      <div className='selecrDrop cursor position-relative'>
        {icon}
       <span className='openselect' onClick={openselect}>{selectitem}<KeyboardDoubleArrowDownIcon className='arrow' /> </span> 
        {
          x === true &&
          <div className='selectDrop'>
            <div className='searchfield'>
              <input type='text' placeholder='Search here ...'  onChange={Filterlist}/>
              <ul className='searchresults'>
                <li key={0} onClick={() => closeselect(0, placeholder)} className={`${select === 0 ? 'active' : ''}`}>{placeholder}</li>
                {
                  listData.map((item, index) => {
                    return (
                      <li key={index + 1} onClick={() => closeselect(index + 1, item)} className={`${select === index + 1 ? 'active' : ''}`}>{item}</li>
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