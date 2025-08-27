import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = encodeURIComponent('Service Inquiry from ' + formData.name);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hello! I'm ${formData.name}.\n\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
    );
    
    // Open both email and WhatsApp
    window.open(`mailto:info@inkspire.co.tz?subject=${emailSubject}&body=${emailBody}`, '_blank');
    window.open(`https://wa.me/255738644881?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Show success message
    alert('Redirecting you to email and WhatsApp to send your message!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2306b6d4%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your technology experience? Get in touch with Ink Spire Support today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Located in the heart of Morogoro, we're here to provide exceptional technology solutions. Whether you need IT support, gaming setup, or digital services, our team is ready to help.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { 
                  icon: MapPin, 
                  title: 'Address', 
                  value: 'Boma Road, Morogoro', 
                  color: 'from-green-500 to-emerald-500',
                  clickable: false
                },
                { 
                  icon: Phone, 
                  title: 'Phone', 
                  value: '0738644881 / 0620691036', 
                  color: 'from-cyan-500 to-blue-500',
                  clickable: true,
                  action: () => window.open('https://wa.me/255738644881', '_blank')
                },
                { 
                  icon: Mail, 
                  title: 'Email', 
                  value: 'info@inkspire.co.tz', 
                  color: 'from-purple-500 to-pink-500',
                  clickable: true,
                  action: () => window.open('mailto:info@inkspire.co.tz', '_blank')
                },
                { 
                  icon: Clock, 
                  title: 'Hours', 
                  value: 'Mon - Sat: 8AM - 8PM', 
                  color: 'from-orange-500 to-amber-500',
                  clickable: false
                }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-center space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300 ${
                    item.clickable ? 'cursor-pointer' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={item.clickable ? item.action : undefined}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className={`text-gray-300 ${item.clickable ? 'hover:text-white transition-colors duration-300' : ''}`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Areas */}
            <div className="bg-cyan-600/20 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/20">
              <h4 className="text-white font-semibold mb-3">Service Areas</h4>
              <p className="text-cyan-100 text-sm">
                Primarily serving Morogoro and surrounding areas. Remote support available nationwide for digital services.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your technology needs..."
                  required
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;