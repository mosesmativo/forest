
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Globe, Users, HandHeart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhoWeAre: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: <Globe className="h-6 w-6 text-leaf-600" />,
      title: "Forest Coverage",
      description: "Kenya's forest cover was at 8.83% in 2021 with a bold target of 30% by 2032"
    },
    {
      icon: <Users className="h-6 w-6 text-leaf-600" />,
      title: "Dedicated Team",
      description: "Operated by a dedicated Committee of Management from the Kenya Forest Service"
    },
    {
      icon: <HandHeart className="h-6 w-6 text-leaf-600" />,
      title: "Tree Champions",
      description: "Recognizing visionaries, innovators, and communities working to restore forests"
    }
  ];

  return (
    <section id="who-we-are" className="section-padding bg-white" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={cn(
              "text-3xl sm:text-4xl font-medium mb-6 transition-all duration-700 ease-apple",
              inView ? "opacity-100" : "opacity-0 translate-y-4"
            )}>
              Who We Are
            </h2>
            
            <div className={cn(
              "space-y-6 prose-elegant transition-all duration-700 delay-100 ease-apple",
              inView ? "opacity-100" : "opacity-0 translate-y-4"
            )}>
              <p>
                The Africa Champions of Tree Awards (ACT Awards) shine a spotlight on Kenya's tree-growing heroes—visionaries, 
                innovators, and communities working to restore the nation's forests.
              </p>
              
              <p>
                With Kenya's forest cover at 8.83% in 2021 and a bold target of 30% by 2032, these awards aim to 
                recognise tree growing trailblazers and drive real action toward reforestation, climate resilience, 
                and a greener future for all.
              </p>
              
              <p>
                The ACT Awards are operated by a dedicated Committee of Management from the Kenya Forest Service 
                along with a passionate execution team.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-1 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className={cn(
                  "border-leaf-100 transition-all duration-700 ease-apple hover:border-leaf-200 hover:shadow-md",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ 
                  transitionDelay: inView ? `${index * 100 + 200}ms` : '0ms',
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-leaf-100 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
