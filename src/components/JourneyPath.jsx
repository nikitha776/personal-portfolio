import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import profileImage from '../assets/image1.png';

const AvatarPointer = () => (
  <motion.div 
    className="relative z-50 flex items-center justify-center drop-shadow-md"
    animate={{ 
      y: [0, -5, 0, 5, 0],
    }}
    transition={{ 
      duration: 3, 
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {/* Left Wing */}
    <motion.div 
      className="absolute -top-1 -left-4 w-6 h-8 bg-white/70 backdrop-blur-md border border-nature-green/30 rounded-t-full rounded-bl-full origin-bottom-right z-0 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
      animate={{ rotate: [10, -50, 10], skewY: [0, 20, 0] }}
      transition={{ duration: 0.15, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Right Wing */}
    <motion.div 
      className="absolute -top-1 -right-4 w-6 h-8 bg-white/70 backdrop-blur-md border border-nature-green/30 rounded-t-full rounded-br-full origin-bottom-left z-0 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
      animate={{ rotate: [-10, 50, -10], skewY: [0, -20, 0] }}
      transition={{ duration: 0.15, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Avatar Image */}
    <div className="relative w-12 h-12 rounded-full border-2 border-nature-green shadow-lg overflow-hidden bg-nature-beige z-10 flex items-center justify-center">
      <img 
        src={profileImage} 
        alt="Nikitha" 
        className="w-full h-full object-cover"
      />
    </div>
  </motion.div>
);

const SpeechBubble = ({ text, progress, showRange }) => {
  const isVisible = progress >= showRange[0] && progress <= showRange[1];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        x: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.4 }}
      className="absolute left-12 top-0 ml-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl rounded-tl-none shadow-lg border border-nature-green/20 text-sm font-medium text-nature-darkWood whitespace-nowrap z-50"
    >
      {text}
    </motion.div>
  );
};

const JourneyPath = () => {
  const { scrollYProgress } = useScroll();
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
    
    const handleResize = () => {
      if (pathRef.current) {
        setPathLength(pathRef.current.getTotalLength());
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate position along the SVG path
  const [beePos, setBeePos] = useState({ x: 50, y: 0 });

  useEffect(() => {
    return springScroll.onChange((v) => {
      setProgress(v);
      if (pathRef.current && pathLength > 0) {
        const point = pathRef.current.getPointAtLength(v * pathLength);
        // Map the SVG coordinates (0-100 viewBox) to percentages
        setBeePos({ x: point.x, y: point.y });
      }
    });
  }, [springScroll, pathLength]);

  return (
    <div className="fixed left-0 md:left-4 top-0 bottom-0 w-24 md:w-32 pointer-events-none z-40 hidden sm:block">
      
      <div className="absolute inset-0 w-full h-full py-20 z-10">
        <svg 
          viewBox="0 0 100 1000" 
          preserveAspectRatio="none" 
          className="w-full h-full drop-shadow-lg"
        >
          {/* Base Path (Thicker and more visible) */}
          <path
            d="M 50 0 C 80 100, 20 200, 50 300 C 80 400, 20 500, 50 600 C 80 700, 20 800, 50 900 C 80 950, 50 1000, 50 1000"
            fill="none"
            stroke="#8B5E34"
            strokeWidth="4"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
          
          {/* Animated Fill Path (Glowing and thick) */}
          <motion.path
            ref={pathRef}
            d="M 50 0 C 80 100, 20 200, 50 300 C 80 400, 20 500, 50 600 C 80 700, 20 800, 50 900 C 80 950, 50 1000, 50 1000"
            fill="none"
            stroke="#5A6E46"
            strokeWidth="6"
            strokeLinecap="round"
            style={{
              pathLength: springScroll,
              filter: 'drop-shadow(0px 0px 8px rgba(90, 110, 70, 0.8))'
            }}
          />
        </svg>
      </div>

      {/* Moving Avatar Pointer */}
      <motion.div 
        className="absolute transform -translate-x-1/2 -translate-y-1/2 mt-20 z-50"
        style={{ 
          left: `${beePos.x}%`, 
          top: `${beePos.y / 10}%` // viewBox height is 1000, so divide by 10 for percentage
        }}
      >
        <AvatarPointer />
        <SpeechBubble text="Starting the journey! 🌱" progress={progress} showRange={[0, 0.1]} />
        <SpeechBubble text="Here's my story 📖" progress={progress} showRange={[0.15, 0.25]} />
        <SpeechBubble text="My tech stack 💻" progress={progress} showRange={[0.3, 0.45]} />
        <SpeechBubble text="Check out my work! ✨" progress={progress} showRange={[0.5, 0.7]} />
        <SpeechBubble text="My experience 🌉" progress={progress} showRange={[0.75, 0.85]} />
        <SpeechBubble text="Let's connect! 🤝" progress={progress} showRange={[0.9, 1]} />
      </motion.div>
    </div>
  );
};

export default JourneyPath;
