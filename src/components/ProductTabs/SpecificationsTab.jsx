import SpecificationsTable from "./SpecificationsTable";
import SpecificationsList from "./SpecificationsList";

const specifications = [
   {
      parameter:
        "Maximum Repetitive Peak Reverse Voltage",
      symbol: "VRRM",
      value: "1000",
      unit: "V",
    },
    {
      parameter: "Maximum RMS Voltage",
      symbol: "VRMS",
      value: "700",
      unit: "V",
    },
    {
      parameter: "Maximum DC Blocking Voltage",
      symbol: "VDC",
      value: "1000",
      unit: "V",
    },
    {
      parameter:
        "Maximum Average Forward Current",
      symbol: "IF(AV)",
      value: "1.0",
      unit: "A",
    },
    {
      parameter:
        "Peak Forward Surge Current",
      symbol: "IFSM",
      value: "30",
      unit: "A",
    },
    {
      parameter:
        "Maximum Forward Voltage",
      symbol: "VF",
      value: "1.1",
      unit: "V",
    },
];

export default function SpecificationsTab() {
  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">
        Technical Specifications
      </h2>

      {/* Mobile */}
      <div className="md:hidden">
        <SpecificationsList
          specifications={specifications}
        />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <SpecificationsTable
          specifications={specifications}
        />
      </div>
    </div>
  );
}