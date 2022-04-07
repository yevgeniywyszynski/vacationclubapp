import './App.css';
import Slider from "../Slider/Slider"
import React from 'react';
import Header from '../Header/Header';


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slider/>
      </div>
    );  
    }
  }
