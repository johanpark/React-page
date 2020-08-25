import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './Component/Button';
import Navbar from './Component/Nav';
import Slider from './Component/Slider';







class App extends Component{
  render(){
  return (
    <div className="App">
      <Navbar></Navbar>
      <Button></Button>
      <Slider></Slider>
    </div>
     );
  }
}



export default App;
