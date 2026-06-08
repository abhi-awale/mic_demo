export default function SpecificationsTable({
  specifications,
}) {
  return (
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
  );
}