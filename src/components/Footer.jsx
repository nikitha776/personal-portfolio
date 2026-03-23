import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-nature-darkWood text-nature-cream py-8 px-6 md:px-12 text-center relative z-10 sm:ml-20 md:ml-32">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold tracking-tighter text-nature-green mb-2">
          VN.
        </h2>
        <p className="text-nature-cream/80 text-sm mb-6">
          Vissamsetty Lakshmi Nikitha &copy; {new Date().getFullYear()}
        </p>
        <p className="text-nature-cream/60 text-xs">
          Built with React, Tailwind CSS, and Framer Motion. Designed with passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
