export default function FeatureHighlights() {
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