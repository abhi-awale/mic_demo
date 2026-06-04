import React from "react";
import {
  Factory,
  ShieldCheck,
  Settings,
  Award,
} from "lucide-react";

export default function ManufacturingExcellence() {
  const features = [
    {
      icon: Factory,
      title: "Advanced Production Facilities",
    },
    {
      icon: Settings,
      title: "Automated Manufacturing Processes",
    },
    {
      icon: ShieldCheck,
      title: "Rigorous Quality Control",
    },
    {
      icon: Award,
      title: "International Standards Compliance",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200"
              alt="Manufacturing Facility"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#d92525]">
              Manufacturing Excellence
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#0f1f35] lg:text-5xl">
              Precision Manufacturing
              <br />
              Built for Reliability
            </h2>

            <div className="mt-4 h-1 w-16 rounded-full bg-[#d92525]" />

            <p className="mt-6 text-gray-600 leading-8">
              MIC India operates modern manufacturing facilities equipped
              with advanced production technologies and strict quality
              management systems. Our commitment to engineering excellence
              ensures reliable semiconductor solutions for global industries.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                      <Icon
                        size={22}
                        className="text-[#d92525]"
                      />
                    </div>

                    <h3 className="font-medium text-[#0f1f35]">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t pt-8">
              <div>
                <h3 className="text-3xl font-bold text-[#d92525]">
                  35+
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#d92525]">
                  100%
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Quality Focused
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#d92525]">
                  50+
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Countries Served
                </p>
              </div>
            </div>

            {/* CTA */}
            <button className="mt-10 rounded-md bg-[#d92525] px-6 py-3 font-medium text-white transition hover:bg-red-700">
              Explore Our Facilities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}