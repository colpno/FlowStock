"use client";

import { Suspense } from "react";

import { MainLayout } from "@/components/main-layout";

import InventoryActivities from "./components/inventory-activities";
import InventoryControlBar from "./components/inventory-control-bar";
import InventoryStats from "./components/inventory-stats";
import InventoryTable from "./components/inventory-table";
import InventoryActivitiesSkeleton from "./skeletons/inventory-activities-skeleton";
import InventoryStatsSkeleton from "./skeletons/inventory-stats-skeleton";
import InventoryTableSkeleton from "./skeletons/inventory-table-skeleton";

export default function InventoryPage() {
  return (
    <MainLayout className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="typo-headline-xl font-semibold tracking-tight">Inventory Management</h2>
          <p className="typo-body-md text-on-surface-variant">
            Real-time inventory levels, stock movements, and warehouse organization.
          </p>
        </div>

        <InventoryControlBar />
      </div>

      {/* Stats Grid */}
      <Suspense fallback={<InventoryStatsSkeleton />}>
        <InventoryStats />
      </Suspense>

      <div className="grid grid-cols-12 gap-6">
        {/* Table */}
        <div className="col-span-12 lg:col-span-8">
          <Suspense fallback={<InventoryTableSkeleton />}>
            <InventoryTable />
          </Suspense>
        </div>

        {/* Recent Activity */}
        <div className="col-span-12 space-y-6 lg:col-span-4">
          <Suspense fallback={<InventoryActivitiesSkeleton />}>
            <InventoryActivities />
          </Suspense>
        </div>
      </div>
    </MainLayout>
  );
}
