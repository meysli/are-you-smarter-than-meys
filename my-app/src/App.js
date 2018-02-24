import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "start-page">
        <div className = "pop-up">
          <p className = "game-name">Are you smarter than Meys?</p>
          <img src ="https://media.giphy.com/media/x9DVHBmO750Ji/giphy.gif"/>
          <button className = "start-button">Start</button>
          <div className = "instructions">
            <p className = "header">HOW TO PLAY</p>
            <p className = "text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt condimentum neque, id ultrices diam imperdiet quis. Phasellus et justo posuere, suscipit ipsum semper, blandit ligula. Nunc iaculis libero vitae diam vestibulum faucibus. Etiam mattis egestas elit, vel placerat mauris dictum eu. Praesent justo lectus, porttitor nec odio non, facilisis convallis libero. In malesuada nunc risus, facilisis scelerisque felis posuere nec. Donec sit amet dui et enim semper molestie.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
