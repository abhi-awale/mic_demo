import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  categoryName,
}) {
  if (!products.length) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center">
        <h3 className="text-xl font-semibold text-gray-900">
          No Products Found
        </h3>

        <p className="mt-2 text-gray-500">
          No products are available in this category.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Grid Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
          {categoryName}
        </h2>

        <select className="rounded-lg border border-gray-300 bg-white px-4 py-2">
          <option>Popularity</option>
          <option>Name A-Z</option>
          <option>Name Z-A</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}