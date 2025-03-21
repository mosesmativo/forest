
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
    
    // Preload the hero image
    const img = new Image();
    img.src = 'https://images.unsplash.com/photo-1426604966848-d7adac402bff';
    img.onload = () => {
      document.getElementById('hero-image')?.classList.remove('opacity-0');
      document.getElementById('hero-image')?.classList.add('opacity-100');
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Blur Loading Effect */}
      <div 
        id="hero-image"
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-out opacity-0"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2000)',
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent"></div>
      
      {/* Content */}
      <div className="relative container h-full flex flex-col justify-center items-start px-4 md:px-8 pt-16">
        <div className="max-w-2xl">
          <div 
            className={`inline-block px-4 py-1.5 mb-4 rounded-full bg-leaf-500/10 backdrop-blur-sm border border-leaf-500/20
            text-sm font-medium text-leaf-600 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Planting Trees, Growing Future
          </div>
          
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl font-medium leading-tight text-white drop-shadow-sm
            tracking-tight transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Let's make Earth<br />greener together
          </h1>
          
          <p 
            className={`mt-6 text-lg text-white/90 max-w-md leading-relaxed
            transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Join our mission to restore forests worldwide and combat climate change through community-driven tree planting initiatives.
          </p>
          
          <div 
            className={`mt-8 flex flex-col sm:flex-row gap-4
            transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <a 
              href="#get-involved" 
              className="px-6 py-3 bg-leaf-500 text-white rounded-md hover:bg-leaf-600 transition-colors duration-200 shadow-elegant flex items-center justify-center sm:justify-start"
            >
              Get Involved
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            
            <a 
              href="#mission" 
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-md
              hover:bg-white/20 transition-colors duration-200 flex items-center justify-center sm:justify-start"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
