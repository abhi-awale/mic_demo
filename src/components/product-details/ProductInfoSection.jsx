import { useState } from "react";

export default function ProductInfoSection({ product }) {
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