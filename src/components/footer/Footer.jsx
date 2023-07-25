import React from 'react'
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






const Footer = () => {
  return (
    
      <div class="footer">
        <div class="top-panel">
          <div class="left-panel">
            <p className='footer-home-text'><a href="home">Home</a></p>
            <p className='footer-about-text'><a href="about">About</a></p>
            <p className='footer-members-text'><a href="members">Members</a></p>
            <p className='footer-schedule-text'><a href="schedule">Schedule</a></p>
            <p className='footer-events-text'><a href="events">Events</a></p>
            <p className='footer-contact-text'><a href="contact">Contact</a></p>
            <p><a href="https://www.facebook.com"><img class = "facebook-image" src={facebook} alt="Facebook"/></a><a href="https://www.instagram.com/halocon.official/"><img class = "instagram-image" src={instagram} alt="Facebook"/></a><a href="www.facebook.com"><img class = "twitter-image" src={twitter} alt="Facebook"/></a><a href="https://www.youtube.com/channel/UCA4Hn06L6b99i9bgqmhtN1Q"><img class = "youtube-image" src={youtube} alt="Facebook"/></a><a href="www.facebook.com"><img class = "twitch-image" src={twitch} alt="Facebook"/></a><a href="www.facebook.com"><img class = "twitch-image" src={github} alt="Facebook"/></a></p>
          </div>
          <div class="right-panel">
            <p className='footer-email-text'><img class = "mail-image" src={mail} alt="Email:"/><a href="mailto:halolegionofficial@gmail.com">halolegionofficial@gmail.com</a></p>
            <p><img class = "mobile-phone-image" src={phone} alt="Email:"/><strong>+91 - </strong>9827023035</p>
            <p><img class = "office-phone-image" src={phone} alt="Email:"/><strong>0731 - </strong>4982904</p>
            <br></br>
            <a className='footer-location-text' href='https://www.google.com/maps?ll=22.762327,75.931086&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=3217561437259414587'>
            <p className='footer-location-text'><img class = "location-image" src={location} alt="Email:"/>Piplia Kumar, Nepania Road,Near Water World, Nepania,Indore,Madhya Pradesh, <strong>452016</strong></p>
            </a>
            <div class="right-privacy-panel">
            <p class='right-text-1'><strong><a href="privacy">Privacy</a></strong></p>
            <p class='right-text-2'><strong><a href="terms">Terms & Conditions</a></strong></p>
            
            </div>
          </div>
        </div>
        
      </div>
    
    
  )
}

export default Footer