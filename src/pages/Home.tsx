import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Shield,
  Award,
  Users,
  Package,
  Clock,
  CheckCircle,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      title: 'Premium Quality Exports',
      subtitle: 'Delivering Excellence Worldwide',
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      title: 'Global Trade Solutions',
      subtitle: 'Your Trusted Export Partner',
      image: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      title: 'Quality You Can Trust',
      subtitle: 'Excellence in Every Shipment',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
  ];

  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 50+ countries with reliable export services',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Certified products meeting international quality standards',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Pricing',
      description: 'Best market rates with transparent pricing structure',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'On-time shipments with efficient logistics management',
    },
  ];

  const products = [
    {
      name: 'Agricultural Products',
      description: 'Fresh produce and grains sourced from premium farms',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Agriculture',
    },
    {
      name: 'Textiles & Fabrics',
      description: 'High-quality textiles and traditional fabrics',
      image: 'https://images.pexels.com/photos/3738386/pexels-photo-3738386.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Textiles',
    },
    {
      name: 'Spices & Herbs',
      description: 'Authentic spices with rich aroma and flavor',
      image: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Food',
    },
    {
      name: 'Handicrafts',
      description: 'Traditional handcrafted items and artifacts',
      image: 'https://images.pexels.com/photos/3094035/pexels-photo-3094035.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Crafts',
    },
    {
      name: 'Industrial Goods',
      description: 'Quality industrial products and machinery parts',
      image: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Industrial',
    },
    {
      name: 'Leather Products',
      description: 'Premium leather goods and accessories',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Fashion',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '10K+', label: 'Shipments Delivered', icon: Package },
    { number: '15+', label: 'Years Experience', icon: Award },
  ];

  const testimonials = [
    {
      name: 'John Smith',
      company: 'Global Trading Co.',
      text: 'Outstanding service and quality products. Bravo Exports has been our trusted partner for 5 years.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      company: 'Premium Imports Ltd',
      text: 'Reliable, professional, and always delivers on time. Highly recommend their services.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'Asia Pacific Trading',
      text: 'Excellent quality control and competitive pricing. A pleasure to work with.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1
                    className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
                      index === currentSlide
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: '200ms' }}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`text-xl md:text-2xl text-gray-200 mb-8 transition-all duration-1000 ${
                      index === currentSlide
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: '400ms' }}
                  >
                    {slide.subtitle}
                  </p>
                  <div
                    className={`flex flex-wrap gap-4 transition-all duration-1000 ${
                      index === currentSlide
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: '600ms' }}
                  >
                    <Link
                      to="/products"
                      className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold flex items-center space-x-2 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>View Products</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-3 bg-white'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white px-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white px-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
              Featured Products
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-4 rounded-full animate-expandWidth"></div>
            <p className="text-xl text-gray-600 animate-fadeIn" style={{ animationDelay: '200ms' }}>
              Discover our premium range of export quality products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-emerald-600 rounded-full text-sm font-semibold transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="flex items-center space-x-2 text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-transform duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white px-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
              Client Testimonials
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-4 rounded-full animate-expandWidth"></div>
            <p className="text-xl text-gray-600 animate-fadeIn" style={{ animationDelay: '200ms' }}>
              What our clients say about us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current transform group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeIn">
            Ready to Start Exporting?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '200ms' }}>
            Get in touch with us today and discover how we can help grow your business globally
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            <Link
              to="/contact"
              className="group px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="px-8 py-4 bg-transparent text-white rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
