
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Video } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const VideoHighlight: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="video-highlight" className="section-padding bg-white" ref={ref}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={cn(
            "inline-flex items-center justify-center w-12 h-12 rounded-full bg-leaf-100 text-leaf-500 mb-6 transition-all duration-500 ease-apple",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}>
            <Video className="h-6 w-6" />
          </div>
          
          <h2 className={cn(
            "text-3xl sm:text-4xl font-medium mb-6 transition-all duration-700 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Our Impact in Action
          </h2>
          
          <p className={cn(
            "text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-100 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            See how the ACT Awards are transforming Kenya's landscape and inspiring a new generation of environmental champions.
          </p>
        </div>
        
        <div className={cn(
          "max-w-4xl mx-auto rounded-xl overflow-hidden shadow-elegant transition-all duration-1000 ease-apple",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <AspectRatio ratio={16/9}>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dE-x1QQ5rVU" 
              title="ACT Awards Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlight;
