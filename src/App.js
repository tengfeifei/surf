import React, { Component } from 'react';
// import logo from './logo.svg';
import {Link , NavLink} from 'react-router-dom'
import './App.css';
import Tabbar from './compenents/tabbar'

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Tabbar/>
        {
          this.props.children
        }
      </div>
    );
  }
}

export default App;
