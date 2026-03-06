import React , {useState} from 'react';
import '../SelectDrop/select.css';

 const  Select =()=>{

  const[x,y]=useState(false);
    return(
      <div className='selecrDrop cursor position-relative'>
              <span className='openselect'>All Categories</span>
               
               <div className='selectDrop'>
            <div className='searchfield'>
               <div className='search-field'/>
              <ul className='searchresults'> 
                <li>Milk and Diaries</li>
                <li>Milk and Diaries</li>
                <li>Milk and Diaries</li>
                <li>Milk and Diaries</li>
                <li>Milk and Diaries</li>
                <li>Milk and Diaries</li>
                <li>Milk and Diaries</li>
                
              </ul>

            

              </div>
                
        </div>
                </div>
        
        
        

    );

}
export default Select;