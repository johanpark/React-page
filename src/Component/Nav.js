import React, { Component } from 'react';


class Navbar extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">
      <a class="navbar-brand" href="index.html">꽃과 도자기</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="index.html">꽃<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html">이천 도자기</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="v" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              전체 상품
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="index.html">식기</a>
              <a class="dropdown-item" href="index.html">도자기</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="index.html">조각상</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="index.html" tabindex="-1" aria-disabled="true">찾아오시는 길</a>
          </li>
        </ul>
      </div>
    </nav>
        );
    }
}

export default Navbar;