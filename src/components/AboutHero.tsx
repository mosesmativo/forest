
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Award } from 'lucide-react';

const AboutHero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      className="pt-32 pb-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero/forest-canopy.jpg" 
          alt="Kenya Forest Canopy" 
          className={cn(
            "w-full h-full object-cover transition-all duration-2000 ease-apple filter",
            inView ? "opacity-20 scale-100 blur-0" : "opacity-0 scale-110 blur-xl"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-leaf-900/70 via-leaf-800/60 to-background"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={cn(
            "inline-flex items-center justify-center w-16 h-16 rounded-full bg-leaf-100 text-leaf-600 mb-8 transition-all duration-500 ease-apple",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}>
            <Award className="h-8 w-8" />
          </div>
          
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-medium mb-6 transition-all duration-700 ease-apple text-white",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            The Africa Champions of Tree Awards (ACT Awards)
          </h1>
          
          <p className={cn(
            "text-xl text-white/90 leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-100 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Recognizing Kenya's tree-growing heroes and driving real action toward a greener future
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
