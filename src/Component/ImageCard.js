import React, { Component } from 'react';
import './CSS/Image.scss'

class ImageCard extends Component{
    render(){
        return(

            <div class="container">
            <h1>Gallery</h1>
          
            <div class="gallery-wrap">
              <div class="item item-1"></div>
              <div class="item item-2"></div>
              <div class="item item-3"></div>
              <div class="item item-4"></div>
              <div class="item item-5"></div>
            </div>
           </div>
        );
    }
}
export default ImageCard;