import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export default function ProductCategoryTree({
  categories,
  expanded,
  toggleNode,
  selectedCategory,
  onSelectCategory,
}) {
  const TreeNode = ({
    node,
    level = 0,
  }) => {
    const hasChildren =
      node.children?.length > 0;

    const isExpanded =
      expanded.includes(node.id);

    return (
      <li>
        <div
          className={`flex items-center justify-between rounded-lg px-2 py-2 transition ${
            selectedCategory === node.id
              ? "bg-red-50 text-red-600"
              : "hover:bg-gray-50"
          }`}
          style={{
            paddingLeft: `${
              level * 16 + 8
            }px`,
          }}
        >
          <button
            onClick={() =>
              onSelectCategory(node)
            }
            className="flex-1 text-left text-sm"
          >
            {node.name}
          </button>

          {hasChildren && (
            <button
              onClick={() =>
                toggleNode(node.id)
              }
              className="ml-2"
            >
              {isExpanded ? (
                <ChevronDown size={14} />
              ) : (
                <ChevronRight size={14} />
              )}
            </button>
          )}
        </div>

        {hasChildren &&
          isExpanded && (
            <ul>
              {node.children.map(
                (child) => (
                  <TreeNode
                    key={child.id}
                    node={child}
                    level={level + 1}
                  />
                )
              )}
            </ul>
          )}
      </li>
    );
  };

  return (
    <div className="rounded-xl border bg-white">
      <div className="border-b p-4">
        <h3 className="font-semibold">
          Product Categories
        </h3>
      </div>

      <div className="p-3">
        <ul>
          {categories.map(
            (category) => (
              <TreeNode
                key={category.id}
                node={category}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
}