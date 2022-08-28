import React from 'react';
import LegendItem from '../LegendItem/LegendItem'
import './Legend.css';

const Legend = (props)=> {
 
    return(
        <div className='legend-container'>
        {props.selectedCharactersList.map((character,index)=>
          <LegendItem key={index} itemName = {character.name}  
                      itemColor={character.color}/>)}
        </div>
    )
}

export default Legend;
