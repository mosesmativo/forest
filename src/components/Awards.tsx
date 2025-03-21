
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Award, Globe, Star, Trophy } from 'lucide-react';

const Awards: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const awards = [
    {
      icon: <Trophy className="h-10 w-10 text-leaf-500" />,
      title: "Environmental Champion",
      description: "Recognizing individuals who have demonstrated exceptional leadership in environmental conservation and tree planting initiatives."
    },
    {
      icon: <Globe className="h-10 w-10 text-leaf-500" />,
      title: "Community Impact",
      description: "Celebrating organizations that have successfully implemented sustainable environmental projects with significant community benefits."
    },
    {
      icon: <Award className="h-10 w-10 text-leaf-500" />,
      title: "Innovation Excellence",
      description: "Honoring innovative solutions and technologies that advance reforestation and environmental protection efforts."
    },
    {
      icon: <Star className="h-10 w-10 text-leaf-500" />,
      title: "Lifetime Achievement",
      description: "Recognizing individuals with decades of dedication to environmental causes and tree conservation."
    }
  ];

  return (
    <section 
      id="awards" 
      className="section-padding bg-cover bg-center relative"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2000)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-leaf-900/80 backdrop-blur-sm"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={cn(
            "inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white mb-6 transition-all duration-500 ease-apple",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}>
            <Award className="h-7 w-7" />
          </div>
          
          <h2 className={cn(
            "text-3xl sm:text-4xl font-medium mb-6 text-white transition-all duration-700 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            The GreenAward Recognition Program
          </h2>
          
          <p className={cn(
            "text-lg text-white/80 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-100 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Celebrating exceptional contributions to environmental conservation and tree protection worldwide.
            Our prestigious awards recognize the tireless efforts of those making a difference.
          </p>
        </div>
        
        <div 
          className="grid md:grid-cols-2 gap-8"
          ref={ref}
        >
          {awards.map((award, index) => (
            <div 
              key={index}
              className={cn(
                "glass-morphism bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-700 ease-apple",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" 
              )}
              style={{ 
                transitionDelay: inView ? `${index * 100 + 200}ms` : '0ms',
              }}
            >
              <div className="flex items-start">
                <div className="mr-5 mt-1">
                  {award.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-3">{award.title}</h3>
                  <p className="text-white/70 leading-relaxed">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={cn(
          "mt-12 text-center transition-all duration-700 delay-500 ease-apple",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <a 
            href="#"
            className="inline-flex items-center text-white border border-white/30 px-6 py-3 rounded-full
            hover:bg-white/10 transition-colors duration-200"
          >
            View Past Recipients
          </a>
        </div>
      </div>
    </section>
  );
};

export default Awards;
