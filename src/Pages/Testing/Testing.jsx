import React from 'react';
import './Testing.css';
import discordlogo from '../../assets/icons8-discord.svg'
import youtubelogo from '../../assets/icons8-youtube.svg'
import githublogo from '../../assets/icons8-github.svg'
import twitterlogo from '../../assets/icons8-twitter.svg'
import instagramlogo from '../../assets/icons8-instagram.svg'
import googleloginlogo from '../../assets/icons8-google-login.png'
import discordloginlogo from '../../assets/icons8-discord-login.png'
import { useNavigate } from 'react-router-dom';


const Testing = () => {
  const navigate = useNavigate();
  return (
    <div className='signup-success-main'>
      <div class="signup-success-main-core">
        
        <div class="signup-success-switch" id="switch-cnt">

          <div class="signup-success-switch__circle"></div>
          <div class="signup-success-switch__circle signup-success-switch__circle--t"></div>

          <div class="signup-success-switch__container " id="switch-c2">
            <h2 class="signup-success-switch__title signup-success-title">Hello Karan !</h2>
            <p class="signup-success-switch__description signup-success-description">Enter your personal details and start journey with us</p>
            <button class="signup-success-switch__button signup-success-button signup-success-switch-btn" onClick={() => { navigate("/signin"); }}>SIGN IN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testing




























