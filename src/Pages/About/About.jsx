import React from 'react';
import './About.css';
import halologo from '../../assets/Halolegion logo Trans 500by500.png'


const About = () => {
  return (
    <div class = "main-about">
      <div class = "main-about-core">
        <div class="about-bg-logo">
          <img class="about-bg-halolegion-logo" alt="logo" src={halologo}/>
        </div>
        <div class = 'about-heading'>
          About Halolegion
          
        </div>
        <div className = 'about-info'>
          <div className = 'about-info2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, lacus ac vitae pellentesque massa dolor non. Non consectetur egestas imperdiet magna etiam vitae, nunc, dui. Cursus porta velit dapibus imperdiet id sit. Velit orci orci egestas neque.</div>
          <div className = 'about-info2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, lacus ac vitae pellentesque massa dolor non. Non consectetur egestas imperdiet magna etiam vitae, nunc, dui. Cursus porta velit dapibus imperdiet id sit. Velit orci orci egestas neque.</div>
          <div className = 'about-info2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, lacus ac vitae pellentesque massa dolor non. Non consectetur egestas imperdiet magna etiam vitae, nunc, dui. Cursus porta velit dapibus imperdiet id sit. Velit orci orci egestas neque.</div>
          
        </div>
      </div>
    </div>
  )
}

export default About










      
    
    