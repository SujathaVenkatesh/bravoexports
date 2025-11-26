import { useState } from "react";
import { Link } from "react-router-dom";

// Convert product name to clean URL-friendly slug
const toSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/&/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

const Products = () => {
  const [searchText, setSearchText] = useState("");

  const products = [
    {
      name: "LIMESTONE SLABS & TILES",
      description: [
        "Light Green Lime Stone",
        "Kadappa Black Limestone",
        "Black Kota Lime Stone",
      ],
      image: "Images/cate1.webp",
      category: "LIMESTONE",
    },
    {
      name: "WALL CLADDING STONES",
      description: [
        "Basalt Stone Cladding",
        "Wall Cladding",
        "Elevation Wall Granite Stone",
      ],
      image: "Images/cate2.webp",
      category: "WALL CLADDING",
    },
    {
      name: "NATURAL PEBBLE STONES",
      description: [
        "Chocolate Colour Pebbles",
        "Natural River Pebble Stone",
        "Natural White River Pebble Stone",
      ],
      image: "Images/cate3.webp",
      category: "PEBBLES",
    },
    {
      name: "PEBBLE STONES",
      description: [
        "Tumbled pebble Stones",
        "Natural Stones Pebble",
        "Chocolate Pebble Stones",
      ],
      image: "Images/cate4.webp",
      category: "PEBBLES",
    },
    {
      name: "MARBLE MOSAIC CHIPS",
      description: [
        "Milk White Medium Size Chips",
        "White Marble Chips",
        "Marble Stone Chips",
      ],
      image: "Images/cate5.webp",
      category: "MARBLE",
    },
    {
      name: "GRANITE SLABS STONES",
      description: [
        "Grey Granite Slab",
        "Black Galaxy Granite Slabs",
        "Crystal Yellow Granite Slabs",
      ],
      image: "Images/cate7.webp",
      category: "COBBLE",
    },
    {
      name: "COBBLE STONES",
      description: [
        "Natural Granite Cobblestone",
        "Tumbled Cobblestone Flooring",
        "Black cobbles Stone",
      ],
      image: "Images/cate8.webp",
      category: "GRANITE",
    },
    {
      name: "GRANITE STONES",
      description: ["G10 Black Granite", "Gold Granite", "Blue Pearl Granite"],
      image: "Images/cate9.webp",
      category: "SLATE",
    },
    {
      name: "SLATE STONE",
      description: [
        "Multi Color Slate Stone",
        "Black Slate Stone",
        "New K Gold Slate Stone",
      ],
      image: "Images/cate10.webp",
      category: "PEBBLES",
    },
    {
      name: "DECORATIVE WALL PEBBLES STONE",
      description: [
        "Pebble Floor Tiles",
        "Natural Indian Stones",
        "White Color River Stone",
      ],
      image: "Images/cate11.webp",
      category: "PEBBLES",
    },
    {
      name: "LANDSCAPING STONES",
      description: [
        "Mixed Tumbled Pebbles",
        "Painted Pebbles",
        "Outdoor Decorative Pebbles Stone",
      ],
      image: "Images/cate12.webp",
      category: "GRANITE",
    },
    {
      name: "Flooring Tiles",
      description: [
        "Natural Stone Flooring Tiles",
        "Memorials Stone",
        "Cemetery Monuments Stone",
      ],
      image: "Images/cate13.webp",
      category: "TILES",
    },
    {
      name: "MONUMENT AND TOMBSTONE",
      description: ["Flower Was Granite Stone", "Paving Stones"],
      image: "Images/cate14.webp",
      category: "PAVERS",
    },
    {
      name: "FLOORING TILES",
      description: [
        "Floor Decoration Stone",
        "Tile Flooring Services",
        "Natural Stone floor Tiles",
      ],
      image: "Images/cate15.webp",
      category: "GRANITE",
    },
    {
      name: "PAVERS AND KERB STONES",
      description: [
        "Natural Stone Tiles",
        "Granite Paving Stone",
        "GRANITE PAVING STONE",
      ],
      image: "Images/cate16.webp",
      category: "MARBLE",
    },
    {
      name: "GRANITE STATUE",
      description: [
        "Pebbles Stone Lettering Work",
        "White and Black Sculpture Stone",
        "Buddha Statue",
      ],
      image: "Images/cate17.webp",
      category: "LIMESTONE",
    },
    {
      name: "MARBLE STONES",
      description: [
        "Betamcherla Flooring Stone",
        "White Marble",
        "Vietnam White Marble",
      ],
      image: "Images/cate18.webp",
      category: "GRANITE",
    },
    {
      name: "LIME STONE DECORATIVE STONE",
      description: [
        "Natural Kota Green Lime Stone",
        "Patio Packs Limestone",
        "Tandur Grey Polish",
      ],
      image: "Images/cate18.webp",
      category: "WALL CLADDING",
    },
    {
      name: "GRANITE BLOCKS",
      description: [
        "Sadarahalli Granite",
        "Granite Rough Block",
        "Granite Blocks",
      ],
      image: "Images/cate19.webp",
      category: "AGGREGATES",
    },
    {
      name: "Wall Cladding",
      description: [
        "Black 1/2 Tumble Wall Cladding",
        "Wall Cladding",
        "Wall Cladding",
      ],
      image: "Images/cate20.webp",
      category: "FILTER",
    },
    {
      name: "GRANITE",
      description: [
        "Steel Grey Lapotra",
        "Bushamer Stone",
        "Sira Grey Granite",
      ],
      image: "Images/cate21.webp",
      category: "SANDSTONE",
    },
    {
      name: "CRUSHED STONE AGGREGATES",
      description: [
        "Quarries Stones",
        "Crushed Stone Aggregate",
        "Crushed Limestone",
      ],
      image: "Images/cate22.webp",
      category: "ENGRAVE",
    },
    {
      name: "WATER FILTRATION PRODUCTS",
      description: [
        "Water Filter Media",
        "Filter Media Pebble Stone",
        "Coarse Sand",
      ],
      image: "Images/cate23.webp",
      category: "KOTA",
    },
    {
      name: "SANDSTONE",
      description: [
        "Sand Stone Slabs",
        "Panther Mixed Sandstone",
        "Lalitpur Sandstone",
      ],
      image: "Images/cate24.webp",
      category: "COBBLE",
    },
    {
      name: "KOTA STONE",
      description: ["Kota with Kaddapa Step"],
      image: "Images/cate25.webp",
      category: "GRANITE",
    },
    {
      name: "Stone Pebbles",
      description: ["Natural Stone Pebbles"],
      image: "Images/cate26.webp",
    },
    {
      name: "Parking Cobblestone",
      description: ["White cobbles"],
      image: "Images/cate27.webp",
    },
    {
      name: "Stone",
      description: ["Tandur Stone"],
      image: "Images/cate28.webp",
    },
    {
      name: "NATURAL GRAPHITE",
      description: ["Natural Granite"],
      image: "Images/cate29.webp",
    },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white pb-16">
      
      {/* Banner */}
      <div className="w-full h-64 md:h-80 bg-gray-900 relative">
        <img
          src="/mnt/data/15d73ba8-a8b2-49f5-81ec-48f97c02c4e6.png"
          className="w-full h-full object-cover opacity-70"
          alt="banner"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          Our Products
        </h1>
      </div>

      {/* Search Only */}
      <div className="container mx-auto px-6 lg:px-12 mt-10 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full p-3 border rounded-lg shadow-sm mb-5"
        />
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((item, index) => {
          const whatsappLink = `https://wa.me/919500000000?text=Hello,%20I%20want%20to%20order:%20${encodeURIComponent(
            item.name
          )}`;

          return (
            <Link
              key={index}
              to={`/product/${toSlug(item.name)}`}
              className="block"
            >
              <div className="border rounded-xl overflow-hidden shadow hover:shadow-xl transition bg-white">
                <img
                  src={item.image}
                  className="w-full h-56 object-cover"
                  alt={item.name}
                />

                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">{item.name}</h3>

                  <div className="text-gray-600 text-sm space-y-1 mt-3">
                    {item.description?.map((sub, i) => (
                      <Link
                        key={i}
                        to={`/product/${toSlug(sub)}`}
                        className="block text-gray-600 font-medium hover:underline text-base"
                      >
                        {sub}
                      </Link>
                    ))}

                    <Link
                      to={`/product/${toSlug(item.name)}`}
                      className="text-blue-600 font-semibold block mt-2 hover:underline"
                    >
                      + View All
                    </Link>
                  </div>

                  <div className="mt-5">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-600 text-white py-2 rounded-lg font-medium text-center block hover:bg-green-700"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
