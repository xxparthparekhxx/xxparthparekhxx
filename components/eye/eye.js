import React, { useRef, useEffect } from 'react';

function Eye() {
  const eyeballRef = useRef(null);
  const pupilRef = useRef(null);

  useEffect(() => {
    function handleMouseMove(event) {
      const { clientX, clientY } = event;
  
      const centerX = eyeballRef.current.offsetLeft + (eyeballRef.current.offsetWidth / 2);
      const centerY = eyeballRef.current.offsetTop + (eyeballRef.current.offsetHeight / 2);
  
      const radians = Math.atan2(clientX - centerX, clientY - centerY);
      const degree = (radians * (180 / Math.PI) * -1) + 90;
  
      pupilRef.current.style.transform = `rotate(${degree}deg)`;
    }
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <div ref={eyeballRef} id="eyeball" style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'white',
        position: 'absolute', 
        left: '50%', 
        top: '50%', 
        transform: 'translate(-50%, -50%)',
      }}>
      <div ref={pupilRef} id="pupil" style={{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'black',
        position: 'absolute', 
        left: '50%', 
        top: '50%', 
        transform: 'translate(-50%, -50%)',
      }}/>
    </div>
  );
}

export default Eye;