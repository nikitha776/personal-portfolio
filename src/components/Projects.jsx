import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, MapPin, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const projects = [
  {
    title: "Cortex",
    description: "An intelligent platform combining robust MERN stack backend with AI capabilities.",
    tech: ["MERN", "AI"],
    features: [
      "Intelligent platform",
      "Real-time data handling",
      "Secure authentication",
      "Scalable backend"
    ],
    github: "#",
    live: "#"
  },
  {
    title: "Real-Time Chat Application",
    description: "A feature-rich messaging platform supporting instant communication and media sharing.",
    tech: ["MERN", "WebSockets", "Zustand", "Cloudinary"],
    features: [
      "Real-time messaging",
      "Image sharing",
      "Efficient state management"
    ],
    github: "#",
    live: "#"
  },
  {
    title: "Explainable AI Research Work",
    description: "Research project focusing on making AI models transparent and interpretable in healthcare.",
    tech: ["Python", "SHAP", "LIME"],
    features: [
      "Model interpretability",
      "Healthcare prediction insights"
    ],
    github: "#",
    live: "#"
  },
  {
    title: "Swiggy Clone",
    description: "A frontend clone of the popular food delivery application.",
    tech: ["React", "API Integration"],
    features: [
      "Restaurant listing",
      "Search & filtering",
      "Dynamic menu fetching"
    ],
    github: "#",
    live: "#"
  },
  {
    title: "Netflix GPT",
    description: "AI-powered movie recommendation system with a Netflix-like interface.",
    tech: ["React", "OpenAI API"],
    features: [
      "AI-powered movie recommendations",
      "Responsive UI"
    ],
    github: "#",
    live: "#"
  },
  {
    title: "E-commerce Website",
    description: "A comprehensive e-commerce platform with full shopping functionality.",
    tech: ["MERN"],
    features: [
      "Product listing",
      "Cart system",
      "Authentication",
      "Order management"
    ],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 420 : 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 px-6 md:px-12 relative bg-nature-beige/50">
      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative"
        >
          <div className="inline-flex items-center gap-2 mb-3 bg-nature-brown/10 px-4 py-1.5 rounded-full border border-nature-brown/20">
            <MapPin size={16} className="text-nature-brown" />
            <h2 className="text-sm font-bold tracking-widest text-nature-brown uppercase">Main Checkpoint</h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-nature-darkWood mb-4">
            Featured Projects
          </h3>
          <p className="text-nature-darkWood/70 max-w-2xl mx-auto">
            Swipe or use the arrows to explore some of my favorite builds, ranging from AI integrations to full-stack platforms.
          </p>
        </motion.div>

        {/* Scroll Controls */}
        <div className="hidden md:flex justify-end gap-3 mb-6 pr-4">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full bg-white/50 backdrop-blur-md border border-nature-green/20 text-nature-darkWood hover:bg-nature-green hover:text-white transition-all shadow-sm hover:shadow-md"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full bg-white/50 backdrop-blur-md border border-nature-green/20 text-nature-darkWood hover:bg-nature-green hover:text-white transition-all shadow-sm hover:shadow-md"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-12 pt-4 px-2 snap-x snap-mandatory hide-scrollbar scroll-smooth items-start"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="w-[85vw] sm:w-[350px] md:w-[400px] h-auto snap-center shrink-0 bg-white/40 backdrop-blur-2xl rounded-3xl p-7 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/50 hover:border-white/80 hover:shadow-[0_12px_40px_0_rgba(143,151,121,0.2)] transition-all flex flex-col group relative overflow-hidden"
            >
              {/* Soft glow behind the card content */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-nature-green/20 rounded-full blur-3xl z-0 pointer-events-none group-hover:bg-nature-green/40 transition-colors duration-500"></div>
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-nature-brown/20 rounded-full blur-3xl z-0 pointer-events-none group-hover:bg-nature-brown/40 transition-colors duration-500"></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-2xl font-bold text-nature-darkWood group-hover:text-nature-green transition-colors leading-tight">
                      {project.title}
                    </h4>
                    <Sparkles size={20} className="text-nature-brown/50 group-hover:text-nature-green/70 transition-colors shrink-0 mt-1" />
                  </div>
                  <p className="text-nature-darkWood/80 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h5 className="text-xs font-bold text-nature-brown uppercase tracking-wider mb-2">Key Features</h5>
                  <ul className="text-sm text-nature-darkWood/70 space-y-1.5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-nature-green/60 mt-1.5 shrink-0"></span>
                        <span className="line-clamp-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-semibold bg-white/60 backdrop-blur-md text-nature-darkWood border border-white/50 px-3 py-1.5 rounded-lg shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-nature-darkWood/10">
                  <a href={project.github} className="flex-1 flex justify-center items-center gap-2 text-sm font-bold text-nature-darkWood/80 hover:text-white transition-colors bg-white/50 hover:bg-nature-green px-4 py-2.5 rounded-xl backdrop-blur-sm border border-white/60 hover:border-nature-green shadow-sm">
                    <Github size={18} />
                    Code
                  </a>
                  <a href={project.live} className="flex-1 flex justify-center items-center gap-2 text-sm font-bold text-nature-darkWood/80 hover:text-white transition-colors bg-white/50 hover:bg-nature-green px-4 py-2.5 rounded-xl backdrop-blur-sm border border-white/60 hover:border-nature-green shadow-sm">
                    Demo
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
