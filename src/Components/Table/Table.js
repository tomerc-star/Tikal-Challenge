import React from 'react';
import Row from '../Row/Row';
import * as Constants from '../../Constants'
import './Table.css';

const Table = (props)=> {

    return(
     <div className='part-one-container'>
        <h2>{Constants.PART_ONE_TITLE}</h2>
        <div className='table-container'>
          <table>
            <tbody>
              {Constants.HEADERS_LIST.map((header)=>
              <Row key= {header} rowTitle={header} unPopularCharactersList={props.unPopularCharactersList}/>) }
            </tbody>
          </table>
        </div> 
     </div>
    )
}

export default Table;
