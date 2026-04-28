"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(timer);
        return 100;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (counter === 100) {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      tl.to(".preloader-text", {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power4.in",
      })
      .to(".preloader-bg", {
        height: 0,
        duration: 1.2,
        ease: "expo.inOut",
        stagger: 0.1,
      });
    }
  }, [counter, onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col pointer-events-none">
      <div className="preloader-bg absolute inset-0 bg-black" />
      <div className="preloader-bg absolute inset-0 bg-primary-neon h-full" />
      <div className="preloader-bg absolute inset-0 bg-white h-full" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="overflow-hidden mb-4">
           <h1 className="preloader-text text-[15vw] font-heading font-bold text-black leading-none tracking-tighter">
              ENTEK<span className="text-primary-neon">.</span>
           </h1>
        </div>
        <div className="preloader-text flex items-center gap-8">
           <span className="text-black/20 font-sans font-bold text-sm tracking-[0.5em] uppercase">Loading</span>
           <span className="text-primary-neon font-heading font-bold text-6xl">{counter}%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
