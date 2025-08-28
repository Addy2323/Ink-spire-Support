import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-cyan-500/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center p-1">
                <img src="/logo.png" alt="Ink Spire Support" className="h-full w-full rounded-full" />
              </div>
              <div className="text-3xl font-bold">
                <span style={{ color: '#0f5132' }}>INKSPIRE</span>
                <span style={{ color: '#0dcaf0' }} className="ml-2">SUPPORT</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-4">
              Your trusted technology partner in Morogoro. Inspiring Technology, Empowering You with innovative IT, branding, gaming, and digital services.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Boma Road, Morogoro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>0738644881 / 0620691036</span>
              </div>
            </div>
          </div>

          

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {['IT Solutions', 'Branding', 'Gaming', 'Digital Services', 'Connectivity', 'Entertainment'].map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Twitter, href: '#', label: 'Twitter' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-1">
                2025 &copy;All rights reserved.
              </p>
              <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
                Made with <Heart className="w-4 h-4 text-cyan-500 mx-1" /> by InkSpire Support developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;