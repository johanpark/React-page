import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Nav';
import Slider from './Component/Slider';
import ImageCard from './Component/ImageCard';







class App extends Component{
  render(){
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slider></Slider>
      <ImageCard></ImageCard>
    </div>
     );
  }
}



export default App;
