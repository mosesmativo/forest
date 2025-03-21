
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AwardsContent from '@/components/AwardsContent';

const Awards = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AwardsContent />
      <Footer />
    </div>
  );
};

export default Awards;
