import React, { useEffect } from 'react';

function GoogleAnalytics() {
  useEffect(() => {
    // Load the gtag.js library
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-TW3MWFPJ1D';
    script.async = true;
    document.head.appendChild(script);

    // Initialize the dataLayer and define gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());

    // Configure Google Analytics
    gtag('config', 'G-TW3MWFPJ1D');
  }, []);

  return null; // This component doesn't render anything
}

export default GoogleAnalytics;
