import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Shield,
  Users,
  Award,
  Package,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "../pages/Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Premium Tiles & Stones for",
      bold: "Global Projects",
      subtitle:
        "Supplying world-class granite, marble, tiles, and natural stones crafted with precision.",
      image: "/Images/banner.jpeg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length),
      7000
    );
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Global Exports",
      description: "Delivering high-quality natural stones worldwide.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every product undergoes strict inspection and testing.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Skilled professionals manage production & logistics efficiently.",
    },
    {
      icon: Award,
      title: "Trusted Brand",
      description:
        "Recognized as a leading exporter of natural stones in India.",
    },
  ];

  const products = [
    {
      name: "Limestone Slabs & Tiles",
      description: [
        "Kadappa Black & Kota Limestone available",
        "Machine-cut, export-grade quality",
        "Perfect for flooring & wall applications",
        "Highly durable natural stone",
      ],
      image: "/Images/lime.webp",
    },
    {
      name: "Natural Pebble Stones",
      description: [
        "Chocolate, river & white pebbles",
        "Best for landscaping & garden design",
        "Smooth natural finish",
        "Suitable for pathways & decor",
      ],
      image: "/Images/natural.webp",
    },
    {
      name: "Wall Cladding Stones",
      description: [
        "Basalt & granite cladding options",
        "Ideal for exterior elevations",
        "Weather-resistant natural material",
        "Elegant & modern wall designs",
      ],
      image: "/Images/wall.webp",
    },
    {
      name: "Marble Mosaic Chips",
      description: [
        "Premium milk-white marble chips",
        "Perfect for terrazzo flooring",
        "Ideal for landscape decoration",
        "Uniform size & export quality",
      ],
      image: "/Images/marble.webp",
    },
    {
      name: "Cobble Stones",
      description: [
        "Granite cobbles & tumbled finish",
        "Durable for pathways & driveways",
        "Weather-proof natural stone",
        "Available in multiple colors",
      ],
      image: "/Images/cobble.webp",
    },
    {
      name: "Pebble Stones (Tumbled)",
      description: [
        "Smooth tumbled natural pebbles",
        "Used for gardens & aquariums",
        "Ideal for decorative flooring",
        "Premium export-grade quality",
      ],
      image: "/Images/pebbe.webp",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "10K+", label: "Shipments Delivered", icon: Package },
    { number: "15+", label: "Years Experience", icon: Award },
  ];

  const testimonials = [
    {
      name: "Manivannan K",
      location: "Chennai, Tamil Nadu",
      product: "Pebble Stone",
      text: "Good",
      rating: 5,
      date: "18-November-25",
    },
    {
      name: "Satyanath",
      location: "Thrissur, Kerala",
      product: "Granite Stone",
      text: "Response 👍",
      rating: 5,
      date: "24-September-25",
    },
    {
      name: "Praveen Kumar",
      location: "Dharmapuri, Tamil Nadu",
      product: "River Pebble",
      text: "Good",
      rating: 3,
      date: "07-September-25",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ---------------------------------- */}
      {/* 🔥 HERO SECTION WITH ANIMATIONS   */}
      {/* ---------------------------------- */}

      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center hero-image-fade"
          style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6 lg:px-24">
          <div className="max-w-3xl mx-auto">
            {/* Fade-Down Title */}
            <h1
              className="hero-title fade-down"
              style={{ animationDelay: "0.1s" }}
            >
              {heroSlides[currentSlide].title}
              <br />
              <span className="hero-bold">{heroSlides[currentSlide].bold}</span>
            </h1>

            {/* Fade-Down Subtitle */}
            <p
              className="text-lg sm:text-xl text-gray-200 mt-5 fade-down"
              style={{ animationDelay: "0.35s" }}
            >
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------- */}
      {/*        WHO WE ARE SECTION          */}
      {/* ---------------------------------- */}

      <section className="py-20 bg-white px-6 lg:px-20 animate-fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <h3 className="text-sm tracking-widest text-orange-700 font-bold uppercase">
              Who We Are
            </h3>

            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
              India’s Premier Natural Stone Exporter
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Established in 2008, Bravos Exports trades, wholesales, and
              exports premium Natural Stones.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our skilled team ensures strict quality checks and timely
              delivery.
            </p>

            <div className="flex gap-4 mt-4">
              <Link
                to="/about"
                className="px-8 py-3 bg-orange-600 text-white rounded-full font-semibold"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold"
              >
                Get Quote
              </Link>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl animate-fade-in">
            <img
              src="/Images/nameas.jpg"
              alt="About Bravos Exports"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------- */}
      {/* FEATURES */}
      {/* ---------------------------------- */}

      <section className="py-16 bg-gray-50 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-md animate-fade-up"
              >
                <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 bg-white px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow-md animate-fade-up"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover scale-hover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {product.name}
                </h3>

                <div className="text-gray-600 mb-4 space-y-1">
                  {product.description.map((d, j) => (
                    <p key={j} className="text-sm">
                      {d}
                    </p>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to="/products"
                    className="text-emerald-600 font-semibold"
                  >
                    Learn More
                  </Link>

                  <button className="px-3 py-2 bg-emerald-600 text-white rounded-full text-sm">
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="p-6 rounded-2xl animate-fade-up">
                <div className="w-16 h-16 bg-white/20 mx-auto rounded-2xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold">{stat.number}</h3>
                <p className="text-white/90 mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-gray-50 px-6 md:px-10">
        <div className="text-center mb-10 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Client Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md animate-fade-up"
            >
              <div className="flex mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-4">"{t.text}"</p>

              <div className="border-t pt-3">
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.location}</p>
                <p className="text-sm text-gray-700">
                  Product: <span className="font-medium">{t.product}</span>
                </p>
                <p className="text-xs text-gray-400 mt-1">Date: {t.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
