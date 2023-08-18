// Watermark.js
import React from 'react';
import './Watermark.css'; // Create a separate CSS file for styling
import halologo from '../../assets/Halolegion logo Trans 500by500.png'

const Watermark = () => {
  return (
    <div className="watermark-container">
      <div className='watermark-content'>
        <img class="watermark-content" alt="logo" src={halologo}/>
      </div>
    </div>
  );
};

export default Watermark;
