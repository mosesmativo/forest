
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeDo from '@/components/WhatWeDo';
import MeetTheTeam from '@/components/MeetTheTeam';
import MeetTheBoard from '@/components/MeetTheBoard';
import VideoHighlight from '@/components/VideoHighlight';
import OurPartners from '@/components/OurPartners';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <AboutHero />
      
      <WhoWeAre />
      
      <WhatWeDo />
      
      <VideoHighlight />
      
      <MeetTheTeam />
      
      <MeetTheBoard />
      
      <OurPartners />
      
      <Footer />
    </div>
  );
};

export default AboutUs;
