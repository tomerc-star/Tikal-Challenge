import React , {useState} from 'react';
import BarItem from '../BarItem/BarItem';
import * as Constants from '../../Constants'
import './BarChart.css';

function BarChart(props) {
  const [selectedCharactersList, setselectedCharactersList] = useState(props.selectedCharactersList);
  const [maxEpisodes,setMaxEpisodes] =useState(props.maxEpisodes);
  const numberofBars = selectedCharactersList.length;
  const chartWidth = numberofBars * (Constants.BAR_WIDTH + Constants.BAR_MARGIN);
  const chartHeight = maxEpisodes+Constants.SPACE_TOP; 

  
  return (
    <div className='bar-chart-container'>
      <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} width="100%"  >
        {selectedCharactersList.map((character, index) => {
          const barHeight = character.episodes;
           return (
            <BarItem
            key={character.name}
            x={index * (Constants.BAR_WIDTH + Constants.BAR_MARGIN)}
            y={chartHeight - barHeight}
            width={Constants.BAR_WIDTH}
            height={barHeight}
            color = {character.color}
            />
            );
          })}
      </svg> 
    </div>
  );
}

export default BarChart;








