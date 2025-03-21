import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Heart, Sprout, Users, Award, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import JoinMovement from "./JoinMovement";
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Contact from "@/assets/contact-us.png";

const GetInvolved: React.FC = () => {
   const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });

   const [expanded, setExpanded] = React.useState(false);

   const options = [
      {
         icon: <Award className="h-6 w-6" />,
         title: "Nominate a Champion",
         description:
            "Recognize those making a difference in reforestation and environmental conservation.",
         content: (
            <div className="mt-4 space-y-3 text-foreground/70">
               <p>
                  Know someone who's a true tree hero? Nominate them for the
                  Africa Tree Champion Awards!
               </p>
               <h4 className="font-medium text-foreground">
                  Eligibility Criteria:
               </h4>
               <ul className="list-disc pl-5 space-y-1">
                  <li>
                     Must have led or significantly contributed to a
                     reforestation project
                  </li>
                  <li>
                     Project must have demonstrated positive environmental
                     impact
                  </li>
                  <li>Must be active in Kenya or an African country</li>
                  <li>
                     Individuals, communities, or organizations are eligible
                  </li>
               </ul>
               <Link to="#nomination-form" className="inline-block mt-3">
                  <Button
                     variant="outline"
                     className="border-leaf-200 text-leaf-700 hover:bg-leaf-50">
                     Nominate a Champion
                  </Button>
               </Link>
            </div>
         ),
         buttonText: "Nominate Now",
         buttonClass:
            "bg-white border border-leaf-200 text-leaf-700 hover:bg-leaf-50",
         link: "#nomination-form",
      },
      {
         icon: <HandHeart className="h-6 w-6" />,
         title: "Become a Sponsor",
         description:
            "Support our mission through impactful sponsorship opportunities.",
         content: (
            <div className="mt-4 space-y-3 text-foreground/70">
               <p>
                  Partner with us to promote sustainability while achieving your
                  brand goals.
               </p>
               <h4 className="font-medium text-foreground">
                  Sponsorship Benefits:
               </h4>
               <ul className="list-disc pl-5 space-y-1">
                  <li>
                     Brand visibility across all ACT Awards platforms and events
                  </li>
                  <li>Alignment with sustainability and conservation goals</li>
                  <li>Networking opportunities with environmental leaders</li>
                  <li>Media exposure and recognition</li>
               </ul>

               <h4 className="font-medium text-foreground mt-4">
                  Sponsorship Packages:
               </h4>
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                  <div className="border border-leaf-100 rounded p-3 bg-leaf-50">
                     <span className="font-medium text-leaf-800">Gold</span>
                     <p className="text-sm">
                        Premium recognition and maximum exposure
                     </p>
                  </div>
                  <div className="border border-leaf-100 rounded p-3 bg-leaf-50">
                     <span className="font-medium text-leaf-800">Silver</span>
                     <p className="text-sm">
                        Enhanced visibility and special mentions
                     </p>
                  </div>
                  <div className="border border-leaf-100 rounded p-3 bg-leaf-50">
                     <span className="font-medium text-leaf-800">Bronze</span>
                     <p className="text-sm">
                        Standard recognition and basic benefits
                     </p>
                  </div>
               </div>

               <Link to="/become-partner" className="inline-block mt-3">
                  <Button
                     variant="outline"
                     className="border-leaf-200 text-leaf-700 hover:bg-leaf-50">
                     Become a Sponsor
                  </Button>
               </Link>
            </div>
         ),
         buttonText: "Partner With Us",
         buttonClass:
            "bg-white border border-leaf-200 text-leaf-700 hover:bg-leaf-50",
         link: "/become-partner",
      },
      {
         icon: <Users className="h-6 w-6" />,
         title: "Volunteer",
         description:
            "Lend your skills, time, and energy to help our organization grow.",
         content: (
            <div className="mt-4 space-y-3 text-foreground/70">
               <p>
                  Join our team of passionate volunteers making environmental
                  events successful!
               </p>
               <h4 className="font-medium text-foreground">
                  Volunteer Opportunities:
               </h4>
               <ul className="list-disc pl-5 space-y-1">
                  <li>Event support and coordination</li>
                  <li>Media and communications</li>
                  <li>Logistics and planning</li>
                  <li>Community outreach</li>
               </ul>
               <Link to="#volunteer-form" className="inline-block mt-3">
                  <Button
                     variant="outline"
                     className="border-leaf-200 text-leaf-700 hover:bg-leaf-50">
                     Register as Volunteer
                  </Button>
               </Link>
            </div>
         ),
         buttonText: "Join Our Team",
         buttonClass:
            "bg-white border border-leaf-200 text-leaf-700 hover:bg-leaf-50",
         link: "#volunteer-form",
      },
      {
         icon: <Heart className="h-6 w-6" />,
         title: "Donate",
         description:
            "Your financial support powers our mission and helps us reach more communities.",
         content: (
            <div className="mt-4 space-y-3 text-foreground/70">
               <p className="mt-2 italic">
                  Ever wanted to be a hero without needing a cape (or an
                  uncomfortable spandex suit)?
               </p>

               <p>
                  By donating to the Africa Tree Champion Awards, you can save
                  the planet from your couch. Your donations will fuel the green
                  movement by helping us celebrate and empower the eco-warriors
                  who are planting trees, protecting forests, and making our
                  planet a better place—one leaf at a time.
               </p>

               <div className="bg-leaf-50 p-4 rounded-md border border-leaf-100 mt-4">
                  <h4 className="font-medium text-foreground">
                     Why Donate to the ACT Awards?
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                     <li>
                        <strong>Spread the green vibes:</strong> The ACT Awards
                        shine a spotlight on amazing environmental work,
                        inspiring communities to get involved and take action.
                        It's like a ripple effect, only greener!
                     </li>
                     <li>
                        <strong>Support real impact:</strong> Your support means
                        more trees, healthier ecosystems, and stronger
                        communities. You might not be able to plant a forest
                        today, but your donation can help someone else do it!
                     </li>
                     <li>
                        <strong>Get recognition:</strong> We'll shout your
                        support from the treetops (and on our platforms). Your
                        generosity will be seen, celebrated, and admired.
                     </li>
                     <li>
                        <strong>Leave a lasting legacy:</strong> Trees live for
                        generations—just like the impact of your gift. You'll be
                        part of something that lasts.
                     </li>
                     <li>
                        <strong>Feel good:</strong> Donating isn't just great
                        for the earth, it will boost your feel-good factor while
                        fixing your karma. Who doesn't love a little extra good
                        energy?
                     </li>
                  </ul>
               </div>

               <p className="font-medium mt-3">
                  Ready to help us root for our planet's heroes? Join us!
               </p>

               <Link to="/donate" className="inline-block mt-3">
                  <Button className="bg-leaf-500 hover:bg-leaf-600 text-white">
                     Donate Now
                  </Button>
               </Link>
            </div>
         ),
         buttonText: "Support Our Cause",
         buttonClass: "bg-leaf-500 hover:bg-leaf-600 text-white",
         link: "/donate",
      },
   ];

   return (
      <section
         id="get-involved"
         className="section-padding bg-gradient-to-b from-white to-leaf-50"
         ref={ref}>
         <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
               <div
                  className={cn(
                     "inline-flex items-center justify-center w-12 h-12 rounded-full bg-leaf-100 text-leaf-500 mb-6 transition-all duration-500 ease-apple",
                     inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  )}>
                  <Sprout className="h-6 w-6" />
               </div>

               <h2
                  className={cn(
                     "text-3xl sm:text-4xl font-medium mb-6 transition-all duration-700 ease-apple",
                     inView ? "opacity-100" : "opacity-0 translate-y-4"
                  )}>
                  Get Involved
               </h2>

               <p
                  className={cn(
                     "text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-100 ease-apple",
                     inView ? "opacity-100" : "opacity-0 translate-y-4"
                  )}>
                  There are many ways to contribute to our mission. Whether you
                  donate, volunteer, or participate in our events, your
                  involvement makes a real difference.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               {options.map((option, index) => (
                  <div
                     key={index}
                     className={cn(
                        "bg-white rounded-lg shadow-sm transition-all duration-700 ease-apple hover:shadow-md",
                        inView
                           ? "opacity-100 translate-y-0"
                           : "opacity-0 translate-y-8"
                     )}
                     style={{
                        transitionDelay: inView
                           ? `${index * 100 + 200}ms`
                           : "0ms",
                     }}>
                     <Collapsible
                        open={expanded}
                        onOpenChange={setExpanded}
                        className="w-full">
                        <div className="p-8">
                           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-leaf-100 text-leaf-600 mb-6">
                              {option.icon}
                           </div>

                           <h3 className="text-xl font-medium mb-3">
                              {option.title}
                           </h3>

                           <p className="text-foreground/70 mb-6 leading-relaxed">
                              {option.description}
                           </p>

                           <CollapsibleTrigger asChild>
                              <Button
                                 variant="ghost"
                                 size="sm"
                                 className="text-leaf-600 hover:text-leaf-700 hover:bg-leaf-50 p-0 h-auto"
                                 onClick={() => setExpanded(!expanded)}>
                                 Learn more
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-4 w-4 ml-1 transition-transform ${
                                       expanded ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth={2}
                                       d="M19 9l-7 7-7-7"
                                    />
                                 </svg>
                              </Button>
                           </CollapsibleTrigger>

                           <CollapsibleContent>
                              {option.content}
                           </CollapsibleContent>
                        </div>
                     </Collapsible>

                     <div className="px-8 pb-8 pt-0">
                        <Link
                           to={option.link}
                           className={cn(
                              "block w-full py-3 rounded-md text-center transition-colors duration-200 font-medium",
                              option.buttonClass
                           )}>
                           {option.buttonText}
                        </Link>
                     </div>
                  </div>
               ))}
            </div>

            {/* Donation Highlight Section */}
            <div
               className={cn(
                  "mt-20 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700 ease-apple",
                  inView ? "opacity-100" : "opacity-0"
               )}>
               <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                     <img
                        src={Contact}
                        alt="Tree planting volunteers"
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-6 text-white">
                           <h3 className="text-xl font-medium">
                              Making a Difference Together
                           </h3>
                           <p className="text-white/80">
                              Every contribution counts
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="p-8">
                     <h3 className="text-2xl font-medium mb-4">
                        Why Donate to the Africa Tree Champion Awards?
                     </h3>
                     <p className="text-foreground/70 mb-6">
                        Ever wanted to be a hero without needing a cape? By
                        donating to the ACT Awards, you can save the planet from
                        your couch. Your donations fuel the green movement by
                        helping us celebrate those who are planting trees and
                        protecting forests.
                     </p>
                     <p className="text-foreground/70 mb-6">
                        Trees live for generations—just like the impact of your
                        gift. You'll be part of something that lasts, and that's
                        pretty cool.
                     </p>
                     <Link to="/donate">
                        <Button className="bg-leaf-500 hover:bg-leaf-600 text-white">
                           Donate Now
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>

         {/* Include the JoinMovement component for additional ways to get involved */}
         <JoinMovement />
      </section>
   );
};

export default GetInvolved;
