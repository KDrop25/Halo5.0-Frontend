import React from 'react';
import './Schedule.css';
import schedule from '../../assets/Schedule.png'
import halologo from '../../assets/Halolegion logo Trans 500by500.png'


const About = () => {
  return (
    <div>
      <div class="schedule-bg-logo">
            <img class="schedule-bg-halolegion-logo" alt="logo" src={halologo}/>
      </div>
      <div className='schedule-main'>
        <img class="schedule-img" alt="" src={schedule}/>
      </div>
    </div>
  )
}

export default About







      
    
    