import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Booking from './components/Booking';

// Define the Service interface to match BookingModal
interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  color: string;
}

// Services data - should match the services in BookingModal
const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies',
    price: '$2,500+',
    duration: '2-4 weeks',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that provide exceptional user experiences',
    price: '$1,500+',
    duration: '1-2 weeks',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    description: 'Lightning-fast websites optimized for speed and user engagement',
    price: '$800+',
    duration: '3-5 days',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'security',
    title: 'Security Audit',
    description: 'Enterprise-grade security measures to protect your digital assets',
    price: '$1,200+',
    duration: '1 week',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Strategic optimization to improve your search engine rankings',
    price: '$600+',
    duration: '2-3 weeks',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Responsive designs that work perfectly on all devices and screen sizes',
    price: '$3,000+',
    duration: '3-6 weeks',
    color: 'from-red-500 to-pink-500'
  }
];

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [showBookingPage, setShowBookingPage] = useState(false);

  const handleBookService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setShowBookingPage(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedServiceId('');
  };

  const handleBackToHome = () => {
    setShowBookingPage(false);
    setSelectedServiceId('');
  };

  // Find the complete service object
  const selectedService = selectedServiceId ? services.find(service => service.id === selectedServiceId) : undefined;

  // Show booking page if user clicked Get Started
  if (showBookingPage) {
    return <Booking onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services onBookService={handleBookService} />
      <About />
      <Contact />
      <Footer />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        selectedService={selectedService}
      />
    </div>
  );
}

export default App;