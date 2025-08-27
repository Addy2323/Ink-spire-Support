import { useState } from "react";
import { 
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  ArrowLeft
} from "lucide-react";

const services = [
  "Business Consulting",
  "Digital Marketing", 
  "Web Development",
  "Brand Strategy",
  "Financial Planning",
  "Market Research"
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

interface BookingProps {
  onBack: () => void;
}

const Booking = ({ onBack }: BookingProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message as a professional card
    const whatsappMessage = 
`╔═══════════════════════════════╗
║  🚀 INK SPIRE SUPPORT         ║
║  "Inspiring Technology,       ║
║   Empowering You"             ║
╚═══════════════════════════════╝

🎯 **BOOKING REQUEST**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 **CLIENT INFORMATION**
├─ 📝 Name: ${formData.name}
├─ 📧 Email: ${formData.email}  
└─ 📱 Phone: ${formData.phone}

🛠️ **SERVICE DETAILS**
├─ 🎯 Service: ${formData.service}
├─ 📅 Date: ${formData.date}
└─ ⏰ Time: ${formData.time}

💬 **ADDITIONAL MESSAGE**
${formData.message || 'No additional message provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏢 **CONTACT INFORMATION**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email: info@inkspire.co.tz
📱 WhatsApp: +255738644881
☎️ Phone: 0738644881 / 0620691036
📍 Location: Boma Road, Morogoro
🕒 Hours: Mon-Sat 8AM-8PM

🌟 Services: Branding | IT Solutions | Gaming
           Digital Services | Connectivity | Entertainment`;
    
    const whatsappNumber = "+255738644881";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };
  
  const isFormValid = formData.name && formData.email && formData.phone && formData.service && formData.date && formData.time;

  if (isSubmitted) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center py-24">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Booking Request Sent!
            </h3>
            
            <p className="text-gray-600 mb-6">
              Your booking request has been sent via WhatsApp. We'll get back to you shortly to confirm your appointment.
            </p>
            
            <button 
              onClick={onBack}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <button 
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">
              Schedule Consultation
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Book Your Free Consultation
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Schedule a personalized consultation 
            with our experts and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
              <MessageSquare className="w-6 h-6 text-blue-600" />
              Consultation Details
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-900 mb-2 block flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-600" />
                  Full Name *
                </label>
                <input 
                  type="text"
                  placeholder="Aggrey Aggrey"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-900 mb-2 block flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  Email Address *
                </label>
                <input 
                  type="email"
                  placeholder="aggrey@example.com or info@inkspire.co.tz"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-900 mb-2 block flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                Phone Number *
              </label>
              <input 
                type="tel"
                placeholder="+255738644881"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className="text-sm font-medium text-gray-900 mb-3 block">
                Select Service *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleInputChange('service', service)}
                    className={`p-3 rounded-lg border transition-all text-left hover:scale-105 ${
                      formData.service === service
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-blue-300 text-gray-700'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-900 mb-2 block flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  Preferred Date *
                </label>
                <input 
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-900 mb-2 block flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  Preferred Time *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => handleInputChange('time', time)}
                      className={`p-2 rounded text-sm transition-all hover:scale-105 ${
                        formData.time === time
                          ? 'bg-blue-600 text-white'
                          : 'border border-gray-300 hover:border-blue-300 text-gray-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Message */}
            <div>
              <label className="text-sm font-medium text-gray-900 mb-2 block">
                Additional Message
              </label>
              <textarea 
                placeholder="Tell us more about your project or specific requirements..."
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>
            
            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit"
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  isFormValid 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-purple-600 hover:to-blue-600 hover:scale-105 shadow-lg hover:shadow-xl' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!isFormValid}
              >
                Create Booking
                <MessageSquare className="w-5 h-5" />
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-3">
                * This will open WhatsApp with your booking details pre-filled
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
