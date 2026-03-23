import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sprout } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-nature-cream/50 to-transparent">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-nature-green/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-nature-brown/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl relative"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-nature-green/10 text-nature-green font-medium text-sm mb-6 border border-nature-green/20"
          >
            <Sprout size={16} />
            Trail Start
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-nature-darkWood mb-4">
            Vissamsetty Lakshmi <span className="text-nature-green">Nikitha</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-nature-brown mb-6">
            Full Stack Developer (MERN Stack)
          </h2>
          <p className="text-lg md:text-xl text-nature-darkWood/80 mb-10 leading-relaxed max-w-2xl">
            "Building scalable web applications and exploring AI-driven solutions."
            <br />
            Embark on a journey through my growth as a developer, crafting seamless user experiences and robust systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-nature-green text-white px-6 py-3 rounded-full font-medium hover:bg-nature-green/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Explore the Path
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-nature-darkWood border border-nature-green/20 px-6 py-3 rounded-full font-medium hover:bg-nature-cream transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1"
            >
              Contact Me
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
