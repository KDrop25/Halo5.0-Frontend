import React, { useEffect, useRef } from 'react';

const YourMainComponent = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  
  useEffect(() => {
    async function startWebcam() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch (error) {
        console.error(error);
      }
    }

    startWebcam();

    return () => {
      // Cleanup function
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <div className='multifacerecog-container'>  
        <video className='multifacerecog-map' ref={videoRef} width="600" height="450" autoPlay></video>
        <canvas className='multifacerecog-canvas' ref={canvasRef} />
      </div>
    </div>
  );
};

export default YourMainComponent;
