import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import '../CSS/Carousel.scss'


class Slider extends Component{
    render(){
        return(
         <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Image_src/olia-nayda-VPrJtXMySLg-unsplash.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>이달의 작가전</h1>
              <h3>Artist Exhibition of the Month 8/22 ~ 9/5</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Image_src/eric-mcnew-xXzJ6mpcdwY-unsplash.jpg")}
              alt="Third slide"
            />
        
            <Carousel.Caption>
              <h1>식탁 기획전</h1>
              <h3>Dining table porcelain bowl exhibition</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Image_src/tom-chen-6DH6BojClJg-unsplash.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>혼수 식기</h1>
              <h3>Honeymoon tableware exhibition.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel> 
        );
    }
}

export default Slider;