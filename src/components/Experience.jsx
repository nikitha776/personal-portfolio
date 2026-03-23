import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Zap, TrendingUp, Mountain } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Experience Section - Bridge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="text-sm font-bold tracking-widest text-nature-brown uppercase mb-3 flex items-center gap-2">
              <Briefcase size={18} /> Bridge Section
            </h2>
            <h3 className="text-3xl font-bold text-nature-darkWood mb-8">
              Experience
            </h3>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-md border-b-4 border-nature-brown/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-nature-brown"></div>
              <h4 className="text-xl font-bold text-nature-darkWood mb-1">Associate</h4>
              <p className="text-nature-green font-medium mb-4">Next Tech Lab (Norman Lab)</p>
              <p className="text-nature-darkWood/80">
                Gained valuable experience contributing to various web and application development projects. Collaborated with peers to explore new technologies and solve complex technical challenges. Active involvement in event organizing and community building.
              </p>
            </div>
          </motion.div>

          {/* Achievements & Strengths Section - Hilltop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-nature-brown uppercase mb-3 flex items-center gap-2">
              <Mountain size={18} /> Hilltop
            </h2>
            <h3 className="text-3xl font-bold text-nature-darkWood mb-8">
              Strengths
            </h3>

            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-white/60 backdrop-blur-md rounded-xl p-5 shadow-sm border border-nature-green/20 flex items-start gap-4 transition-all"
              >
                <div className="bg-nature-green/10 p-3 rounded-lg text-nature-green">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-nature-darkWood mb-1">Fast Learner</h4>
                  <p className="text-sm text-nature-darkWood/70">Quick to adapt to new technologies, frameworks, and environments.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-white/60 backdrop-blur-md rounded-xl p-5 shadow-sm border border-nature-green/20 flex items-start gap-4 transition-all"
              >
                <div className="bg-nature-green/10 p-3 rounded-lg text-nature-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-nature-darkWood mb-1">Problem-Solving Mindset</h4>
                  <p className="text-sm text-nature-darkWood/70">Analytical approach focused on finding efficient and scalable solutions.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-white/60 backdrop-blur-md rounded-xl p-5 shadow-sm border border-nature-green/20 flex items-start gap-4 transition-all"
              >
                <div className="bg-nature-green/10 p-3 rounded-lg text-nature-green">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-nature-darkWood mb-1">Growth-Focused</h4>
                  <p className="text-sm text-nature-darkWood/70">Demonstrated continuous improvement in development skills and learning.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
