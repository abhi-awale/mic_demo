import React from "react";
import {
  ShieldCheck,
  BadgeCheck,
  Users,
  Truck,
} from "lucide-react";

export default function WhyChooseMICIndia() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Quality Manufacturing",
      description:
        "State-of-the-art facilities and stringent quality control at every stage.",
    },
    {
      icon: BadgeCheck,
      title: "Industry Standards",
      description:
        "Products manufactured as per international standards.",
    },
    {
      icon: Users,
      title: "Technical Expertise",
      description:
        "Experienced engineering team for customized solutions and support.",
    },
    {
      icon: Truck,
      title: "Reliable Supply Chain",
      description:
        "Timely delivery and consistent availability worldwide.",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-[#111827] lg:text-5xl">
            Why Choose MIC India?
          </h2>

          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#d92525]" />
        </div>

        {/* Features Grid */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex items-start gap-5"
              >
                {/* Icon Circle */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon
                    size={34}
                    strokeWidth={1.8}
                    className="text-[#d92525]"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-[#111827]">
                    {feature.title}
                  </h3>

                  <p className="text-[15px] leading-7 text-[#6b7280]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}