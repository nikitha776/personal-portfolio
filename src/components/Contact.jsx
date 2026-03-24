import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Flag } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    
    // Create the mailto link with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:vlnikitha2006@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="inline-flex items-center gap-2 mb-3 bg-nature-green/10 px-4 py-1.5 rounded-full border border-nature-green/20">
            <Flag size={16} className="text-nature-green" />
            <h2 className="text-sm font-bold tracking-widest text-nature-green uppercase">Destination</h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-nature-darkWood">
            Let's Connect
          </h3>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="flex-1 space-y-8">
            <h4 className="text-2xl font-bold text-nature-darkWood mb-6">Reach the End of the Trail</h4>
            <p className="text-nature-darkWood/80 mb-8 leading-relaxed">
              You've reached the end of my current journey path! Whether you have a question, a project idea, or just want to say hi, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <a href="mailto:vlnikitha2006@gmail.com" className="flex items-center gap-4 group">
                <div className="bg-nature-cream p-4 rounded-full text-nature-green border border-nature-green/20 group-hover:bg-nature-green group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-semibold text-nature-darkWood">Email</h5>
                  <p className="text-nature-darkWood/70 group-hover:text-nature-green transition-colors">vlnikitha2006@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/nikitha-vissamsetty-61909627a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="bg-nature-cream p-4 rounded-full text-nature-green border border-nature-green/20 group-hover:bg-nature-green group-hover:text-white transition-colors">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h5 className="font-semibold text-nature-darkWood">LinkedIn</h5>
                  <p className="text-nature-darkWood/70 group-hover:text-nature-green transition-colors">Connect with me</p>
                </div>
              </a>

              <a href="https://github.com/nikitha776" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="bg-nature-cream p-4 rounded-full text-nature-green border border-nature-green/20 group-hover:bg-nature-green group-hover:text-white transition-colors">
                  <Github size={24} />
                </div>
                <div>
                  <h5 className="font-semibold text-nature-darkWood">GitHub</h5>
                  <p className="text-nature-darkWood/70 group-hover:text-nature-green transition-colors">View my repositories</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-md border border-nature-green/20"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-nature-darkWood/80 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-nature-green/20 focus:outline-none focus:ring-2 focus:ring-nature-green/40 focus:border-nature-green transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-nature-darkWood/80 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-nature-green/20 focus:outline-none focus:ring-2 focus:ring-nature-green/40 focus:border-nature-green transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-nature-darkWood/80 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-nature-green/20 focus:outline-none focus:ring-2 focus:ring-nature-green/40 focus:border-nature-green transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-nature-green text-white px-6 py-4 rounded-xl font-bold hover:bg-nature-green/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
