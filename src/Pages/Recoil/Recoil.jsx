import React from 'react';
import './Recoil.css';
import recoilimg from '../../assets/recoil-img.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./recoil-data";
import { Link } from 'react-router-dom';

const Home = () => {


  const images = productData.map((item) => (
    <div className="card">
      <img className="product--image" src={item.imageurl} alt="" />
    </div>
  ));


  return (
    <div className='recoil-main'>
      <div className='recoil-cards-row'>
        <div className='recoil-horizontal-card'>
          <div className='recoil-horizontal-card-left'>
            <img className="recoil-horizontal-card-userimage" alt="" src={recoilimg}/>
          </div>
          <div className='recoil-horizontal-card-right'>
            <p>Click here to Register</p>
            <Link to='/reg-recoil'><button class="recoil-event-button" type='button'>Register</button></Link>
          </div>
        </div>
      </div>
      <div class="recoil-bottom">
        <div class='recoil-info'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, lacus ac vitae pellentesque massa dolor non. Non consectetur egestas imperdiet magna etiam vitae, nunc, dui. Cursus porta velit dapibus imperdiet id sit. Velit orci orci egestas neque.</p>
        </div>
        <div className="recoil-App">

          <Carousel showDots={false} responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true}>
            {images}
          </Carousel>
        </div>


      </div>

    </div >


  )
}

export default Home












