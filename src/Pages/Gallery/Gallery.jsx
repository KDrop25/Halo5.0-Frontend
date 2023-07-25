import React from 'react';
import './Gallery.css';
import Carousel from "react-multi-carousel";
import { productData, responsive } from "./gallery-data";
function ImageSlider() {

    const images = productData.map((item) => (
        <div className="card">
            <img className="gallery-product--image" src={item.imageurl} alt="product" />
        </div>
    ));

    return (
        <div className='gallery-he'>

            <div className='gallery-test'>
                <h1 className='gallery-heading-text'>HALOCON 2022</h1>
                <div className="gallery-App">

                    <Carousel showDots={true} responsive={responsive} autoPlay={true} autoPlaySpeed={5000} infinite={true}>
                        {images}

                    </Carousel>

                </div>


            </div>

        </div>
    );
}

export default ImageSlider;
