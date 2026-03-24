import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JourneyPath from './components/JourneyPath';

const FloatingElements = () => {
  const elements = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 12 + 4,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
    type: Math.random() > 0.6 ? 'leaf' : (Math.random() > 0.5 ? 'orb' : 'particle')
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className={`absolute ${
            el.type === 'leaf' 
              ? 'bg-nature-green/20 rounded-tl-full rounded-br-full' 
              : el.type === 'orb'
                ? 'bg-orange-200/20 rounded-full blur-[2px]'
                : 'bg-white/40 rounded-full blur-[1px]'
          }`}
          style={{
            top: el.top,
            left: el.left,
            width: el.size,
            height: el.type === 'leaf' ? el.size * 1.5 : el.size,
          }}
          animate={{
            y: ['-10vh', '110vh'],
            x: ['-5vw', '5vw', '-5vw'],
            rotate: el.type === 'leaf' ? [0, 360] : 0,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            y: { duration: el.duration, repeat: Infinity, ease: "linear", delay: el.delay },
            x: { duration: el.duration / 2, repeat: Infinity, ease: "easeInOut", delay: el.delay },
            rotate: { duration: el.duration / 1.5, repeat: Infinity, ease: "linear" },
            opacity: { duration: el.duration, repeat: Infinity, ease: "linear", delay: el.delay }
          }}
        />
      ))}
    </div>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState('home');
  
  // Parallax Background transformations
  const skyY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const hill1Y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const hill2Y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  // Section observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine dynamic background glow based on active section
  const getBackgroundTint = () => {
    switch(activeSection) {
      case 'skills': return 'rgba(90, 110, 70, 0.05)'; // nature-green
      case 'projects': return 'rgba(139, 94, 52, 0.05)'; // nature-brown
      case 'contact': return 'rgba(30, 58, 138, 0.05)'; // blue
      default: return 'rgba(0, 0, 0, 0)';
    }
  };

  return (
    <div className="min-h-screen text-gray-800 font-sans selection:bg-nature-green/30 relative overflow-hidden transition-all duration-1000 ease-in-out" style={{ backgroundColor: '#DED6C4' }}>
      
      {/* Dynamic Overlay Tint */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-colors duration-1000 ease-in-out"
        style={{ backgroundColor: getBackgroundTint() }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Sky Gradient (Back Layer) */}
        <motion.div 
          className="absolute -top-[50vh] inset-x-0 h-[200vh] bg-gradient-to-b from-[#C87B3B]/20 via-nature-beige to-nature-cream opacity-80"
          style={{ y: skyY }}
        />
        
        {/* Distant Hills (Mid Layer) */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[60vh] opacity-40"
          style={{ y: hill1Y }}
        >
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
            <path fill="#5A6E46" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>

        {/* Closer Hills (Front Layer) */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-50"
          style={{ y: hill2Y }}
        >
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
            <path fill="#3E4D31" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>
      </div>

      <FloatingElements />
      <JourneyPath />
      <Navbar />
      
      <main className="sm:ml-20 md:ml-32 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
