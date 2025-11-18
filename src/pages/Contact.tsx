import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
      link: 'tel:+919876543210',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@bravosexports.co.in', 'sales@bravosexports.co.in'],
      link: 'mailto:info@bravosexports.co.in',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Export Street', 'Business District, Mumbai 400001', 'Maharashtra, India'],
      link: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'],
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6 animate-fadeInDown">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '200ms' }}>
              Have a question or want to discuss export opportunities? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mb-6"></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours. We're here to help with all your export needs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 outline-none"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-lg text-emerald-700 animate-fadeIn">
                    <p className="font-semibold">Thank you for your message!</p>
                    <p className="text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-8 animate-slideInRight">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571782103!2d72.71637344407996!3d19.082502004035935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="transform group-hover:scale-110 transition-transform duration-700"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              <div className="p-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Fast response time within 24 hours',
                    'Experienced export consultants',
                    'Competitive pricing',
                    'Quality assured products',
                    'Global shipping network',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 animate-fadeInRight"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-white rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <p className="text-gray-600 mb-6">Stay connected for updates and news</p>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: '#', delay: 0 },
                    { icon: Twitter, href: '#', delay: 100 },
                    { icon: Linkedin, href: '#', delay: 200 },
                    { icon: Instagram, href: '#', delay: 300 },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 animate-fadeInUp"
                      style={{ animationDelay: `${social.delay}ms` }}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fadeIn">
              Alternative Contact Methods
            </h2>
            <p className="text-gray-600 mb-8 animate-fadeIn" style={{ animationDelay: '200ms' }}>
              Choose the method that works best for you
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919876543210"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 animate-fadeInUp"
                style={{ animationDelay: '300ms' }}
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:info@bravosexports.co.in"
                className="px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 animate-fadeInUp"
                style={{ animationDelay: '400ms' }}
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
