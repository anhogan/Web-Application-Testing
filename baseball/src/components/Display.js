import React from 'react';

const Display = (props) => {
  return (
    <div>
      <div>
        <h4>Balls: {props.ball}</h4>
      </div>
      <div>
        <h4>Stikes: {props.strike}</h4>
      </div>
      <div>
        <h4>Hits: {props.hit}</h4>
      </div>
    </div>
  );
};

export default Display;