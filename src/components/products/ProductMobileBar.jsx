export default function ProductMobileBar({
  categories,
  selectedCategory,
  onCategoryChange,
  onOpenFilters,
  productCount,
}) {
  const flattenedCategories = [];

  const flattenCategories = (items) => {
    items.forEach((item) => {
      if (!item.children?.length) {
        flattenedCategories.push({
          id: item.id,
          name: item.name,
        });
      }

      if (item.children) {
        flattenCategories(item.children);
      }
    });
  };

  flattenCategories(categories);

  return (
    <div className="mb-6 lg:hidden">
      <div className="rounded-xl border bg-white p-4">
        <div className="flex gap-3">
          <select
            value={selectedCategory}
            onChange={(e) => {
              const categoryId = Number(
                e.target.value
              );

              const category =
                flattenedCategories.find(
                  (item) =>
                    item.id === categoryId
                );

              onCategoryChange(category);
            }}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm"
          >
            {flattenedCategories.map(
              (category) => (
                <option
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </option>
              )
            )}
          </select>

          <button
            onClick={onOpenFilters}
            className="rounded-lg bg-red-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-red-700"
          >
            Filters
          </button>
        </div>

        <p className="mt-3 text-sm text-gray-500">
          {productCount} product
          {productCount !== 1 ? "s" : ""}
          found
        </p>
      </div>
    </div>
  );
}