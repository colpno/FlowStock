import { KPICard } from "@/components/kpi-card";
import { MaterialIcon } from "@/components/material-icon";

export default function InventoryStats() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Total SKUs */}
      <KPICard
        icon="inventory"
        label="Total SKUs"
        value="12,482"
        status="success"
        change={
          <>
            <MaterialIcon size={14}>trending_up</MaterialIcon>
            +2.4% from last month
          </>
        }
      />

      {/* Low Stock Alerts */}
      <KPICard
        icon="warning"
        label="Low Stock Alerts"
        value="48"
        status="warning"
        change="Requiring immediate attention"
      />

      {/* Out of Stock */}
      <KPICard
        icon="dangerous"
        label="Out of Stock"
        value="12"
        status="critical"
        change="Critical production impact"
      />

      {/* Total Valuation */}
      <KPICard
        icon="payments"
        label="Total Valuation"
        value="$4.2M"
        change="FOB Warehouse Pricing"
      />
    </div>
  );
}
