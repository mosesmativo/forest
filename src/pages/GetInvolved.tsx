
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GetInvolvedContent from '@/components/GetInvolved';

const GetInvolved = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <GetInvolvedContent />
      
      <Footer />
    </div>
  );
};

export default GetInvolved;
