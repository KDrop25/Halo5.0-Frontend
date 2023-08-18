import React from 'react';
import './Home.css';
import ellipse from '../../assets/images/ellipse-12.svg';
import halologo from '../../assets/Halolegion logo Trans 500by500.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='home-main'>
      <div className="home-core">
        
        <div className='home-hero'>
          <div className='home-hero-logo'>
            <div className="home-hero-text">
              <h1 className="home-hero-halocon-text">HALOCON</h1>
              <h1 className="home-hero-year-text">2022</h1>
            </div>
            <img className="home-ellipse-img" alt="" src={ellipse} />
            <img className="home-halolegion-logo" alt="" src={halologo} />
          </div>
        </div>
        <div className="home-button-container">
          <button className="home-cssbuttons-io-button" onClick={() => { navigate("/about"); }}>LEARN MORE
            <div className="home-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
            </div>
          </button>
          <button className="home-cssbuttons-io-button" onClick={() => { navigate("/events"); }}>EVENTS
            <div className="home-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
            </div>
          </button>
          
        </div>
        <div className='home-info-text-container'>
          <p class="home-info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Gravida
              ullamcorper lectus libero ut.Tellus aliquam, tortor aliquam nulla.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
