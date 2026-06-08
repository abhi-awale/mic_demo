export default function OverviewTab({
  product,
}) {
  return (
    <div>
      <h2 className="text-3xl font-bold">
        Product Overview
      </h2>

      <p className="mt-6 max-w-4xl leading-8 text-gray-600">
        The {product.name} is a high
        reliability silicon rectifier diode
        designed for power supply, battery
        charging, industrial electronics and
        general purpose rectification
        applications.
      </p>

      <p className="mt-4 max-w-4xl leading-8 text-gray-600">
        It offers excellent surge capability,
        low forward voltage drop and high
        reverse voltage performance.
      </p>
    </div>
  );
}