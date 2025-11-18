import { useState } from "react";
import { Search, Filter, ArrowRight, Package } from "lucide-react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "LIMESTONE SLABS & TILES",
    "NATURAL PEBBLE STONES",
    "WALL CLADDING STONES",
    "PEBBLE STONES",
    "MARBLE MOSAIC CHIPS",
    "GRANITE SLABS STONES",
    "GRANITE STONES",
  ];

  const products = [
    {
      name: "Premium Basmati Rice",
      description: "Aged basmati rice with long grains and aromatic fragrance",
      image:
        "https://images.pexels.com/photos/7363674/pexels-photo-7363674.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Agriculture",
      price: "Contact for price",
    },
    {
      name: "Organic Cotton Fabric",
      description: "Sustainable organic cotton fabric in various colors",
      image:
        "https://images.pexels.com/photos/3738386/pexels-photo-3738386.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Textiles",
      price: "Contact for price",
    },
    {
      name: "Turmeric Powder",
      description: "Pure turmeric powder with high curcumin content",
      image:
        "https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Food",
      price: "Contact for price",
    },
    {
      name: "Handwoven Carpets",
      description: "Traditional handwoven carpets with intricate designs",
      image:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Crafts",
      price: "Contact for price",
    },
    {
      name: "Steel Components",
      description: "High-grade steel components for industrial use",
      image:
        "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Industrial",
      price: "Contact for price",
    },
    {
      name: "Leather Bags",
      description: "Premium leather bags handcrafted by skilled artisans",
      image:
        "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Fashion",
      price: "Contact for price",
    },
    {
      name: "Fresh Vegetables",
      description: "Farm-fresh vegetables meeting export quality standards",
      image:
        "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Agriculture",
      price: "Contact for price",
    },
    {
      name: "Silk Sarees",
      description: "Luxurious silk sarees with traditional patterns",
      image:
        "https://images.pexels.com/photos/6065867/pexels-photo-6065867.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Textiles",
      price: "Contact for price",
    },
    {
      name: "Tea Leaves",
      description: "Premium tea leaves from renowned tea gardens",
      image:
        "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Food",
      price: "Contact for price",
    },
    {
      name: "Brass Sculptures",
      description: "Decorative brass sculptures and figurines",
      image:
        "https://images.pexels.com/photos/3094035/pexels-photo-3094035.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Crafts",
      price: "Contact for price",
    },
    {
      name: "Machinery Parts",
      description: "Precision-engineered machinery components",
      image:
        "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Industrial",
      price: "Contact for price",
    },
    {
      name: "Footwear Collection",
      description: "Stylish leather footwear for various occasions",
      image:
        "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Fashion",
      price: "Contact for price",
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24">
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6 animate-fadeInDown">
              <Package className="w-5 h-5" />
              <span className="font-semibold">Our Product Range</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              Premium Export Products
            </h1>
            <p
              className="text-xl text-white/90 max-w-2xl mx-auto animate-fadeIn"
              style={{ animationDelay: "200ms" }}
            >
              Discover our comprehensive range of export-quality products across
              various categories
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 w-full animate-slideInLeft">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 outline-none"
              />
            </div>
            <div className="flex items-center space-x-2 w-full lg:w-auto animate-slideInRight">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 animate-fadeIn">
            <p className="text-gray-600 text-lg">
              Showing{" "}
              <span className="font-bold text-emerald-600">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fadeInUp"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                      <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-emerald-600 rounded-full text-sm font-semibold shadow-lg">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-2xl transition-shadow duration-300">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-emerald-600 font-bold">
                        {product.price}
                      </span>
                      <button className="p-2 hover:bg-emerald-50 rounded-lg transition-colors duration-300 transform hover:scale-110">
                        <ArrowRight className="w-5 h-5 text-emerald-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 animate-fadeIn">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <Package className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeIn">
            Can't Find What You're Looking For?
          </h2>
          <p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fadeIn"
            style={{ animationDelay: "200ms" }}
          >
            Contact us for custom product requirements and bulk orders
          </p>
          <button
            className="group px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mx-auto animate-fadeInUp"
            style={{ animationDelay: "400ms" }}
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;
