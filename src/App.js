import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Nav';
import Slider from './Component/Slider';
import ImageCard from './Component/ImageCard';
import VideoPlay from './Component/Video';







class App extends Component{
  render(){
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slider></Slider>
      <ImageCard></ImageCard>
      <VideoPlay></VideoPlay>
    </div>
     );
  }
}



export default App;
