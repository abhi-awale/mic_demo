export default function SpecificationsList({
  specifications,
}) {
  return (
    <div className="space-y-4">
      {specifications.map(
        (item, index) => (
          <div
            key={index}
            className="rounded-xl border bg-white p-4"
          >
            <h3 className="font-semibold text-gray-900">
              {item.parameter}
            </h3>

            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">
                  Symbol
                </span>

                <span className="font-medium">
                  {item.symbol}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Value
                </span>

                <span className="font-medium">
                  {item.value}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Unit
                </span>

                <span className="font-medium">
                  {item.unit}
                </span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}