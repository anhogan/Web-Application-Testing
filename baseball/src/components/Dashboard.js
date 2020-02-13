import React from 'react';
import Display from './Display';

const Dashboard = (props) => {
  return (
    <div>
      <Display 
        ball={props.ball} 
        strike={props.strike}
        hit={props.hit} />
      <div>
        <button onClick={props.recordBall}>Ball</button>
        <button onClick={props.recordStrike}>Strike</button>
        <button onClick={props.recordFoul}>Foul</button>
        <button onClick={props.recordHit}>Hit</button>
      </div>
    </div>
  );
};

export default Dashboard;