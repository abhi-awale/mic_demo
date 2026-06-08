import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Download,
  FileText,
  ShieldCheck,
  FileSpreadsheet,
} from "lucide-react";

export default function ProductDetailsPage() {
  const { slug } = useParams();

  const product = {
    name: "1N4007",
    slug: "1n4007",
    subtitle: "General Purpose Rectifier Diode",
    image: "https://images.unsplash.com/photo-1640955785023-1854685dae05?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The 1N4007 is a general purpose silicon rectifier diode designed for high reliability and performance.",
  };
  

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroSection product={product} />

      {/* Product Gallery + Info */}
      <ProductInfoSection product={product} />

      {/* Features */}
      <FeatureHighlights />

      {/* Tabs */}
      <ProductTabs product={product} />

      {/* Downloads */}
      <DownloadsSection />
    </div>
  );
}

/* ======================================================
   HERO SECTION
====================================================== */

function HeroSection({ product }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="relative h-[320px] md:h-[380px] lg:h-[420px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081221]/95 via-[#081221]/85 to-[#081221]/50" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}

            <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-300">
              <span className="cursor-pointer hover:text-white">
                Home
              </span>

              <span>/</span>

              <span className="cursor-pointer hover:text-white">
                Products
              </span>

              <span>/</span>

              <span className="cursor-pointer hover:text-white">
                Rectifier Diodes
              </span>

              <span>/</span>

              <span className="cursor-pointer hover:text-white">
                Standard Rectifier Diodes
              </span>

              <span>/</span>

              <span className="text-white font-medium">
                {product.name}
              </span>
            </div>

            {/* Category */}

            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-500">
              Standard Rectifier Diodes
            </p>

            {/* Product Name */}

            <h1 className="text-4xl font-bold text-white md:text-6xl">
              {product.name}
            </h1>

            {/* Subtitle */}

            <h2 className="mt-3 text-xl font-semibold text-white md:text-3xl">
              {product.subtitle}
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
              {product.description}
            </p>

            {/* Product Highlights */}

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                1000V VRRM
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                1A Forward Current
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                DO-41 Package
              </span>

              <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-300 backdrop-blur">
                RoHS Compliant
              </span>
            </div>
          </div>
        </div>

        {/* Right Product Image */}

        <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 lg:block">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[240px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   PRODUCT INFO SECTION
====================================================== */

function ProductInfoSection({ product }) {
  const [activeImage, setActiveImage] = useState(0);

  const gallery = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[500px_1fr]">
          {/* Product Gallery */}

          <div>
            <div className="overflow-hidden rounded-2xl border bg-white">
              <img
                src={gallery[activeImage]}
                alt={product.name}
                className="h-[420px] w-full object-contain p-10"
              />
            </div>

            <div className="mt-4 flex gap-4">
              {gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`overflow-hidden rounded-lg border transition ${
                    activeImage === index
                      ? "border-red-600 ring-2 ring-red-100"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    className="h-20 w-20 object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-red-600">
              Standard Rectifier Diodes
            </p>

            <h2 className="text-4xl font-bold text-gray-900">
              {product.name}
            </h2>

            <h3 className="mt-3 text-2xl font-semibold text-gray-700">
              {product.subtitle}
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              {product.description}
            </p>

            {/* Quick Specs */}

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-xl border p-4">
                <p className="text-xs text-gray-500">
                  Reverse Voltage
                </p>

                <p className="mt-2 text-xl font-bold">
                  1000V
                </p>
              </div>

              <div className="rounded-xl border p-4">
                <p className="text-xs text-gray-500">
                  Forward Current
                </p>

                <p className="mt-2 text-xl font-bold">
                  1A
                </p>
              </div>

              <div className="rounded-xl border p-4">
                <p className="text-xs text-gray-500">
                  Package
                </p>

                <p className="mt-2 text-xl font-bold">
                  DO-41
                </p>
              </div>

              <div className="rounded-xl border p-4">
                <p className="text-xs text-gray-500">
                  Compliance
                </p>

                <p className="mt-2 text-xl font-bold text-green-600">
                  RoHS
                </p>
              </div>
            </div>

            {/* CTA Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700">
                Download Datasheet
              </button>

              <button className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-50">
                Request Quote
              </button>

              <button className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-50">
                Contact Sales
              </button>
            </div>

            {/* Product Meta */}

            <div className="mt-10 border-t pt-8">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <span className="text-sm text-gray-500">
                    Product Series
                  </span>

                  <p className="font-medium">
                    1N400X Series
                  </p>
                </div>

                <div>
                  <span className="text-sm text-gray-500">
                    Category
                  </span>

                  <p className="font-medium">
                    Rectifier Diodes
                  </p>
                </div>

                <div>
                  <span className="text-sm text-gray-500">
                    Package Type
                  </span>

                  <p className="font-medium">
                    DO-41
                  </p>
                </div>

                <div>
                  <span className="text-sm text-gray-500">
                    Availability
                  </span>

                  <p className="font-medium text-green-600">
                    In Stock
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   FEATURES
====================================================== */

function FeatureHighlights() {
  const features = [
    {
      title: "High Reliability",
      description:
        "Designed for long-term stable performance in demanding applications.",
    },
    {
      title: "High Voltage Capability",
      description:
        "Supports reverse voltages up to 1000V for versatile usage.",
    },
    {
      title: "Low Leakage Current",
      description:
        "Minimizes power losses and improves overall efficiency.",
    },
    {
      title: "RoHS Compliant",
      description:
        "Manufactured using environmentally friendly materials.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Key Product Benefits
          </h2>

          <p className="mt-3 text-gray-600">
            Engineered for reliability, efficiency and
            industrial-grade performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-50">
                <div className="h-7 w-7 rounded-full bg-red-600" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   TABS
====================================================== */

function ProductTabs({ product }) {
  const [activeTab, setActiveTab] =
    useState("overview");

  const tabs = [
    "overview",
    "specifications",
    "features",
    "applications",
    "package information",
  ];

  const specifications = [
    {
      parameter:
        "Maximum Repetitive Peak Reverse Voltage",
      symbol: "VRRM",
      value: "1000",
      unit: "V",
    },
    {
      parameter: "Maximum RMS Voltage",
      symbol: "VRMS",
      value: "700",
      unit: "V",
    },
    {
      parameter: "Maximum DC Blocking Voltage",
      symbol: "VDC",
      value: "1000",
      unit: "V",
    },
    {
      parameter:
        "Maximum Average Forward Current",
      symbol: "IF(AV)",
      value: "1.0",
      unit: "A",
    },
    {
      parameter:
        "Peak Forward Surge Current",
      symbol: "IFSM",
      value: "30",
      unit: "A",
    },
    {
      parameter:
        "Maximum Forward Voltage",
      symbol: "VF",
      value: "1.1",
      unit: "V",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Tabs Header */}

        <div className="overflow-x-auto border-b">
          <div className="flex min-w-max gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  setActiveTab(tab)
                }
                className={`border-b-2 px-2 py-4 text-sm font-medium capitalize transition ${
                  activeTab === tab
                    ? "border-red-600 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}

        <div className="mt-10">
          {/* OVERVIEW */}

          {activeTab === "overview" && (
            <div>
              <h2 className="text-3xl font-bold">
                Product Overview
              </h2>

              <p className="mt-6 max-w-4xl leading-8 text-gray-600">
                The {product.name} is a high
                reliability silicon rectifier
                diode designed for power supply,
                battery charging, industrial
                electronics and general purpose
                rectification applications.
              </p>

              <p className="mt-4 max-w-4xl leading-8 text-gray-600">
                It offers excellent surge
                capability, low forward voltage
                drop and high reverse voltage
                performance making it suitable
                for a wide variety of circuits.
              </p>
            </div>
          )}

          {/* SPECIFICATIONS */}

          {activeTab === "specifications" && (
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                Technical Specifications
              </h2>

              <div className="overflow-hidden rounded-xl border">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-4 text-left">
                        Parameter
                      </th>

                      <th className="p-4 text-left">
                        Symbol
                      </th>

                      <th className="p-4 text-left">
                        Value
                      </th>

                      <th className="p-4 text-left">
                        Unit
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {specifications.map(
                      (item, index) => (
                        <tr
                          key={index}
                          className="border-t"
                        >
                          <td className="p-4">
                            {item.parameter}
                          </td>

                          <td className="p-4">
                            {item.symbol}
                          </td>

                          <td className="p-4 font-medium">
                            {item.value}
                          </td>

                          <td className="p-4">
                            {item.unit}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* FEATURES */}

          {activeTab === "features" && (
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                Product Features
              </h2>

              <ul className="space-y-4">
                {[
                  "High reverse voltage capability",
                  "Low leakage current",
                  "High surge current capability",
                  "Low forward voltage drop",
                  "RoHS compliant",
                  "Reliable long-term operation",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-2 h-2 w-2 rounded-full bg-red-600" />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* APPLICATIONS */}

          {activeTab === "applications" && (
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                Applications
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Power Supplies",
                  "Battery Chargers",
                  "Industrial Equipment",
                  "Consumer Electronics",
                  "Converters",
                  "General Rectification",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border p-5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PACKAGE */}

          {activeTab ===
            "package information" && (
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                Package Information
              </h2>

              <div className="rounded-xl border p-8">
                <img
                  src={product.image}
                  alt=""
                  className="mx-auto h-40 object-contain"
                />

                <p className="mt-6 text-center text-gray-600">
                  DO-41 Axial Lead Package
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   DOWNLOADS
====================================================== */

function DownloadsSection() {
  const documents = [
    {
      title: "1N4007 Datasheet",
      description:
        "Complete technical specifications and characteristics",
      size: "1.2 MB",
      icon: FileText,
    },
    {
      title: "RoHS Compliance Certificate",
      description:
        "Environmental compliance documentation",
      size: "420 KB",
      icon: ShieldCheck,
    },
    {
      title: "Package Drawing",
      description:
        "DO-41 mechanical dimensions and layout",
      size: "650 KB",
      icon: FileSpreadsheet,
    },
    {
      title: "Product Brief",
      description:
        "Quick overview and application guide",
      size: "850 KB",
      icon: FileText,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Documents & Downloads
          </h2>

          <p className="mt-3 text-gray-600">
            Access datasheets, certificates,
            package drawings and product documents.
          </p>
        </div>

        {/* Download Cards */}

        <div className="grid gap-6 md:grid-cols-2">
          {documents.map((doc) => {
            const Icon = doc.icon;

            return (
              <div
                key={doc.title}
                className="rounded-2xl border bg-white p-6 transition hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                      <Icon
                        size={24}
                        className="text-red-600"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {doc.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500">
                        {doc.description}
                      </p>

                      <p className="mt-2 text-xs text-gray-400">
                        File Size: {doc.size}
                      </p>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Datasheet CTA */}

        <div className="mt-10 rounded-2xl bg-slate-900 p-8 text-white">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">
                Need More Technical Information?
              </h3>

              <p className="mt-2 text-gray-300">
                Contact our technical team for
                detailed specifications and support.
              </p>
            </div>

            <button className="rounded-lg bg-red-600 px-6 py-3 font-medium text-white hover:bg-red-700">
              Contact Technical Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}