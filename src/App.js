import React, { useEffect, useState } from 'react';
import * as Constants from './Constants'
import Table from './Components/Table/Table';
import Graph from './Components/Graph/Graph';
import logo from './MainLogo.PNG';
import './App.css';


function App() {
  const [charactersList,setCharactersList] = useState([]);
  const [unPopularCharactersList,setUnPopularCharactersList] = useState([]);
  const [maxEpisodes,setMaxEpisodes] = useState(0);

  const findMaxEpisodes= (data)=>{
    return Math.max.apply(Math, data.results.map(function (o) {
      return o.episode.length;}))
  }
  const findMinEpisodes= (data)=>{
    return Math.min.apply(Math, data.results.map(function (o) {return o.episode.length;}));
  }
  
  useEffect(()=>{
    fetch(Constants.API_URL)
    .then(response => response.json())
    .then(data => {
      setCharactersList(data.results); 
      setMaxEpisodes(findMaxEpisodes(data)); 
      setUnPopularCharactersList(data.results.filter((character)=>
                            (character.origin.name.includes(Constants.REQUEST_ORIGIN) 
                            && character.episode.length === findMinEpisodes(data))));}); 
  },[]);

    return (
    <div className="App">
      <h1> {Constants.MAIN_TITLE} </h1>
      <img src={logo} width="150px" height="100px"/>
        <div className='parts-container'>
          <div className='part-one-container'>
            {unPopularCharactersList && <Table unPopularCharactersList = {unPopularCharactersList}/>}
          </div>
          <div className='part-two-container'>
           { charactersList.length > 0 && <Graph charactersList={charactersList} maxEpisodes={maxEpisodes}/>}
          </div>
        </div>
    </div>
  );
}

export default App;
