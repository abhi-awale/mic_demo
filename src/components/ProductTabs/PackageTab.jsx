export default function PackageTab({
  product,
}) {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">
        Package Information
      </h2>

      <div className="rounded-xl border p-8">
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-40 object-contain"
        />

        <p className="mt-6 text-center text-gray-600">
          DO-41 Axial Lead Package
        </p>
      </div>
    </div>
  );
}