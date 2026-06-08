const applications = [
  "Power Supplies",
  "Battery Chargers",
  "Industrial Equipment",
  "Consumer Electronics",
  "Converters",
  "General Rectification",
];

export default function ApplicationsTab() {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">
        Applications
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {applications.map((item) => (
          <div
            key={item}
            className="rounded-xl border p-5"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}