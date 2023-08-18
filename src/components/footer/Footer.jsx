import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';
import mail from '../../assets/icons8-mail-100 .png'
import location from '../../assets/icons8-location-100.png'
import facebook from '../../assets/icons8-facebook-100.png'
import phone from '../../assets/icons8-phone-100.png'
import instagram from '../../assets/icons8-instagram.svg'
import twitter from '../../assets/icons8-twitter.svg'

import github from '../../assets/icons8-github.svg'
import twitch from '../../assets/icons8-twitch-500.png'
import youtube from '../../assets/icons8-youtube.svg'
const Menu = () => (<>
  <Link to="/home"><p className='navbar-home-text'>Home</p></Link>
  <Link to="/about"><p className='navbar-about-text'>About</p></Link>
  <Link to="/members"><p className='navbar-members-text'>Members</p></Link>
  <Link to="/schedule"><p className='navbar-schedule-text'>Schedule</p></Link>
  <Link to="/events"><p className='navbar-events-text'>Events</p></Link>
  <Link to="/gallery"><p className='navbar-contact-text'>Gallery</p></Link>
  <Link to="/contact"><p className='navbar-contact-text'>Contact</p></Link>
  
</>)






const Footer = () => {
  return (
    
      <div class="footer">
        <div class="top-panel">
          <div class="left-panel">
            <div className='left-panel-content'>
              <Menu/>
              <div>
                <a href="https://www.facebook.com"><img class = "facebook-image" src={facebook} alt="Facebook"/></a>
                
                <a href="https://www.instagram.com/halocon.official/"><img class = "instagram-image" src={instagram} alt="Facebook"/></a>
                
                <a href="www.facebook.com"><img class = "twitter-image" src={twitter} alt="Facebook"/></a>
                
                <a href="https://www.youtube.com/channel/UCA4Hn06L6b99i9bgqmhtN1Q"><img class = "youtube-image" src={youtube} alt="Facebook"/></a>
                
                <a href="www.facebook.com"><img class = "twitch-image" src={twitch} alt="Facebook"/></a>
                
                <a href="www.facebook.com"><img class = "twitch-image" src={github} alt="Facebook"/></a>
              </div>
            </div>
          </div>
          <div class="right-panel">
            <div className='right-panel-content'>
              <p className='footer-email-text'><img class = "mail-image" src={mail} alt="Email:"/><a href="mailto:halolegionofficial@gmail.com">halolegionofficial@gmail.com</a></p>
              <p><img class = "mobile-phone-image" src={phone} alt="Email:"/><strong>+91 - </strong>9827023035</p>
              <p><img class = "office-phone-image" src={phone} alt="Email:"/><strong>0731 - </strong>4982904</p>
              <br></br>
              <p className='footer-email-text'><img class = "mail-image" src={location} alt="Location"/><a href="mailto:halolegionofficial@gmail.com">Piplia Kumar, Nepania Road,<br/>Near Water Lily, <br/>Nepania,<br/>Indore,Madhya Pradesh, <strong>452016</strong></a></p>
              <div class="right-privacy-panel">
                <p class='right-text-1'><strong><a href="privacy">Privacy</a></strong></p>
                <p class='right-text-2'><strong><a href="terms">Terms & Conditions</a></strong></p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    
    
  )
}

export default Footer