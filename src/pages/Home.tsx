import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Shield, Users, Award } from "lucide-react";
import {
  ArrowRight,
  Package,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      title: "Premium Tiles & Stones for",
      bold: "Global Projects",
      subtitle:
        "Supplying world-class granite, marble, tiles, and natural stones crafted with precision for international standards.",
      image: "/Images/banner1.png",
    },
    {
      title: "Crafted with Excellence,",
      bold: "Delivered Worldwide",
      subtitle:
        "High-grade stones and tiles designed for architecture, interiors, and landscaping — shipped safely across the globe.",
      image: "/Images/banner2.png",
    },
  ];

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
        "Our skilled professionals manage production & logistics efficiently.",
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
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 transform transition-transform duration-1000"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
          </div>
        ))}

        {/* HERO CONTENT */}
        <div className="relative z-20 h-full flex items-center justify-center text-center px-6 lg:px-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.05] transform opacity-0 animate-fadeUp">
              {heroSlides[currentSlide].title}
              <span className="block font-semibold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 transform opacity-0 animate-fadeUp delay-200">
                {heroSlides[currentSlide].bold}
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-200 leading-relaxed opacity-0 animate-fadeUp delay-350">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 opacity-0 animate-fadeUp delay-500">
              <Link
                to="/products"
                className="px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-full shadow-md hover:bg-[#c7a030] transition transform hover:-translate-y-1"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 inline-block ml-2" />
              </Link>

              <Link
                to="/contact"
                className="px-8 py-3 bg-transparent border border-white/50 text-white rounded-full font-semibold backdrop-blur-md hover:bg-white hover:text-black transition transform hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* ARROWS */}
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? heroSlides.length - 1 : prev - 1
            )
          }
          aria-label="Previous slide"
          className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          aria-label="Next slide"
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide ? "bg-white scale-110" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-white px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6 animate-fadeUp">
            <h3 className="text-sm tracking-widest text-orange-700 font-bold uppercase">
              Who We Are
            </h3>
            <h2 className="text-3xl lg:text-4xl font-semi-bold text-gray-900 leading-snug ">
              India’s Premier Natural Stone Exporter
            </h2>

            <p className="text-gray-700 text-base leading-relaxed">
              Established in 2008, Bravos Exports trades, wholesales, and
              exports premium Natural Stones. Our products meet international
              quality standards and are crafted using state-of-the-art
              manufacturing processes.
            </p>

            <p className="text-gray-700 text-base leading-relaxed">
              A skilled team ensures strict quality checks and timely delivery,
              helping us build a loyal global clientele.
            </p>

            <div className="flex gap-4 mt-4">
              <Link
                to="/about"
                className="inline-block px-8 py-3 bg-orange-600 text-white rounded-full font-semibold shadow hover:bg-orange-500 transform hover:-translate-y-1 transition"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 border border-gray-200 text-gray-700 rounded-full font-semibold hover:shadow transition"
              >
                Get Quote
              </Link>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition">
            <img
              src="/Images/nameas.jpg"
              alt="About Bravos Exports"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-gray-50 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2"
                style={{ animationDelay: `${i * 100}ms` }}
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Products
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore our finest selection of premium stones crafted for luxury
            construction, architecture & interiors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <article
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition transform group"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 bg-white/70 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.name.split(" ")[0]}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {product.name}
                </h3>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                  {product.description.map((d, j) => (
                    <li key={j} className="text-sm">
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <Link
                    to="/products"
                    className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-2"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button className="px-3 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold hover:bg-emerald-700 transition">
                    Request Quote
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl transform transition hover:-translate-y-2"
                style={{ animationDelay: `${i * 100}ms` }}
              >
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
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Client Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2"
              style={{ animationDelay: `${i * 140}ms` }}
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

      {/* CONTACT CTA */}
      <section className="relative py-20 text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[0.55] saturate-[1.05] contrast-[1.05]"
        >
          <source src="/videos/6008078-uhd_4096_2160_24fps.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Exporting?
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Get in touch with us today and discover how we can help grow your
            business globally.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-emerald-600 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Contact Us
            </Link>
            <Link
              to="/products"
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* small custom keyframes (keeps Tailwind-first) */}
      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(16px) scale(.995); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-fadeUp {
            animation: fadeUp 700ms cubic-bezier(.2,.9,.2,1) forwards;
          }
          /* small delay helpers (you can remove or keep) */
          .delay-100 { animation-delay: 100ms; }
          .delay-200 { animation-delay: 200ms; }
          .delay-300 { animation-delay: 300ms; }
          .delay-350 { animation-delay: 350ms; }
          .delay-500 { animation-delay: 500ms; }
        `}
      </style>
    </div>
  );
};

export default Home;
