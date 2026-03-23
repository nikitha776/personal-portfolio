import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Code2, Database, Layout, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="text-nature-green" size={24} />,
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind CSS", "Zustand"]
  },
  {
    title: "Backend",
    icon: <Database className="text-nature-brown" size={24} />,
    skills: ["Node.js", "Express.js", "MongoDB", "WebSockets", "Cloudinary"]
  },
  {
    title: "Languages & Core",
    icon: <Code2 className="text-orange-400" size={24} />,
    skills: ["C", "C++", "Java", "Data Structures & Algorithms"]
  },
  {
    title: "Tools",
    icon: <Wrench className="text-slate-500" size={24} />,
    skills: ["Git", "GitHub", "VS Code"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Forest Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-nature-green/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-nature-brown/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="inline-flex items-center gap-2 mb-3 bg-nature-green/10 px-4 py-1.5 rounded-full border border-nature-green/20">
            <Leaf size={16} className="text-nature-green" />
            <h2 className="text-sm font-bold tracking-widest text-nature-green uppercase">Forest Zone</h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-nature-darkWood mb-4">
            My Tech Stack
          </h3>
          <p className="text-nature-darkWood/70 max-w-2xl mx-auto text-lg">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-[0_4px_20px_0_rgba(31,38,135,0.05)] border border-white/60 hover:border-nature-green/40 hover:shadow-[0_8px_32px_0_rgba(143,151,121,0.2)] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-nature-green/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-nature-darkWood/10 relative z-10">
                <div className="p-2.5 bg-white/80 rounded-xl shadow-sm border border-white/50 group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-nature-darkWood tracking-tight">{category.title}</h4>
              </div>
              
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3.5 py-1.5 bg-white/80 text-nature-darkWood font-semibold text-sm rounded-lg border border-nature-darkWood/10 shadow-sm hover:bg-nature-green hover:text-white hover:border-nature-green hover:shadow-md transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
