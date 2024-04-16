"use client"

import React, { useState, useEffect } from 'react';
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const [displayStyle, setDisplayStyle] = useState('none');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setDisplayStyle('block');
      } else {
        setDisplayStyle('none');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ display: displayStyle }}>
      <Spline scene="https://draft.spline.design/kyaCdirl0VCeX6eU/scene.splinecode" style={{ marginRight: '40px', width: '700px', height: '880px' }} />
    </div>
  );
}

