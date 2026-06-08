import { useState } from "react";

export default function ProductTabs({ product }) {
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