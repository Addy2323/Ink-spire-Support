import React, { useEffect, useState } from 'react';
import { ArrowDown, Zap, Code, Cpu } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2306b6d4%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Tech Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Tech Icons Floating */}
        {[Code, Cpu, Zap].map((Icon, i) => (
          <div
            key={i}
            className="absolute animate-bounce opacity-10"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          >
            <Icon className="w-8 h-8 text-cyan-400" />
          </div>
        ))}
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              Technology Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight h-40 md:h-48">
            <TypeAnimation
              sequence={[
                'Inspiring Technology,',
                1000,
                'Empowering You',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent"
              repeat={Infinity}
            />
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted technology partner offering innovative IT, branding, gaming, and digital services to empower individuals and businesses in Morogoro and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('services')}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border-2 border-cyan-400/50 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:border-cyan-400">
              Contact Us
            </button>
          </div>
          
          {/* Service Highlights */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span>IT Solutions</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Gaming</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span>Digital Services</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Branding</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-cyan-400/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;