
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Trees, TreeDeciduous, TreePine } from 'lucide-react';

const Programs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const programs = [
    {
      icon: <TreeDeciduous className="h-6 w-6" />,
      title: "Community Forests",
      description: "We work with local communities to establish sustainable forests that provide both environmental and economic benefits.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=800",
    },
    {
      icon: <TreePine className="h-6 w-6" />,
      title: "Urban Reforestation",
      description: "Bringing trees back to cities improves air quality, reduces urban heat, and creates green spaces for everyone.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=800",
    },
    {
      icon: <Trees className="h-6 w-6" />,
      title: "Ecosystem Restoration",
      description: "We restore degraded lands and rebuild wildlife habitats through strategic tree planting and conservation efforts.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800",
    },
  ];

  return (
    <section id="programs" className="section-padding bg-leaf-50" ref={ref}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={cn(
            "inline-flex items-center justify-center w-12 h-12 rounded-full bg-leaf-100 text-leaf-500 mb-6 transition-all duration-500 ease-apple",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}>
            <TreePine className="h-6 w-6" />
          </div>
          
          <h2 className={cn(
            "text-3xl sm:text-4xl font-medium mb-6 transition-all duration-700 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Our Programs
          </h2>
          
          <p className={cn(
            "text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-100 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Through our diverse range of initiatives, we're tackling deforestation and environmental degradation from multiple angles.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-700 ease-apple group hover:shadow-md",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" 
              )}
              style={{ 
                transitionDelay: inView ? `${index * 100 + 200}ms` : '0ms',
              }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-leaf-100 text-leaf-700">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-medium">{program.title}</h3>
                </div>
                
                <p className="text-foreground/70 mb-4">
                  {program.description}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-leaf-600 hover:text-leaf-700 transition-colors font-medium"
                >
                  Learn more
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
