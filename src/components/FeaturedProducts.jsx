import React from "react";
import { ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  const products = [
    {
      name: "Rectifier Diodes",
      description:
        "High-performance rectifier diodes designed for efficient power conversion applications.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    },
    {
      name: "Fast Recovery Diodes",
      description:
        "Engineered for high-speed switching and low reverse recovery losses.",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600",
    },
    {
      name: "Schottky Diodes",
      description:
        "Low forward voltage drop and excellent efficiency for modern circuits.",
      image:
        "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=600",
    },
  ];

  return (
    <section className="bg-[#f5f6f8] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-[#0f1f35] lg:text-5xl">
            Featured Products
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#d92525]" />
        </div>

        {/* Products */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="flex h-64 items-center justify-center bg-white p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-[#0f1f35]">
                  {product.name}
                </h3>

                <p className="mb-5 text-sm leading-7 text-gray-600">
                  {product.description}
                </p>

                <button className="inline-flex items-center gap-2 font-medium text-[#d92525] transition-all hover:gap-3">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 rounded-md bg-[#d92525] px-6 py-3 font-medium text-white transition hover:bg-red-700">
            View All Products
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}