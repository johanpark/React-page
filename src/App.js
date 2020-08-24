import React, { Component } from 'react';
import './App.css';
import Button from './Component/Button';
import Navbar from './Component/Nav';
import Carousel from './Component/Carousel';

class Head extends Component{
  render(){
    return(
      <p>what the</p>
    );
}
}




class App extends Component{
  render(){
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <Head></Head>
      
      <Button></Button>
      <Carousel></Carousel>
    </div>
     );
  }
}



export default App;
