import React from 'react';
import './LegendItem.css';

const LegendItem = (props)=> {
  
  return(
        <div className='legend-item-container'>
          <div className={props.itemColor}></div> 
          <div>{props.itemName}</div>     
        </div> 
    )
}

export default LegendItem;
