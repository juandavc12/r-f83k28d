import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super ();

    this.state = {
      count : 0
    }
    
  };
  incrementar (n) {
    this.setState({count: n})
  }


  render() {
    return (
      <div>
        <span className="value">{this.state.count}</span>
        <button id="inc" onClick={() => {this.incrementar(this.state.count + 1)}}>Incrementa</button>
      </div>
    );
  }
}

export default App;
