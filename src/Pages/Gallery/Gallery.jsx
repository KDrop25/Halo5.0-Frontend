import React from 'react';
import './Gallery.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import the carousel styles
import { productData, responsive } from "./gallery-data";

function ImageSlider() {
    const images = productData.map((item, index) => (
        <div key={index} className="card">
            <img className="gallery-product--image" src={item.imageurl} alt="product" />
        </div>
    ));

    return (
        <div className='gallery-main'>
            <h1 className='gallery-heading-text'>HALOCON 4.0</h1>
            <div className="gallery-App">
                <Carousel
                    showDots={true}
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    
                    infinite={true}
                    itemClass="carousel-item-padding-40-px" // Add custom class for item padding
                >
                    {images}
                </Carousel>
            </div>
        </div>
    );
}

export default ImageSlider;
