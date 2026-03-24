import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import profileImage from '../assets/image2.png';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-sm border border-nature-green/10 relative"
        >
          {/* Milestone marker */}
          <div className="absolute -top-4 -left-4 md:-left-8 bg-nature-beige p-3 rounded-full border-2 border-nature-green text-nature-green shadow-md hidden sm:block">
             <MapPin size={24} />
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <h2 className="text-sm font-bold tracking-widest text-nature-brown uppercase">First Stop</h2>
                <div className="h-px bg-nature-brown/30 flex-grow max-w-[100px]"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-nature-darkWood mb-6">
                My Journey to Full Stack Development
              </h3>
              <div className="prose prose-lg text-nature-darkWood/80 space-y-4">
                <p>
                  I started my coding journey without a prior background in computer science. What began as a simple curiosity quickly grew into a deep-rooted passion for building and problem-solving.
                </p>
                <p>
                  Today, I thrive on crafting real-world applications that make a difference. I specialize in the MERN stack and have a growing interest in integrating AI-driven solutions into modern web platforms.
                </p>
                <p>
                  Like a growing tree, I'm constantly learning, expanding my roots, and looking for new challenges that allow me to push the boundaries of what's possible on the web.
                </p>
              </div>
            </div>

            {/* Profile Image */}
            <div className="w-full md:w-5/12 h-64 md:h-80 bg-nature-cream rounded-full md:rounded-t-full border-4 border-white shadow-lg relative overflow-hidden flex items-center justify-center group">
               <img 
                 src={profileImage} 
                 alt="Vissamsetty Lakshmi Nikitha" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-nature-darkWood/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
