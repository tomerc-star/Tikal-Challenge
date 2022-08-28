import React from 'react';
import * as Constants from '../../Constants'
import './Row.css';

const Row = (props)=> {

const valueToShow=(item)=>{
    switch(props.rowTitle){
      case Constants.HEADERS_LIST[0]:
        return item.name;
      case Constants.HEADERS_LIST[1]:
        return item.origin.name.substring(0,item.origin.name.indexOf(Constants.FIRST_BRACKET));
      case Constants.HEADERS_LIST[2]:
        return item.origin.name.substring(item.origin.name.indexOf(Constants.FIRST_BRACKET)+1,item.origin.name.indexOf(Constants.LAST_BRACKET));
      case Constants.HEADERS_LIST[3]:
        return item.episode.length;
      default:
        return;
  }
}

    return(
          <tr>
            <th>{props.rowTitle}</th>
            {props.unPopularCharactersList.map((item)=> <td key={item.name}>{valueToShow(item)}</td>)}
          </tr>
    )
}

export default Row;
