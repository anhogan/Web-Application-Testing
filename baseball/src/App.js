import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      strike: 0,
      ball: 0,
      hit: 0
    };
  };

  recordStrike() {
    if(this.state.strike < 3) {
      this.setState({
        strike: strike + 1
      });
    } else {
      this.setState({
        strike: 0
      });
    };
  };

  recordBall() {
    if(this.state.ball < 4) {
      this.setState({
        ball: ball + 1
      });
    } else {
      this.setState({
        ball: 0
      });
    };
  };

  recordFoul() {
    if(this.state.strike < 3) {
      this.setState({
        strike: strike + 1
      });
    };
  };

  recordHit() {
    this.setState({
      strike: 0,
      ball: 0,
      hit: hit + 1
    });
  };

  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
