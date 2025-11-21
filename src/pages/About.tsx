import { Award, Target, Eye, Users, TrendingUp, Globe, CheckCircle, Shield } from 'lucide-react';
import names from '../../public/Images/dfsdf.jpeg';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on product quality and maintain the highest international standards',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building lasting relationships through exceptional service and reliability',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Constantly evolving our processes to deliver better solutions',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting businesses worldwide with seamless export services',
    },
  ];

  const milestones = [
    { year: '2008', event: 'Company Founded', description: 'Started operations with a vision to excel in exports' },
    { year: '2012', event: 'ISO Certified', description: 'Achieved ISO 9001:2015 certification for quality management' },
    { year: '2016', event: 'Global Expansion', description: 'Expanded operations to 30+ countries' },
    { year: '2020', event: 'Major Milestone', description: 'Reached 500+ satisfied clients worldwide' },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Director',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Amit Patel',
      role: 'Quality Manager',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sneha Reddy',
      role: 'Export Coordinator',
      image: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const certifications = [
    'ISO 9001:2015 Certified',
    'FSSAI Approved',
    'Export License Holder',
    'IEC Registered',
    'GST Compliant',
    'Quality Assured',
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
              <Award className="w-5 h-5" />
              <span className="font-semibold">About Bravo Exports</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              Excellence in Global Trade
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '200ms' }}>
              Your trusted partner for premium export services since 2008
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-3xl animate-float"></div>
                <img
                  src={names}
                  alt="About Us"
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-3xl animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            <div className="space-y-6 animate-slideInRight">
              <h2 className="text-4xl font-bold text-gray-900">
                Who We Are
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bravo Exports is a leading export company specializing in premium quality products across multiple categories. With over 15 years of experience, we have built a reputation for excellence in international trade.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to quality, reliability, and customer satisfaction has made us the preferred choice for businesses worldwide. We combine traditional values with modern technology to deliver exceptional export services.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { number: '15+', label: 'Years Experience' },
                  { number: '500+', label: 'Happy Clients' },
                  { number: '50+', label: 'Countries' },
                  { number: '10K+', label: 'Shipments' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slideInLeft">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed pl-20">
                  To be the most trusted export partner by consistently delivering premium quality products and exceptional service to our global clients.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed pl-20">
                  To become a global leader in exports, recognized for our commitment to quality, innovation, and sustainable business practices.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slideInRight">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{ animation: `fadeInUp 0.5s ease-out ${index * 100}ms both` }}
                >
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-4 rounded-full animate-expandWidth"></div>
            <p className="text-xl text-gray-600 animate-fadeIn" style={{ animationDelay: '200ms' }}>
              Key milestones in our growth story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 to-teal-600 transform -translate-x-1/2 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 animate-fadeInUp`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:order-2'}`}>
                    <div className="inline-block p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative flex-shrink-0 hidden lg:block">
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full animate-ping absolute"></div>
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full relative"></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-4 rounded-full animate-expandWidth"></div>
            <p className="text-xl text-gray-600 animate-fadeIn" style={{ animationDelay: '200ms' }}>
              The experts behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-emerald-300">{member.role}</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-emerald-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
              Certifications & Compliance
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-4 rounded-full animate-expandWidth"></div>
            <p className="text-xl text-gray-600 animate-fadeIn" style={{ animationDelay: '200ms' }}>
              Maintaining highest standards of quality and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 transform hover:rotate-12 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-900 font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
