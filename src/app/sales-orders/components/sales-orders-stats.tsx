import { KPICard } from "@/components/kpi-card";
import { MaterialIcon } from "@/components/material-icon";

export default function SalesOrdersStats() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Total Orders */}
      <KPICard
        icon="analytics"
        label="Total Orders"
        value="12,842"
        status="success"
        change={
          <>
            <MaterialIcon size={14}>trending_up</MaterialIcon>
            +8.4%
          </>
        }
      />

      {/* Pending */}
      <KPICard
        icon="pending_actions"
        label="Pending"
        value="142"
        status="warning"
        change={
          <>
            <MaterialIcon size={14}>priority_high</MaterialIcon>
            12 Urgent
          </>
        }
      />

      {/* Shipped Today */}
      <KPICard icon="local_shipping" label="Shipped Today" value="892" change="Goal: 1,000" />

      {/* Revenue (MOM) */}
      <KPICard
        icon="payments"
        label="Revenue (MOM)"
        value="$428.5k"
        status="success"
        change={
          <>
            <MaterialIcon size={14}>arrow_upward</MaterialIcon>
            12.5%
          </>
        }
      />
    </div>
  );
}
