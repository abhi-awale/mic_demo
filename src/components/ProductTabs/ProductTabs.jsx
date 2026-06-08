import { useState } from "react";
import TabsHeader from "./TabsHeader";
import OverviewTab from "./OverviewTab";
import SpecificationsTab from "./SpecificationsTab";
import FeaturesTab from "./FeaturesTab";
import ApplicationsTab from "./ApplicationsTab";
import PackageTab from "./PackageTab";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    "overview",
    "specifications",
    "features",
    "applications",
    "package information",
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <TabsHeader
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="mt-10">
          {activeTab === "overview" && (
            <OverviewTab product={product} />
          )}

          {activeTab === "specifications" && (
            <SpecificationsTab />
          )}

          {activeTab === "features" && (
            <FeaturesTab />
          )}

          {activeTab === "applications" && (
            <ApplicationsTab />
          )}

          {activeTab === "package information" && (
            <PackageTab product={product} />
          )}
        </div>
      </div>
    </section>
  );
}