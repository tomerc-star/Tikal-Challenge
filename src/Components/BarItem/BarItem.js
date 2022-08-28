import React from 'react';
import './BarItem.css';

const BarItem = ({ x, y, width, height,color }) => {
  return(
      <React.Fragment>
        <rect x={x} y={y} width={width} height={height} fill={color} /> 
        <text x={x + width / 3} y={y -5}>{height}</text>
      </React.Fragment>
  );
  }
export default BarItem;








