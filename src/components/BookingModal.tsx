import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  color: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: Service;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedService }) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: selectedService?.id || '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', bookingData);
  };

  const resetAndClose = () => {
    setStep(1);
    setBookingData({
      service: '',
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  const selectedServiceData = services.find(s => s.id === bookingData.service);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={resetAndClose}></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Book Your Service</h2>
            <button
              onClick={resetAndClose}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4 flex items-center space-x-2">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  step >= stepNum ? 'bg-white text-blue-600' : 'bg-white/20 text-white/60'
                }`}>
                  {step > stepNum ? <CheckCircle size={16} /> : stepNum}
                </div>
                {stepNum < 4 && (
                  <div className={`w-8 h-0.5 transition-all duration-300 ${
                    step > stepNum ? 'bg-white' : 'bg-white/20'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Select a Service</h3>
              <div className="grid gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      bookingData.service === service.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setBookingData({ ...bookingData, service: service.id })}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{service.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-blue-600 font-medium">{service.price}</span>
                          <span className="text-gray-500 text-sm">{service.duration}</span>
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                        bookingData.service === service.id
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {bookingData.service === service.id && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={!bookingData.service}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">Schedule Your Consultation</h3>
                <p className="text-gray-600 mt-2">Choose your preferred date and time</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Select Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Select Time
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setBookingData({ ...bookingData, time })}
                        className={`py-2 px-3 text-sm rounded-lg border transition-all duration-200 ${
                          bookingData.time === time
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-300"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!bookingData.date || !bookingData.time}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Information */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">Your Information</h3>
                <p className="text-gray-600 mt-2">Tell us about yourself and your project</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={bookingData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-300"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  Book Consultation
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                <p className="text-gray-600">
                  Thank you for choosing LUXE. We'll send you a confirmation email shortly.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-left">
                <h4 className="font-semibold text-gray-900 mb-4">Booking Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium">{selectedServiceData?.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{bookingData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium">{bookingData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{selectedServiceData?.duration}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;