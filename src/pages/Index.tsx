
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Mission from '../components/Mission';
import Programs from '../components/Programs';
import Awards from '../components/Awards';
import Impact from '../components/Impact';
import Footer from '../components/Footer';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <Programs />
      <Impact />
      <Awards />
      <Footer />
    </div>
  );
};

export default Index;
