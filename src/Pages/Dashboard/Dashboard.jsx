import React from 'react';
import './Dashboard.css';
import homelogo from '../../assets/images/icons8-home.png'
import facebooklogo from '../../assets/images/icons8-facebook-400.png'
import instagramlogo from '../../assets/images/icons8-instagram-500.png'
import twitterlogo from '../../assets/images/icons8-twitter-400.png'
import youtubelogo from '../../assets/images/icons8-youtube-480.png'

const Dashboard = () => {
  

  return (
    <div class="dashboard-main">

      <div class="dashboard-card-main dashboard-navigation-card">
        <div class = "dashboard-navigation-cards-group-upper">
          
          <div class="dashboard-cards dashboard-navigation-cards-hero">
            <img class="dashboard-form__icon" src={homelogo} alt=''/>
            <h1 class="dashboard-navigation-hero-text">DASHBOARD</h1>
          </div>
          
          <div class="dashboard-vertical-cards dashboard-vertical-cards-upper dashboard-navigation-card-group-mid">
            
            <div class="dashboard-cards dashboard-navigation-cards-menu">
              <img class="dashboard-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="dashboard-navigation-hero-menu-text">DASHBOARD</h1>
            </div>

            <div class="dashboard-cards dashboard-navigation-cards-menu">
              <img class="dashboard-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="dashboard-navigation-hero-menu-text">DASHBOARD</h1>
            </div>

            <div class="dashboard-cards dashboard-navigation-cards-menu">
              <img class="dashboard-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="dashboard-navigation-hero-menu-text">DASHBOARD</h1>
            </div>

            <div class="dashboard-cards dashboard-navigation-cards-menu">
              <img class="dashboard-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="dashboard-navigation-hero-menu-text">DASHBOARD</h1>
            </div>

            <div class="dashboard-cards dashboard-navigation-cards-menu">
              <img class="dashboard-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="dashboard-navigation-hero-menu-text">DASHBOARD</h1>
            </div>

            <div class="dashboard-cards dashboard-navigation-cards-menu">
              <img class="dashboard-form__icon-menu" src={homelogo} alt=''/>
              <h1 class="dashboard-navigation-hero-menu-text">DASHBOARD</h1>
            </div>
            
            
          </div>

        </div>
        
        
        <div class = "dashboard-navigation-cards-group-lower">
          <div class="dashboard-cards dashboard-navigation-cards-profile">
            <img class="dashboard-form__icon-profile" src={homelogo} alt=''/>
            <h1 class="dashboard-navigation-hero-profile-text">Karan</h1>
          </div>
        </div>
      </div>


      <div class="dashboard-card-main dashboard-card-group">
        <div class="dashboard-horizontal-cards dashboard-card-group-top">
          <div class="dashboard-cards dashboard-cards-top">
            <img class="dashboard-form__icon-top" src={homelogo} alt=''/>
            <h1 class="dashboard-navigation-hero-text">STATS</h1>
          </div>
          <div class="dashboard-cards dashboard-cards-top">
            <img class="dashboard-form__icon-top" src={homelogo} alt=''/>
            <h1 class="dashboard-navigation-hero-text">STATS</h1>
          </div>
          <div class="dashboard-cards dashboard-cards-top">
            <img class="dashboard-form__icon-top" src={homelogo} alt=''/>
            <h1 class="dashboard-navigation-hero-text">STATS</h1>
          </div>
          <div class="dashboard-cards dashboard-cards-top">
            <img class="dashboard-form__icon-top" src={homelogo} alt=''/>
            <h1 class="dashboard-navigation-hero-text">STATS</h1>
          </div>
          <div class="dashboard-cards dashboard-cards-top">
            <img class="dashboard-form__icon-top" src={homelogo} alt=''/>
            <h1 class="dashboard-navigation-hero-text">STATS</h1>
          </div>
          
        </div>
        <div class="dashboard-horizontal-cards dashboard-card-group-mid">
          <div class="dashboard-cards dashboard-cards-mid">
            <img class="dashboard-form__icon-mid" src={facebooklogo} alt=''/>
            <h1 class="dashboard-navigation-hero-text">FACEBOOK</h1>
          </div>
          <div class="dashboard-cards dashboard-cards-mid">
            <img class="dashboard-form__icon-mid" src={youtubelogo} alt=''/>
            <h1 class="dashboard-navigation-hero-text">YOUTUBE</h1>
          </div>
          <div class="dashboard-cards dashboard-cards-mid">
            <img class="dashboard-form__icon-mid" src={twitterlogo} alt=''/>
            <h1 class="dashboard-navigation-hero-text">TWITTER</h1>
          </div>
          <div class="dashboard-cards dashboard-cards-mid">
            <img class="dashboard-form__icon-mid" src={instagramlogo} alt=''/>
            <h1 class="dashboard-navigation-hero-text">INSTAGRAM</h1>
          </div>
          
        </div>
        <div class="dashboard-horizontal-cards dashboard-card-group-bottom">
          <div class="dashboard-cards dashboard-cards-bottom"/>
          
        </div>
      </div>

    </div>



  )
}

export default Dashboard












