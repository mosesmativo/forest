import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const OurPartners = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners & Sponsors</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We collaborate with government agencies, NGOs, and corporate partners to maximize our impact on forest conservation and restoration in Kenya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Kenya Forest Service */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="/partners/kenya-forest-service.png" 
              alt="Kenya Forest Service" 
              className="h-16 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Kenya Forest Service (KFS)</h3>
            <p className="text-gray-600 mb-3">
              KFS is the guardian of Kenya's forests, tasked with protecting, managing, and restoring them under the Forest Conservation and Management Act of 2016. From enforcing forest laws to running the Kenya Forestry College, KFS plays a crucial role in safeguarding Kenya's green spaces.
            </p>
            <p className="text-gray-600">
              By implementing conservation plans in key forests like Arabuko-Sokoke, Mau, and Karura, KFS is driving Kenya's commitment to the AFR100 initiative, which aims to restore 100 million hectares of degraded land across Africa by 2030.
            </p>
          </div>

          {/* BlueFocus */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">BlueFocus Africa</h3>
            <p className="text-gray-600 mb-3">
              BlueFocus Africa is a strategic communication and event management firm based in Nairobi, Kenya. Led by Managing Director Philip Wahome, the company specializes in media strategy, planning, and corporate reputation advisory services.
            </p>
            <p className="text-gray-600">
              While BlueFocus Africa's core services center on communication and event management, the firm has demonstrated a commitment to environmental sustainability through its involvement in initiatives like the ACT Awards.
            </p>
          </div>

          {/* Kenyan Government */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="/partners/ministry-environment.png" 
              alt="Kenyan Government" 
              className="h-16 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">The Kenyan Government</h3>
            <p className="text-gray-600">
              The government of Kenya is a committed signatory to the AFR100 initiative, a pan-African effort to restore 100 million hectares of degraded land by 2030. By ratifying AFR100, the Kenyan government has pledged to restore 5.1 million hectares, aligning with national programs like the 15 Billion Tree Campaign and the 30% tree cover target by 2032.
            </p>
          </div>
        </div>

        {/* Other Partners Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Other Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <img src="/partners/unep-logo.png" alt="UNEP" className="h-12 md:h-16 object-contain mb-2" />
              <span className="text-sm text-gray-600">UNEP</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/partners/wwf-logo.png" alt="WWF" className="h-12 md:h-16 object-contain mb-2" />
              <span className="text-sm text-gray-600">WWF</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="h-12 md:h-16 flex items-center justify-center mb-2">FAO</span>
              <span className="text-sm text-gray-600">FAO</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="h-12 md:h-16 flex items-center justify-center mb-2">Corporate Sponsors</span>
              <span className="text-sm text-gray-600">Various Organizations</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in Becoming a Partner?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Join our network of committed partners and help us achieve our mission of restoring Kenya's forests and fighting climate change.
          </p>
          <Link to="/become-partner">
            <Button variant="default" className="bg-leaf-500 hover:bg-leaf-600">
              Become a Partner
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
