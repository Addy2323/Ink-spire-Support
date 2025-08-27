import React from 'react';
import { Users, Target, Award, Zap, Heart, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your success is our priority. We build lasting relationships through exceptional service',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Dependable solutions and support you can trust for your business needs',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We deliver quality results that exceed expectations every time',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with our clients to achieve shared success',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Years of experience across multiple technology domains',
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Main About Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Ink Spire Support
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              <strong>Ink Spire Support</strong> is your trusted technology partner, offering innovative IT, branding, gaming, and digital services to empower individuals and businesses. Based in the heart of Morogoro, we combine local expertise with global technology standards to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is simple: <em>"Inspiring Technology, Empowering You"</em>. We believe that technology should be accessible, reliable, and transformative. Whether you're a small business looking to establish your digital presence or an individual seeking the latest gaming experiences, we're here to make it happen.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Ink Spire Support?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="text-xl font-semibold mb-3">🚀 Comprehensive Solutions</h4>
              <p className="text-cyan-100">From IT maintenance to custom gaming setups, we cover all your technology needs under one roof.</p>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-semibold mb-3">🏆 Local Expertise</h4>
              <p className="text-cyan-100">Based in Morogoro, we understand the local market and provide personalized service.</p>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-semibold mb-3">⚡ Fast Response</h4>
              <p className="text-cyan-100">Quick turnaround times and efficient service delivery for all your urgent needs.</p>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-semibold mb-3">💡 Innovation Focus</h4>
              <p className="text-cyan-100">We stay updated with the latest technology trends to provide modern solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;