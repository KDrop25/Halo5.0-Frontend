import React, { useEffect } from 'react';

function GoogleTagManager() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-F9RZWEMYD0';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-F9RZWEMYD0');
  }, []);

  return null;
}

export default GoogleTagManager;
