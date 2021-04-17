import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class ImageCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="/imgs/1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/imgs/2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/imgs/3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/imgs/4.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="/imgs/5.jpg" />
                </div>
            </Carousel>
        );
    }
};

export default ImageCarousel