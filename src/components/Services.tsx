import React from 'react';
import { 
  Palette, 
  Monitor, 
  Gamepad2, 
  Globe, 
  Wifi, 
  Film,
  Wrench,
  Shield,
  Camera,
  FileText,
  HardDrive,
  Smartphone
} from 'lucide-react';

interface ServicesProps {
  onBookService: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 'branding',
      title: 'Branding',
      description: 'Professional visual identity solutions',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      features: ['Logo Design', 'Flyers & Posters', 'Marketing Materials', 'Brand Guidelines']
    },
    {
      id: 'it-solutions',
      title: 'IT Solutions',
      description: 'Comprehensive technology maintenance and support',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      features: ['Software Maintenance', 'Hardware Maintenance', 'Data Backup & Recovery', 'Antivirus Installation']
    },
    {
      id: 'gaming',
      title: 'Gaming',
      description: 'Latest gaming experiences and entertainment',
      icon: Gamepad2,
      color: 'from-purple-500 to-indigo-500',
      features: ['EAFC 25', 'Need for Speed Rivals', 'Gaming Setup', 'Game Installation']
    },
    {
      id: 'digital-services',
      title: 'Digital & Public Services',
      description: 'Online applications and custom system development',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      features: ['TRC Ticket Booking', 'Online Applications', 'Website Building', 'Custom System Building']
    },
    {
      id: 'connectivity',
      title: 'Connectivity & Security',
      description: 'Internet services and security solutions',
      icon: Wifi,
      color: 'from-orange-500 to-amber-500',
      features: ['Internet Services', 'Camera Installation', 'Network Setup', 'Security Systems']
    },
    {
      id: 'entertainment',
      title: 'Entertainment',
      description: 'Movies and multimedia content',
      icon: Film,
      color: 'from-red-500 to-pink-500',
      features: ['Latest Movies', 'Movie Downloads', 'Entertainment Systems', 'Media Setup']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2306b6d4%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
              <Wrench className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to empower your digital journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col"
            >
              {/* Service Icon - Inside card now */}
              <div className="mb-6 self-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Service Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed h-12">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-gray-300 mb-8 flex-grow">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Book Service Button */}
              <button
                onClick={() => onBookService(service.id)}
                className={`w-full bg-gradient-to-r ${service.color} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              We specialize in creating tailored technology solutions for your unique needs
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;