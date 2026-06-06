import { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const image = "https://images.unsplash.com/photo-1640955785023-1854685dae05?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const categories = [
  {
    id: 1,
    name: "Semiconductors",
    children: [
      {
        id: 11,
        name: "Discrete Components",
        children: [
          {
            id: 111,
            name: "Rectifier Diodes",
          },
          {
            id: 112,
            name: "Fast Recovery Diodes",
          },
          {
            id: 113,
            name: "Schottky Diodes",
          },
          {
            id: 114,
            name: "Bridge Rectifiers",
          },
          {
            id: 115,
            name: "Zener Diodes",
          },
          {
            id: 116,
            name: "TVS Diodes",
          },
        ],
      },

      {
        id: 12,
        name: "Transistors",
        children: [
          {
            id: 121,
            name: "NPN Transistors",
          },
          {
            id: 122,
            name: "PNP Transistors",
          },
          {
            id: 123,
            name: "MOSFETs",
          },
        ],
      },

      {
        id: 13,
        name: "Thyristors",
      },

      {
        id: 14,
        name: "IGBTs",
      },
    ],
  },

  {
    id: 2,
    name: "Optoelectronics",
    children: [
      {
        id: 21,
        name: "LEDs",
      },
      {
        id: 22,
        name: "Infrared LEDs",
      },
    ],
  },

  {
    id: 3,
    name: "Passive Components",
    children: [
      {
        id: 31,
        name: "Resistors",
      },
      {
        id: 32,
        name: "Capacitors",
      },
    ],
  },
];

  const products = [
  {
    id: 1,
    name: "1N4001",
    categoryId: 111,
    packageType: "DO-41",
    reverseVoltage: "50V",
    current: "1A",
  },
  {
    id: 2,
    name: "1N4002",
    categoryId: 111,
    packageType: "DO-41",
    reverseVoltage: "100V",
    current: "1A",
  },
  {
    id: 3,
    name: "1N4003",
    categoryId: 111,
    packageType: "DO-41",
    reverseVoltage: "200V",
    current: "1A",
  },
  {
    id: 4,
    name: "1N4004",
    categoryId: 111,
    packageType: "DO-41",
    reverseVoltage: "400V",
    current: "1A",
  },
  {
    id: 5,
    name: "1N4005",
    categoryId: 111,
    packageType: "DO-41",
    reverseVoltage: "600V",
    current: "1A",
  },
  {
    id: 6,
    name: "1N4006",
    categoryId: 111,
    packageType: "DO-41",
    reverseVoltage: "800V",
    current: "1A",
  },
  {
    id: 7,
    name: "1N4007",
    categoryId: 111,
    packageType: "DO-41",
    reverseVoltage: "1000V",
    current: "1A",
  },

  {
    id: 8,
    name: "1N5401",
    categoryId: 111,
    packageType: "DO-201AD",
    reverseVoltage: "100V",
    current: "3A",
  },
  {
    id: 9,
    name: "1N5402",
    categoryId: 111,
    packageType: "DO-201AD",
    reverseVoltage: "200V",
    current: "3A",
  },
  {
    id: 10,
    name: "1N5404",
    categoryId: 111,
    packageType: "DO-201AD",
    reverseVoltage: "400V",
    current: "3A",
  },
  {
    id: 11,
    name: "1N5406",
    categoryId: 111,
    packageType: "DO-201AD",
    reverseVoltage: "600V",
    current: "3A",
  },
  {
    id: 12,
    name: "1N5408",
    categoryId: 111,
    packageType: "DO-201AD",
    reverseVoltage: "1000V",
    current: "3A",
  },

  {
    id: 13,
    name: "FR101",
    categoryId: 112,
    packageType: "DO-41",
    reverseVoltage: "50V",
    current: "1A",
  },
  {
    id: 14,
    name: "FR102",
    categoryId: 112,
    packageType: "DO-41",
    reverseVoltage: "100V",
    current: "1A",
  },
  {
    id: 15,
    name: "FR103",
    categoryId: 112,
    packageType: "DO-41",
    reverseVoltage: "200V",
    current: "1A",
  },
  {
    id: 16,
    name: "FR104",
    categoryId: 112,
    packageType: "DO-41",
    reverseVoltage: "400V",
    current: "1A",
  },
  {
    id: 17,
    name: "FR107",
    categoryId: 112,
    packageType: "DO-41",
    reverseVoltage: "1000V",
    current: "1A",
  },

  {
    id: 18,
    name: "UF4001",
    categoryId: 112,
    packageType: "DO-41",
    reverseVoltage: "50V",
    current: "1A",
  },
  {
    id: 19,
    name: "UF4004",
    categoryId: 112,
    packageType: "DO-41",
    reverseVoltage: "400V",
    current: "1A",
  },
  {
    id: 20,
    name: "UF4007",
    categoryId: 112,
    packageType: "DO-41",
    reverseVoltage: "1000V",
    current: "1A",
  },

  {
    id: 21,
    name: "1N5817",
    categoryId: 113,
    packageType: "DO-41",
    reverseVoltage: "20V",
    current: "1A",
  },
  {
    id: 22,
    name: "1N5818",
    categoryId: 113,
    packageType: "DO-41",
    reverseVoltage: "30V",
    current: "1A",
  },
  {
    id: 23,
    name: "1N5819",
    categoryId: 113,
    packageType: "DO-41",
    reverseVoltage: "40V",
    current: "1A",
  },

  {
    id: 24,
    name: "1N5820",
    categoryId: 113,
    packageType: "DO-201AD",
    reverseVoltage: "20V",
    current: "3A",
  },
  {
    id: 25,
    name: "1N5821",
    categoryId: 113,
    packageType: "DO-201AD",
    reverseVoltage: "30V",
    current: "3A",
  },
  {
    id: 26,
    name: "1N5822",
    categoryId: 113,
    packageType: "DO-201AD",
    reverseVoltage: "40V",
    current: "3A",
  },

  {
    id: 27,
    name: "MB6S",
    categoryId: 114,
    packageType: "SMD",
    reverseVoltage: "600V",
    current: "0.5A",
  },
  {
    id: 28,
    name: "MB10S",
    categoryId: 114,
    packageType: "SMD",
    reverseVoltage: "1000V",
    current: "0.5A",
  },

  {
    id: 29,
    name: "DB107",
    categoryId: 114,
    packageType: "DIP",
    reverseVoltage: "1000V",
    current: "1A",
  },

  {
    id: 30,
    name: "KBP210",
    categoryId: 114,
    packageType: "KBP",
    reverseVoltage: "1000V",
    current: "2A",
  },
];

  const [expanded, setExpanded] = useState([1, 11]);
  const [selectedCategory, setSelectedCategory] = useState(111);
  const [selectedCategoryName, setSelectedCategoryName] = useState('Rectifier Diodes');
  const [search, setSearch] = useState("");
  const [packageTypes, setPackageTypes] = useState([]);

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

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = p.categoryId === selectedCategory;
      const matchSearch = p.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchPackage =
        packageTypes.length === 0 ||
        packageTypes.includes(p.packageType);

      return matchCategory && matchSearch && matchPackage;
    });
  }, [selectedCategory, search, packageTypes]);

  const TreeNode = ({ node, level = 0 }) => {
    const hasChildren = node.children?.length;
    const isExpanded = expanded.includes(node.id);

    function updateCategory(node) {
      setSelectedCategory(node.id);
      setSelectedCategoryName(node.name);
    }

    return (
      <li>
        <div
          className={`flex items-center justify-between rounded px-2 py-2 ${
            selectedCategory === node.id
              ? "bg-red-50 text-red-600"
              : "hover:bg-gray-50"
          }`}
          style={{ paddingLeft: `${level * 16 + 8}px` }}
        >
          <button
            className="flex-1 text-left text-sm"
            onClick={() => updateCategory(node)}
          >
            {node.name}
          </button>

          {hasChildren ? (
            <button onClick={() => toggleNode(node.id)}>
              {isExpanded ? (
                <ChevronDown size={14} />
              ) : (
                <ChevronRight size={14} />
              )}
            </button>
          ) : null}
        </div>

        {hasChildren && isExpanded && (
          <ul>
            {node.children.map((child) => (
              <TreeNode
                key={child.id}
                node={child}
                level={level + 1}
              />
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="relative h-72 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
          <div>
            <h1 className="text-5xl font-bold text-white">
              Our Products
            </h1>
            <p className="mt-3 text-white/80">
              Home / Products
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div>
            <div className="rounded-lg border bg-white">
              <div className="border-b p-4 font-semibold">
                Product Hierarchy
              </div>
              <div className="p-3">
                <ul>
                  {categories.map((c) => (
                    <TreeNode key={c.id} node={c} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-lg border bg-white">
              <div className="flex items-center justify-between border-b p-4">
                <h3 className="font-semibold">Filters</h3>
                <button
                  className="text-red-600 text-sm"
                  onClick={() => {
                    setSearch("");
                    setPackageTypes([]);
                  }}
                >
                  Clear
                </button>
              </div>

              <div className="p-4">
                <div className="relative">
                  <Search
                    size={16}
                    className="absolute left-3 top-3 text-gray-400"
                  />
                  <input
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder="Search product"
                    className="w-full rounded border py-2 pl-9 pr-3"
                  />
                </div>

                <div className="mt-5">
                  <h4 className="mb-2 font-medium">
                    Package Type
                  </h4>

                  {["DO-41", "DO-201AD"].map((type) => (
                    <label
                      key={type}
                      className="mb-2 flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        checked={packageTypes.includes(type)}
                        onChange={() =>
                          togglePackage(type)
                        }
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-3xl font-bold">
                {selectedCategoryName}
              </h2>

              <select className="rounded border px-3 py-2">
                <option>Popularity</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? 
            <div className="rounded-lg border p-10 text-center">
              <h3 className="text-xl font-semibold">
                No Products Available
              </h3>

              <p className="mt-2 text-gray-500">
                Please select a sub-category to view
                available products.
              </p>
            </div>
          :
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-lg border bg-white p-4"
                >
                  <div className="h-28 overflow-hidden rounded bg-gray-100" >
                    <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1640955785023-1854685dae05?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {product.packageType}
                  </p>

                <Link
                  to={`/products/${product.id}`}
                  className="mt-4 block w-full rounded border border-red-600 py-2 text-center text-red-600 transition hover:bg-red-600 hover:text-white">
                  View Details
                </Link>
                </div>
              ))}
            </div>
          }
            
          </div>
        </div>
      </div>
    </div>
  );
}
