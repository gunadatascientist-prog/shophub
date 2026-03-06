import React from 'react';
import '../SelectDrop/select.css';

 const  Select =()=>{

  const[x,y]=useState(false);
    return(
     <div className='selecrDrop cursor position-relative'>
               All Categories
                
                
        
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

console.log("header.jsx executed");