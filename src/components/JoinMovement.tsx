
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Award, HandHeart, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const JoinMovement: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const ways = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Nominate a Tree Champion",
      description: "Know someone making a difference in reforestation? Nominate them for recognition.",
      link: "#",
      linkText: "Submit a Nomination"
    },
    {
      icon: <HandHeart className="h-6 w-6" />,
      title: "Become a Sponsor",
      description: "Support our mission by sponsoring ACT Awards events and initiatives.",
      link: "#",
      linkText: "Explore Sponsorship"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Volunteer",
      description: "Lend your skills and time to help grow the impact of the ACT Awards.",
      link: "#",
      linkText: "Join Our Team"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Spread the Word",
      description: "Share our mission with your network to help us reach more tree champions.",
      link: "#",
      linkText: "Share Now"
    }
  ];

  return (
    <section id="join-movement" className="section-padding bg-gradient-to-b from-white to-leaf-50" ref={ref}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={cn(
            "inline-flex items-center justify-center w-12 h-12 rounded-full bg-leaf-100 text-leaf-500 mb-6 transition-all duration-500 ease-apple",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}>
            <HandHeart className="h-6 w-6" />
          </div>
          
          <h2 className={cn(
            "text-3xl sm:text-4xl font-medium mb-6 transition-all duration-700 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            JOIN THE MOVEMENT
          </h2>
          
          <p className={cn(
            "text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-100 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            How to Get Involved! Nominate a tree champion, become a sponsor, or volunteer to support 
            Kenya's mission for a greener future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {ways.map((way, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-lg p-8 shadow-sm transition-all duration-700 ease-apple hover:shadow-md border border-leaf-100 hover:border-leaf-200",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" 
              )}
              style={{ 
                transitionDelay: inView ? `${index * 100 + 200}ms` : '0ms',
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-leaf-100 text-leaf-600 mb-6">
                {way.icon}
              </div>
              
              <h3 className="text-xl font-medium mb-3">{way.title}</h3>
              
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {way.description}
              </p>
              
              <Link 
                to={way.link}
                className="inline-flex items-center text-leaf-600 hover:text-leaf-700 font-medium"
              >
                {way.linkText}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className={cn(
          "mt-16 text-center transition-all duration-700 delay-400 ease-apple",
          inView ? "opacity-100" : "opacity-0"
        )}>
          <Link 
            to="/donate"
            className="inline-block px-8 py-4 bg-leaf-500 text-white rounded-md hover:bg-leaf-600 transition-colors duration-200 shadow-sm text-lg font-medium"
          >
            Support Our Cause
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinMovement;
