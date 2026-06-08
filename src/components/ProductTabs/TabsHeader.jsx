export default function TabsHeader({
  tabs,
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="overflow-x-auto border-b">
      <div className="flex min-w-max gap-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`border-b-2 px-2 py-4 text-sm font-medium capitalize transition ${
              activeTab === tab
                ? "border-red-600 text-red-600"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}