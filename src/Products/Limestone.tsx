"use client"

import {Link }from "react-router-dom"

const toSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

const getAllProducts = () => {
  const categories = [
    {
      name: "LIMESTONE SLABS & TILES",
      image: "/limestone-slabs-tiles.jpg",
      items: [
        {
          name: "Light Green Lime Stone",
          desc: "High-quality green limestone ideal for flooring and wall designs.",
          details:
            "Sourced from premium quarries, this limestone offers excellent durability and aesthetic appeal. Suitable for both indoor and outdoor applications with superior weather resistance. Perfect for modern and traditional designs.",
          specs: {
            "Available in": "Various sizes",
            Finish: "Polished",
            "Minimum Order": "100 sq.ft",
            "Price Range": "Contact for pricing",
            Color: "Light Green",
            Durability: "High",
          },
        },
        {
          name: "Smooth Yellow Lime Stone",
          desc: "Popular yellow limestone used for pavements, tiles and claddings.",
          details:
            "Dense and weather-resistant yellow limestone perfect for outdoor applications. Provides excellent slip resistance and durability. Ideal for walkways, driveways, and flooring projects.",
          specs: {
            "Available in": "Various sizes",
            Finish: "Smooth",
            "Minimum Order": "100 sq.ft",
            "Price Range": "Contact for pricing",
            Color: "Yellow",
            Durability: "High",
          },
        },
        {
          name: "Yellow Limestone",
          desc: "Durable limestone with smooth finish and long life.",
          details:
            "Known for its durability and elegant appearance in any setting. Ideal for flooring, walls, and landscaping projects. Offers natural aesthetic with long-lasting performance.",
          specs: {
            "Available in": "Various sizes",
            Finish: "Natural",
            "Minimum Order": "100 sq.ft",
            "Price Range": "Contact for pricing",
            Color: "Yellow",
            Durability: "Very High",
          },
        },
        {
          name: "Lime Slate",
          desc: "Premium lime slate for elegant floor and wall applications.",
          details:
            "Ultra-premium limestone slate offering sophisticated finishes. Exceptional for high-end residential and commercial projects. Superior aesthetic value with premium durability.",
          specs: {
            "Available in": "Various sizes",
            Finish: "Honed",
            "Minimum Order": "100 sq.ft",
            "Price Range": "Contact for pricing",
            Color: "Multi-tone",
            Durability: "Very High",
          },
        },
        {
          name: "Lime Black Polished Slabs",
          desc: "Sophisticated black limestone with high-gloss polish.",
          details:
            "Beautiful natural basalt stone for exterior & interior wall cladding. Premium polished finish offering sophisticated elegance. Perfect for modern architectural designs with superior aesthetic.",
          specs: {
            "Available in": "Various sizes",
            Finish: "Polished",
            "Minimum Order": "50 sq.ft",
            "Price Range": "Contact for pricing",
            Color: "Black",
            Durability: "Very High",
          },
        },
        {
          name: "Kandappa Brick Limestone",
          desc: "Traditional brick-style limestone for rustic applications.",
          details:
            "Kandappa style limestone offering traditional aesthetics. Perfect for heritage projects and rustic designs. Combines historical charm with modern durability.",
          specs: {
            "Available in": "Brick format",
            Finish: "Natural",
            "Minimum Order": "100 sq.ft",
            "Price Range": "Contact for pricing",
            Color: "Yellow/Brown",
            Application: "Rustic & Traditional",
          },
        },
      ],
    },
    {
      name: "WALL CLADDING STONES",
      image: "/wall-cladding-stones.jpg",
      items: [
        {
          name: "Basalt Stone Cladding",
          desc: "Beautiful natural basalt stone for exterior & interior wall cladding.",
          details:
            "Premium basalt offering natural elegance for any building design. Ideal for creating stunning wall features. Provides superior weather resistance and timeless appeal.",
          specs: {
            "Available in": "Various sizes",
            Finish: "Natural",
            "Minimum Order": "50 sq.ft",
            "Price Range": "Contact for pricing",
            Color: "Dark Grey/Black",
            Durability: "Excellent",
          },
        },
        {
          name: "Wall Cladding Stone",
          desc: "Premium quality wall cladding stones with versatile designs.",
          details:
            "Versatile cladding suitable for modern and traditional designs. Offers superior strength and weather resistance. Perfect for creating distinctive architectural features.",
          specs: {
            "Available in": "Various sizes",
            Finish: "Split Face",
            "Minimum Order": "50 sq.ft",
            "Price Range": "Contact for pricing",
            Color: "Mixed",
            Application: "Wall Cladding",
          },
        },
        {
          name: "Elevation Wall Granite Stone",
          desc: "Attractive granite stones for designer wall elevation work.",
          details:
            "Sophisticated limestone selection for premium architectural projects. Combines aesthetic appeal with structural integrity. Ideal for high-end residential and commercial buildings.",
          specs: {
            "Available in": "Various sizes",
            Finish: "Honed",
            "Minimum Order": "50 sq.ft",
            "Price Range": "Contact for pricing",
            Color: "Multi-tone",
            Durability: "Very High",
          },
        },
        {
          name: "Dolomite Black Limestone",
          desc: "Premium quality black cladding stones with natural finish.",
          details:
            "Premium black limestone cladding with natural aesthetic. Perfect for modern designs seeking sophisticated elegance. Exceptional durability for long-term projects.",
          specs: {
            "Available in": "Various sizes",
            Finish: "Natural",
            "Minimum Order": "50 sq.ft",
            "Price Range": "Contact for pricing",
            Color: "Black",
            Durability: "High",
          },
        },
        {
          name: "Beige Limestone Cladding",
          desc: "Warm beige tones for elegant architectural designs.",
          details:
            "Warm and inviting beige limestone perfect for luxury projects. Creates sophisticated and elegant wall finishes. Ideal for contemporary and classical architectural styles.",
          specs: {
            "Available in": "Various sizes",
            Finish: "Honed",
            "Minimum Order": "50 sq.ft",
            "Price Range": "Contact for pricing",
            Color: "Beige",
            Durability: "High",
          },
        },
      ],
    },
    {
      name: "NATURAL PEBBLE STONES",
      image: "/pebble-stones.jpg",
      items: [
        {
          name: "Brick Sandstone",
          desc: "Natural sandstone with warm brick-red tones.",
          details:
            "Beautiful natural sandstone with warm earthy tones. Perfect for landscaping and outdoor decor. Adds warmth and character to any garden or outdoor space.",
          specs: {
            "Available in": "Various sizes",
            Finish: "Natural",
            "Minimum Order": "100 kg",
            "Price Range": "Contact for pricing",
            Color: "Red/Brown",
            Application: "Landscaping",
          },
        },
        {
          name: "Chocolate Colour Pebbles",
          desc: "Natural brown pebbles suitable for landscaping and gardens.",
          details:
            "Adds warm tones to any outdoor space. Perfect for pathways, garden beds, and decorative landscaping projects. Natural smooth finish.",
          specs: {
            "Available in": "Various sizes",
            Finish: "Smooth",
            "Minimum Order": "100 kg",
            "Price Range": "Contact for pricing",
            Color: "Brown",
            Application: "Landscaping",
          },
        },
        {
          name: "Natural River Pebble Stone",
          desc: "Smooth river pebbles perfect for pathways and decoration.",
          details:
            "Naturally smooth with timeless appeal. Ideal for creating attractive outdoor spaces and pathways. Premium quality for long-lasting beauty.",
          specs: {
            "Available in": "Various sizes",
            Finish: "Polished",
            "Minimum Order": "100 kg",
            "Price Range": "Contact for pricing",
            Color: "Mixed Earth Tones",
            Application: "Pathways & Decor",
          },
        },
        {
          name: "Natural White River Pebble Stone",
          desc: "White polished river stones for indoor and outdoor décor.",
          details:
            "Premium white river stones for elegant designs. Combines natural beauty with practical durability. Perfect for landscaping and interior decoration.",
          specs: {
            "Available in": "Various sizes",
            Finish: "Polished",
            "Minimum Order": "100 kg",
            "Price Range": "Contact for pricing",
            Color: "White",
            Application: "Premium Decor",
          },
        },
        {
          name: "Lime Granite Pebbles",
          desc: "Premium granite pebbles for high-end landscaping.",
          details:
            "Superior granite pebbles for exclusive outdoor projects. Exceptional durability and aesthetic appeal. Perfect for creating premium landscape designs.",
          specs: {
            "Available in": "Various sizes",
            Finish: "Natural",
            "Minimum Order": "100 kg",
            "Price Range": "Contact for pricing",
            Color: "Grey/Multi-tone",
            Application: "Premium Landscaping",
          },
        },
        {
          name: "Lime Pink Pebbles",
          desc: "Elegant pink-toned pebbles for decorative applications.",
          details:
            "Unique pink pebbles adding distinctive character to outdoor spaces. Perfect for specialty landscaping and decorative projects. Premium quality stones.",
          specs: {
            "Available in": "Various sizes",
            Finish: "Natural",
            "Minimum Order": "100 kg",
            "Price Range": "Contact for pricing",
            Color: "Pink",
            Application: "Decorative",
          },
        },
      ],
    },
  ]

  const flatProducts = []
  categories.forEach((category) => {
    category.items.forEach((item) => {
      flatProducts.push({
        ...item,
        categoryName: category.name,
        categorySlug: toSlug(category.name),
        image: category.image,
      })
    })
  })

  return flatProducts
}

export const ProductDetails = ({ slug }) => {
  const allProducts = getAllProducts()

  const currentProductIndex = allProducts.findIndex((p) => toSlug(p.name) === slug)

  if (currentProductIndex === -1) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Link href="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const product = allProducts[currentProductIndex]
  const previousProduct = currentProductIndex > 0 ? allProducts[currentProductIndex - 1] : null
  const nextProduct = currentProductIndex < allProducts.length - 1 ? allProducts[currentProductIndex + 1] : null

  const isEvenProduct = currentProductIndex % 2 === 0

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">{product.name}</h1>
          <p className="text-gray-300">{product.categoryName}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20`}>
          <div className={isEvenProduct ? "lg:col-start-1" : "lg:col-start-2"}>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg w-full">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-96 object-cover" />
            </div>
          </div>

          <div className={isEvenProduct ? "lg:col-start-2" : "lg:col-start-1"}>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-blue-600 mb-2 uppercase">Category</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">{product.desc}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{product.details}</p>
              </div>

              {/* Specifications Grid */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Specifications</h3>
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="pb-4 border-b border-gray-200 last:border-b-0">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{key}</p>
                      <p className="text-gray-900 font-semibold mt-2">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={`https://wa.me/919500000000?text=Hi, I want details about ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white text-center py-4 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Contact on WhatsApp
                </a>
                <button className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="bg-gray-50 rounded-lg p-8 border-t border-gray-200 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Browse Products</h3>
          <div className="flex gap-4">
            {previousProduct ? (
              <Link
                href={`/product/${toSlug(previousProduct.name)}`}
                className="flex-1 bg-gray-800 text-white text-center py-4 rounded-lg font-semibold hover:bg-gray-900 transition flex items-center justify-center gap-2"
              >
                <span>←</span> Previous Product
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {nextProduct ? (
              <Link
                href={`/product/${toSlug(nextProduct.name)}`}
                className="flex-1 bg-blue-600 text-white text-center py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                Next Product <span>→</span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
