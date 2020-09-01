import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './CSS/Compact-gallery.css'

class Gallery extends Component{
    render(){
        return(
        <section class="gallery-block compact-gallery">
                <div class="container">
                    <div class="heading">
                        <h2>Compact Gallery</h2>
                    </div>
                    <div class="row no-gutters">
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href="..">
                                <img class="img-fluid image" src={require("../Component/Image_src/olia-nayda-VPrJtXMySLg-unsplash.jpg")}/>
                                <span class="description">
                                    <span class="description-heading">Lorem Ipsum</span>
                                    <span class="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </span>
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href="..">
                                <img class="img-fluid image" src={require("../Component/Image_src/olia-nayda-VPrJtXMySLg-unsplash.jpg")}/>
                                <span class="description">
                                    <span class="description-heading">Lorem Ipsum</span>
                                    <span class="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </span>
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href="..">
                                <img class="img-fluid image" src={require("../Component/Image_src/olia-nayda-VPrJtXMySLg-unsplash.jpg")}/>
                                <span class="description">
                                    <span class="description-heading">Lorem Ipsum</span>
                                    <span class="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </span>
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href="..">
                                <img class="img-fluid image" src={require("../Component/Image_src/olia-nayda-VPrJtXMySLg-unsplash.jpg")}/>
                                <span class="description">
                                    <span class="description-heading">Lorem Ipsum</span>
                                    <span class="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </span>
                                </a>
                            </div>
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href="..">
                                <img class="img-fluid image" src={require("../Component/Image_src/olia-nayda-VPrJtXMySLg-unsplash.jpg")}/>
                                <span class="description">
                                    <span class="description-heading">Lorem Ipsum</span>
                                    <span class="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </span>
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href="..">
                                <img class="img-fluid image" src={require("../Component/Image_src/olia-nayda-VPrJtXMySLg-unsplash.jpg")}/>
                                <span class="description">
                                    <span class="description-heading">Lorem Ipsum</span>
                                    <span class="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </span>
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href="..">
                                <img class="img-fluid image" src={require("../Component/Image_src/olia-nayda-VPrJtXMySLg-unsplash.jpg")}/>
                                <span class="description">
                                    <span class="description-heading">Lorem Ipsum</span>
                                    <span class="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </span>
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href="..">
                                <img class="img-fluid image" src={require("../Component/Image_src/olia-nayda-VPrJtXMySLg-unsplash.jpg")}/>
                                <span class="description">
                                    <span class="description-heading">Lorem Ipsum</span>
                                    <span class="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </span>
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-4 item zoom-on-hover">
                            <a class="lightbox" href="..">
                                <img class="img-fluid image" src={require("../Component/Image_src/olia-nayda-VPrJtXMySLg-unsplash.jpg")}/>
                                <span class="description">
                                    <span class="description-heading">Lorem Ipsum</span>
                                    <span class="description-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    /*<script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.js"></script>
    <script>
        baguetteBox.run('.compact-gallery', { animation : 'slideIn'});
    </script>*/
        );
    }
}
export default Gallery;