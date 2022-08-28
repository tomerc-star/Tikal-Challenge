import React from 'react';
import * as Constants from '../../Constants'
import BarChart from '../BarChart/BarChart';
import Legend from '../Legend/Legend';
import './Graph.css';


const Graph = (props)=> {

  const getEpisodesForCharacter = (characterName)=>{ 
    return  props.charactersList.find(({ name }) => name === characterName).episode.length;
  }

  return(
      <div className='part-two-container'>
        <h2>{Constants.PART_TWO_TITLE}</h2>
        <div className='graph-container'>
            <div className='legend-container'>
              <Legend selectedCharactersList={Constants.REQUESTED_CHARACTERS}/>
            </div>
            <div className='barchart-container'>
              <BarChart selectedCharactersList= {Constants.REQUESTED_CHARACTERS.map(obj=>({...obj,episodes:getEpisodesForCharacter(obj.name)}))}
                        maxEpisodes={props.maxEpisodes}/>
            </div>
        </div>
      </div>

    )
}

export default Graph;
