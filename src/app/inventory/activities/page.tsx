import { Suspense } from "react";
import z from "zod";

import { MainLayout } from "@/components/main-layout";
import TableControlBarFilter from "@/components/table/table-control-bar-filter";
import TableControlBarSettings from "@/components/table/table-control-bar-settings";

import InventoryActivitiesTable from "./components/inventory-activities-table";
import InventoryActivitiesFilterForm from "./forms/inventory-activities-filter-form";
import InventoryActivitiesTableSkeleton from "./skeletons/inventory-activities-table-skeleton";

const filterSchema = z.any();

export default function InventoryActivitiesPage() {
  return (
    <MainLayout className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="typo-headline-xl font-semibold tracking-tight">Inventory Movement</h2>
          <p className="typo-body-md text-on-surface-variant">
            Real-time inventory levels, stock movements, and warehouse organization.
          </p>
        </div>

        <div className="space-x-3">
          <TableControlBarSettings />

          <TableControlBarFilter
            title="Filter Inventory Activities"
            formSchema={filterSchema}
            onSubmit={console.log}
          >
            <InventoryActivitiesFilterForm />
          </TableControlBarFilter>
        </div>
      </div>

      {/* Table */}
      <Suspense fallback={<InventoryActivitiesTableSkeleton />}>
        <InventoryActivitiesTable />
      </Suspense>
    </MainLayout>
  );
}
