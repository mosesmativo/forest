
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Trees } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const MeetTheBoard: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const board = [
    {
      name: "Prof. Wangari Maathai",
      role: "Chairperson",
      bio: "Distinguished environmental activist and Nobel Peace Prize laureate with decades of experience in conservation.",
      initials: "WM",
      photo: "/board/board-member-1.jpg"
    },
    {
      name: "Dr. John Kimani",
      role: "Vice Chairperson",
      bio: "Leading environmental scientist specializing in forest ecology and sustainable landscape management.",
      initials: "JK",
      photo: "/board/board-member-2.jpg"
    },
    {
      name: "Hon. Elizabeth Wathuti",
      role: "Board Member",
      bio: "Prominent climate activist and founder of the Green Generation Initiative driving youth engagement.",
      initials: "EW",
      photo: "/board/board-member-3.jpg"
    },
    {
      name: "Mr. Robert Nganga",
      role: "Board Member",
      bio: "Seasoned business leader bringing corporate governance expertise to environmental initiatives.",
      initials: "RN",
      photo: "/board/board-member-4.jpg"
    }
  ];

  const avatarColors = [
    "bg-leaf-200 text-leaf-800",
    "bg-sky-200 text-sky-800",
    "bg-earth-200 text-earth-800"
  ];

  return (
    <section id="meet-the-board" className="section-padding bg-leaf-50" ref={ref}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={cn(
            "inline-flex items-center justify-center w-12 h-12 rounded-full bg-leaf-100 text-leaf-500 mb-6 transition-all duration-500 ease-apple",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}>
            <Trees className="h-6 w-6" />
          </div>
          
          <h2 className={cn(
            "text-3xl sm:text-4xl font-medium mb-6 transition-all duration-700 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Our Canopy of Leaders
          </h2>
          
          <p className={cn(
            "text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-100 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            The Treehouse Council guiding the ACT Awards with wisdom and vision to ensure Kenya reaches 
            its ambitious reforestation goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {board.map((person, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white p-8 rounded-lg border border-border shadow-sm transition-all duration-700 ease-apple hover:shadow-md hover:border-leaf-200 flex items-start space-x-6",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ 
                transitionDelay: inView ? `${index * 100 + 200}ms` : '0ms',
              }}
            >
              <Avatar className={cn("h-16 w-16", avatarColors[index % avatarColors.length])}>
                <AvatarImage src={person.photo} alt={person.name} />
                <AvatarFallback className="text-lg">{person.initials}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-medium mb-1">{person.name}</h3>
                <p className="text-leaf-600 font-medium mb-3">{person.role}</p>
                <p className="text-foreground/80 leading-relaxed">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheBoard;
