import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import logo from './logo.svg';
import './App.css';

function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [hit, setHit] = useState(0);

  const recordStrike = () => {
    if(strike < 2) {
      setStrike(strike + 1);
    } else {
      setStrike(0);
    };
  };

  const recordBall = () => {
    if(ball < 3) {
      setBall(ball + 1);
    } else {
      setBall(0);
    };
  };

  const recordFoul = () => {
    if(strike < 2) {
      setStrike(strike + 1);
    };
  };

  const recordHit = () => {
    setStrike(0);
    setBall(0);
    setHit(hit + 1);
  };

  return (
    <div className="App">
      <Dashboard 
        ball={ball} 
        strike={strike}
        hit={hit} 
        recordBall={recordBall} 
        recordStrike={recordStrike}
        recordFoul={recordFoul}
        recordHit={recordHit} />
    </div>
  );
}

export default App;
