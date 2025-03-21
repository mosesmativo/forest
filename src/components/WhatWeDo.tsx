
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Award, Calendar, Users } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: <Award className="h-10 w-10 text-leaf-500" />,
      title: "Recognition Platform",
      description: "A first-of-its-kind awards platform recognizing individuals and groups driving Kenya's ambitious reforestation goals."
    },
    {
      icon: <Users className="h-10 w-10 text-leaf-500" />,
      title: "Tree Champions",
      description: "From bold tree growers to forest-saving innovators, we celebrate the heroes turning empty lands into lush forests."
    },
    {
      icon: <Calendar className="h-10 w-10 text-leaf-500" />,
      title: "Annual Ceremonies",
      description: "Annual ceremonies will highlight Kenya's top tree champions, with nominations opening soon."
    },
  ];

  return (
    <section id="what-we-do" className="section-padding bg-leaf-50" ref={ref}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-3xl sm:text-4xl font-medium mb-6 transition-all duration-700 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            What We Do
          </h2>
          
          <p className={cn(
            "text-lg text-foreground/80 leading-relaxed transition-all duration-700 delay-100 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Act today for a greener tomorrow. By honoring groundbreaking efforts, we're not just handing out 
            awards—we're planting the seeds of inspiration, rallying more tree champions, and driving Kenya 
            closer to its canopy-covered dream.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {highlights.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white p-8 rounded-lg border border-border shadow-sm transition-all duration-700 ease-apple hover:shadow-md hover:border-leaf-200",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ 
                transitionDelay: inView ? `${index * 100 + 200}ms` : '0ms',
              }}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className={cn(
          "mt-16 max-w-3xl mx-auto text-center transition-all duration-700 delay-300 ease-apple",
          inView ? "opacity-100" : "opacity-0 translate-y-4"
        )}>
          <p className="mb-8 text-lg">
            As Kenya shoots for an ambitious 15 Billion trees by 2032, these awards spotlight the trailblazers making it happen.
            Key dates and judging criteria will be announced on the ACT Awards platform.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="px-5 py-3 bg-white border border-leaf-200 text-leaf-700 rounded-md hover:bg-leaf-50 transition-colors duration-200">
              Learn More about ACT Awards
            </a>
            <a href="#" className="px-5 py-3 bg-white border border-leaf-200 text-leaf-700 rounded-md hover:bg-leaf-50 transition-colors duration-200">
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
