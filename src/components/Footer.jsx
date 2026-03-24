import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-nature-green text-nature-cream py-6 px-6 md:px-12 relative z-10 sm:ml-20 md:ml-32 border-t border-white/10 shadow-inner overflow-hidden">
      {/* Subtle organic texture over the green */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
      
      <div className="container mx-auto max-w-5xl flex flex-col lg:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Left: Brand / Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <span className="text-xl font-bold text-white tracking-tighter">VN.</span>
          <span className="text-white/30 hidden sm:block">|</span>
          <p className="text-white/80 text-sm font-medium">
            &copy; {new Date().getFullYear()} Vissamsetty Lakshmi Nikitha
          </p>
        </div>

        {/* Center: Socials */}
        <div className="flex gap-5">
          <a href="https://github.com/vlnikitha" target="_blank" rel="noopener noreferrer" 
            className="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/vissamsetty-lakshmi-nikitha" target="_blank" rel="noopener noreferrer" 
            className="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300">
            <Linkedin size={20} />
          </a>
          <a href="mailto:vlnikitha2006@gmail.com" 
            className="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300">
            <Mail size={20} />
          </a>
        </div>

        {/* Right: Back to top & Info */}
        <div className="flex items-center gap-6">
          <p className="hidden md:flex items-center gap-1.5 text-xs text-white/70 font-medium">
            Designed with <Heart size={14} className="text-[#C87B3B] animate-pulse" />
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/20"
          >
            <span>Top</span>
            <ArrowUp size={14} className="transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
