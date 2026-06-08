import { Search } from "lucide-react";

export default function ProductFilters({
  search,
  setSearch,
  packageTypes,
  togglePackage,
  clearFilters,
}) {
  const packageOptions = [
    "DO-41",
    "DO-201AD",
    "SMD",
    "DIP",
    "KBP",
  ];

  return (
    <div className="rounded-xl border bg-white">
      <div className="flex items-center justify-between border-b p-4">
        <h3 className="font-semibold">
          Filters
        </h3>

        <button
          onClick={clearFilters}
          className="text-sm font-medium text-red-600 hover:text-red-700"
        >
          Clear
        </button>
      </div>

      <div className="space-y-6 p-4">
        {/* Search */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Search Products
          </label>

          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search product..."
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 outline-none focus:border-red-500"
            />
          </div>
        </div>

        {/* Package Types */}
        <div>
          <h4 className="mb-3 text-sm font-medium">
            Package Type
          </h4>

          <div className="space-y-2">
            {packageOptions.map((type) => (
              <label
                key={type}
                className="flex cursor-pointer items-center gap-2"
              >
                <input
                  type="checkbox"
                  checked={packageTypes.includes(
                    type
                  )}
                  onChange={() =>
                    togglePackage(type)
                  }
                  className="rounded"
                />

                <span className="text-sm">
                  {type}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}