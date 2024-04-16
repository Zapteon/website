"use client"

import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

export default function SplineBlobs() {
  const [displayStyle, setDisplayStyle] = useState('none');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setDisplayStyle('none');
      } else {
        setDisplayStyle('block');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div style={{ display: displayStyle }} className="max-w-full">
      <Spline className="absolute top-20 right-0" style={{ overflow: 'hidden', width: '180px', height: '360px' }} scene="https://draft.spline.design/4dmmxwIs1CwsZ0ps/scene.splinecode" />
      <Spline className="absolute top-60 -left-[280px]" style={{ overflow: 'hidden', width: '440px', height: '800px' }} scene="https://draft.spline.design/2VDXta3J8Ya57rSb/scene.splinecode" />
    </div>
  )
} 
