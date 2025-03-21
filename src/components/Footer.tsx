
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-leaf-900 text-white/80 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 pb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-leaf-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0 -6 0" />
                  <path d="M12 2v1" />
                  <path d="M12 21v1" />
                  <path d="M4.6 4.6l.7 .7" />
                  <path d="M18.7 18.7l.7 .7" />
                  <path d="M2 12h1" />
                  <path d="M21 12h1" />
                  <path d="M4.6 19.4l.7 -.7" />
                  <path d="M18.7 5.3l.7 -.7" />
                </svg>
              </div>
              <span className="text-xl font-medium text-white">GreenAward</span>
            </div>
            <p className="mb-6 text-white/60 leading-relaxed">
              Dedicated to reforestation and recognizing environmental champions worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Community Forests</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Urban Reforestation</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Ecosystem Restoration</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Corporate Partnerships</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Awards</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Environmental Champion</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Community Impact</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Innovation Excellence</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Lifetime Achievement</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/60">123 Green Street</li>
              <li className="text-white/60">Forestville, EC 98765</li>
              <li><a href="mailto:info@greenaward.org" className="text-white/60 hover:text-white transition-colors">info@greenaward.org</a></li>
              <li><a href="tel:+11234567890" className="text-white/60 hover:text-white transition-colors">+1 (123) 456-7890</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {year} GreenAward NGO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
