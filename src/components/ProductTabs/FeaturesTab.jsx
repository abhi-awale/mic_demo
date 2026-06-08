const features = [
  "High reverse voltage capability",
  "Low leakage current",
  "High surge current capability",
  "Low forward voltage drop",
  "RoHS compliant",
  "Reliable long-term operation",
];

export default function FeaturesTab() {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">
        Product Features
      </h2>

      <ul className="space-y-4">
        {features.map((feature) => (
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
  );
}