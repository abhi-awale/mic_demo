import { useMemo, useState } from "react";

import ProductHero from '../components/products/ProductHero'
import ProductSidebar from '../components/products/ProductSidebar'
import ProductGrid from '../components/products/ProductGrid'
import ProductMobileBar from '../components/products/ProductMobileBar'
import ProductFilters from "../components/products/ProductFilters";

import categories from '../data/categories'
import products from '../data/products';

export default function ProductListPage() {
  const [expanded, setExpanded] = useState([1, 11]);

  const [selectedCategory, setSelectedCategory] =
    useState(111);

  const [selectedCategoryName, setSelectedCategoryName] =
    useState("Rectifier Diodes");

  const [search, setSearch] = useState("");

  const [packageTypes, setPackageTypes] =
    useState([]);

  const [showFilters, setShowFilters] =
    useState(false);

  const toggleNode = (id) => {
    setExpanded((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  const togglePackage = (value) => {
    setPackageTypes((prev) =>
      prev.includes(value)
        ? prev.filter((x) => x !== value)
        : [...prev, value]
    );
  };

  const clearFilters = () => {
    setSearch("");
    setPackageTypes([]);
  };

  const handleCategorySelect = (node) => {
    setSelectedCategory(node.id);
    setSelectedCategoryName(node.name);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        product.categoryId ===
        selectedCategory;

      const matchSearch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchPackage =
        packageTypes.length === 0 ||
        packageTypes.includes(
          product.packageType
        );

      return (
        matchCategory &&
        matchSearch &&
        matchPackage
      );
    });
  }, [
    selectedCategory,
    search,
    packageTypes,
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductHero
        title="Our Products"
        breadcrumb="Home / Products"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ProductMobileBar
          categories={categories}
          selectedCategory={
            selectedCategory
          }
          productCount={
            filteredProducts.length
          }
          onOpenFilters={() =>
            setShowFilters(true)
          }
          onCategoryChange={(node) => {
            if (!node) return;

            handleCategorySelect(node);
          }}
        />

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          <ProductSidebar
            categories={categories}
            expanded={expanded}
            toggleNode={toggleNode}
            selectedCategory={
              selectedCategory
            }
            onSelectCategory={
              handleCategorySelect
            }
            search={search}
            setSearch={setSearch}
            packageTypes={packageTypes}
            togglePackage={
              togglePackage
            }
            clearFilters={
              clearFilters
            }
          />

          <ProductGrid
            products={
              filteredProducts
            }
            categoryName={
              selectedCategoryName
            }
          />
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() =>
              setShowFilters(false)
            }
          />

          <div className="fixed right-0 top-0 z-50 h-full w-80 bg-white p-4 shadow-xl lg:hidden">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">
                Filters
              </h3>

              <button
                onClick={() =>
                  setShowFilters(false)
                }
                className="text-xl"
              >
                ×
              </button>
            </div>

            <ProductFilters
              search={search}
              setSearch={setSearch}
              packageTypes={
                packageTypes
              }
              togglePackage={
                togglePackage
              }
              clearFilters={
                clearFilters
              }
            />
          </div>
        </>
      )}
    </div>
  );
}