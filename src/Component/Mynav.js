import React, { Component } from 'react';
import './CSS/Nav.scss'

class MyNavbar extends Component{
    render(){
        return(
            <header id="header">
            <nav>
              <ul>
                <li>
                <i class="fa fa-globe"></i>
                <h6>home</h6>
              </li>
                <li>
                <i class="fa fa-file-text-o"></i>
                <h6>queue</h6>
              </li>
                <li>
                <i class="fa fa-heart"></i>
                <h6>popular</h6>
              </li>
                <li>
                <i class="fa fa-plus"></i>
                <h6>newly added</h6>
              </li>
                <li>
                <i class="fa fa-eye"></i>
                <h6>discover</h6>
              </li>
                <li>
                <i class="fa fa-tv"></i>
                <h6>trailers</h6>
              </li>
                <li>
                <i class="fa fa-users"></i>
                <h6>community</h6>
              </li>
                <li>
                <i class="fa fa-refresh"></i>
                <h6>history</h6>
              </li>
              </ul>
            </nav>
          </header>
        );
    }
}

export default MyNavbar;
