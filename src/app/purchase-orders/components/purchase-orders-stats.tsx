import { KPICard } from "@/components/kpi-card";
import { MaterialIcon } from "@/components/material-icon";
import { COLOR_SETS } from "@/constants/colors";

export default function PurchaseOrdersStats() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Total POs */}
      <KPICard
        icon="receipt"
        label="Total POs"
        value="2,548"
        change={
          <div className={COLOR_SETS.SUCCESS.text}>
            <MaterialIcon size={14}>trending_up</MaterialIcon>
            +3.2%
          </div>
        }
      />

      {/* Pending */}
      <KPICard
        icon="schedule"
        label="Pending"
        value="89"
        status="warning"
        change={
          <>
            <MaterialIcon size={14}>access_time</MaterialIcon>
            Awaiting approval
          </>
        }
      />

      {/* Received */}
      <KPICard
        icon="check_circle"
        label="Received"
        value="1,924"
        status="success"
        change={
          <>
            <MaterialIcon size={14}>verified</MaterialIcon>
            Complete
          </>
        }
      />

      {/* Total Value */}
      <KPICard icon="currency_exchange" label="Total Value" value="$12.3M" change="YTD Spending" />
    </div>
  );
}
