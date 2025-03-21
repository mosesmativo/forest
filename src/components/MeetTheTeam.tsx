
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const MeetTheTeam: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: "Sarah Nyawira",
      role: "Executive Director",
      bio: "Leading the ACT Awards with a passion for conservation and community engagement.",
      initials: "SN",
      photo: "/team/team-member-1.jpg"
    },
    {
      name: "James Omondi",
      role: "Program Manager",
      bio: "Overseeing the awards program and ensuring recognition for Kenya's tree champions.",
      initials: "JO",
      photo: "/team/team-member-2.jpg" 
    },
    {
      name: "Lucy Wairimu",
      role: "Community Outreach",
      bio: "Connecting with grassroots organizations and building partnerships across Kenya.",
      initials: "LW",
      photo: "/team/team-member-3.jpg"
    },
    {
      name: "Daniel Kipchoge",
      role: "Environmental Specialist",
      bio: "Bringing technical expertise to evaluate the impact of reforestation efforts.",
      initials: "DK",
      photo: "/team/team-member-4.jpg"
    },
    {
      name: "Grace Mwangi",
      role: "Communications Lead",
      bio: "Sharing stories of tree champions and raising awareness for the ACT Awards.",
      initials: "GM",
      photo: "/team/team-member-5.jpg"
    },
    {
      name: "Peter Kamau",
      role: "Operations Manager",
      bio: "Ensuring the smooth execution of all ACT Awards activities and events.",
      initials: "PK",
      photo: "/team/team-member-6.jpg"
    }
  ];

  const avatarColors = [
    "bg-leaf-100 text-leaf-800",
    "bg-sky-100 text-sky-800",
    "bg-earth-100 text-earth-800"
  ];

  return (
    <section id="meet-the-team" className="section-padding bg-white" ref={ref}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={cn(
            "inline-flex items-center justify-center w-12 h-12 rounded-full bg-leaf-100 text-leaf-500 mb-6 transition-all duration-500 ease-apple",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}>
            <Users className="h-6 w-6" />
          </div>
          
          <h2 className={cn(
            "text-3xl sm:text-4xl font-medium mb-6 transition-all duration-700 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Meet the Tree-mendous Team!
          </h2>
          
          <p className={cn(
            "text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-100 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Rooted in Purpose. Our dedicated team works passionately to recognize Kenya's tree champions 
            and drive the nation toward its ambitious reforestation goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((person, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white p-6 rounded-lg border border-border shadow-sm transition-all duration-700 ease-apple hover:shadow-md hover:border-leaf-200",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ 
                transitionDelay: inView ? `${index * 100 + 200}ms` : '0ms',
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className={cn("h-14 w-14", avatarColors[index % avatarColors.length])}>
                  <AvatarImage src={person.photo} alt={person.name} />
                  <AvatarFallback>{person.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-medium">{person.name}</h3>
                  <p className="text-foreground/70 font-medium">{person.role}</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
