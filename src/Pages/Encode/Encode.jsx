import React from 'react';
import './Encode.css';
import encodeimg from '../../assets/encode-img.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./encode-data";
import { Link } from 'react-router-dom';

const Home = () => {


  const images = productData.map((item) => (
    <div className="card">
      <img className="product--image" src={item.imageurl} alt="" />
    </div>
  ));


  return (
    <div>
      <div className='encode-row'>
        <div className="encode" >
          <div className='encode-ellipse'>
            <img className="encode-ellipse-img" alt="" src={encodeimg} />

            <div className='encode-info'>
              <Link to='/reg-encode'><button class="encode-event-button" type='button'>Register</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div class="main-encode">
        <div class='encode-info'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, lacus ac vitae pellentesque massa dolor non. Non consectetur egestas imperdiet magna etiam vitae, nunc, dui. Cursus porta velit dapibus imperdiet id sit. Velit orci orci egestas neque.</p>


        </div>
        <div className="encode-App">

          <Carousel showDots={false} responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true}>
            {images}
          </Carousel>
        </div>


      </div>

    </div >


  )
}

export default Home












