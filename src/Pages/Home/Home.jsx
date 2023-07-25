import React from 'react';
import './Home.css';
import ellipse from '../../assets/images/ellipse-12.svg'
import halologo from '../../assets/Halolegion logo Trans 500by500.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div class="main">
      <div class='hero'>
        <div class="hero-content">
          <div class="hero-content-logo">
            <img class="ellipse-img" alt="" src={ellipse} />
            <img class="halolegion-logo" alt="" src={halologo} />
          </div>
          <div class="hero-content-text">

            <p class="halocon-text">HALOCON</p>
            <p class="year-text">2022-2023</p>
          </div>
        </div>
      </div>
      <div class="button-container">
        <button class="learn-button" type='button' onClick={() => { navigate("/about"); }}>Learn More</button>
        <button class="event-button" type='button' onClick={() => { navigate("/events"); }}>View Events</button>
      </div>
      <div class="info-text">
        <div class="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
          ullamcorper lectus libero ut. Tellus aliquam, tortor aliquam nulla.
        </div>
      </div>

    </div>



  )
}

export default Home












