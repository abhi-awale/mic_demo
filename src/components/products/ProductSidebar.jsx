import ProductCategoryTree from "./ProductCategoryTree";
import ProductFilters from "./ProductFilters";

export default function ProductSidebar({
  categories,
  expanded,
  toggleNode,
  selectedCategory,
  onSelectCategory,
  search,
  setSearch,
  packageTypes,
  togglePackage,
  clearFilters,
}) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 space-y-6">
        <ProductCategoryTree
  categories={categories}
  expanded={expanded}
  toggleNode={toggleNode}
  selectedCategory={selectedCategory}
  onSelectCategory={(node) => {
    onSelectCategory(node);
  }}
/>

        <ProductFilters
          search={search}
          setSearch={setSearch}
          packageTypes={packageTypes}
          togglePackage={togglePackage}
          clearFilters={clearFilters}
        />
      </div>
    </aside>
  );
}