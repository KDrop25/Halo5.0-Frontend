import React from 'react';
import './Sign-in.css';
import discordlogo from '../../assets/icons8-discord.svg'
import youtubelogo from '../../assets/icons8-youtube.svg'
import githublogo from '../../assets/icons8-github.svg'
import twitterlogo from '../../assets/icons8-twitter.svg'
import instagramlogo from '../../assets/icons8-instagram.svg'
import googleloginlogo from '../../assets/icons8-google-login.png'
import discordloginlogo from '../../assets/icons8-discord-login.png'
import { useNavigate } from 'react-router-dom';


const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className='signin-main'>
      <div class="signin-main-core">
        <div class="signin-container signin-b-container" id="b-container">
          <form class="signin-form" id="b-form" method="" action="">
            <div class="signin-switch__circle"></div>
            <div class="signin-switch__circle signin-switch__circle--t"></div>
            <h2 class="signin-form_title signin-title">Sign in to Website</h2>
            <div class="signin-form__icons">
              <a href='https://discord.com'><img class="signin-form__icon" src={discordlogo} alt=""/></a>
              <a href='https://discord.com'><img class="signin-form__icon" src={youtubelogo} alt=""/></a>
              <a href='https://discord.com'><img class="signin-form__icon" src={githublogo} alt=""/></a>
              <a href='https://discord.com'><img class="signin-form__icon" src={twitterlogo} alt=""/></a>
              <a href='https://discord.com'><img class="signin-form__icon" src={instagramlogo} alt=""/></a>

            </div>
            <span class="signin-form__span">or use your email account</span>
            <input class="signin-form__input" type="text" placeholder="Email" />
            <input class="signin-form__input" type="password" placeholder="Password" />
            <a href="Forgotpass" class="signin-form__link">Forgot your password?</a>
            <a href='Signin'><button class="signin-form__button signin-button signin-submit" onClick={() => { navigate("/signin2"); }}>SIGN IN</button></a>
            <a href="Forgotpass" class="signin-form__login">Sign in with</a>
            <div class="signin-form__icons">
              <a href='https://discord.com'><img class="signin-form__icon" src={googleloginlogo} alt=""/></a>
              <a href='https://discord.com'><img class="signin-form__icon" src={discordloginlogo} alt=""/></a>
              
              

            </div>

          </form>
        </div>
        <div class="signin-switch" id="switch-cnt">

          <div class="signin-switch__circle"></div>
          <div class="signin-switch__circle signin-switch__circle--t"></div>

          <div class="signin-switch__container " id="switch-c2">
            <h2 class="signin-switch__title signin-title">Hello Friend !</h2>
            <p class="signin-switch__description signin-description">Enter your personal details and start journey with us</p>
            <button class="signin-switch__button signin-button signin-switch-btn" onClick={() => { navigate("/signup"); }}>SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin




























