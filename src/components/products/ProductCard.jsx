import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <div className="h-48 overflow-hidden bg-gray-100">
        <img
          src={
            product.image ||
            "https://images.unsplash.com/photo-1640955785023-1854685dae05?q=80&w=1200&auto=format&fit=crop"
          }
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="line-clamp-2 text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {product.packageType}
        </p>

        {/* Specifications */}
        <div className="mt-4 space-y-2">
          {product.reverseVoltage && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                Reverse Voltage
              </span>
              <span className="font-medium">
                {product.reverseVoltage}
              </span>
            </div>
          )}

          {product.current && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                Current
              </span>
              <span className="font-medium">
                {product.current}
              </span>
            </div>
          )}
        </div>

        {/* CTA */}
        <Link
          to={`/products/${product.id}`}
          className="mt-5 block rounded-lg border border-red-600 py-2.5 text-center font-medium text-red-600 transition hover:bg-red-600 hover:text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}