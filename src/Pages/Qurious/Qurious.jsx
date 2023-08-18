import React from 'react';
import './Qurious.css';
import quriousimg from '../../assets/qurious-img.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./qurious-data";
import { Link } from 'react-router-dom';

const Home = () => {


  const images = productData.map((item) => (
    <div className="card">
      <img className="product--image" src={item.imageurl} alt="" />
    </div>
  ));


  return (
    <div className='qurious-main'>
      <div className='qurious-cards-row'>
        <div className='qurious-horizontal-card'>
          <div className='qurious-horizontal-card-left'>
            <img className="qurious-horizontal-card-userimage" alt="" src={quriousimg}/>
          </div>
          <div className='qurious-horizontal-card-right'>
            <p>Click here to Register</p>
            <Link to='/reg-qurious'><button class="qurious-event-button" type='button'>Register</button></Link>
          </div>
        </div>
      </div>
      <div class="qurious-bottom">
        <div class='qurious-info'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, lacus ac vitae pellentesque massa dolor non. Non consectetur egestas imperdiet magna etiam vitae, nunc, dui. Cursus porta velit dapibus imperdiet id sit. Velit orci orci egestas neque.</p>
        </div>
        <div className="qurious-App">

          <Carousel showDots={false} responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true}>
            {images}
          </Carousel>
        </div>


      </div>

    </div >


  )
}

export default Home












