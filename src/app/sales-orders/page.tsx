import { Suspense } from "react";

import { MainLayout } from "@/components/main-layout";

import SalesOrderItemsTable from "./components/sales-order-items-table";
import SalesOrdersControlBar from "./components/sales-orders-control-bar";
import SalesOrdersStats from "./components/sales-orders-stats";
import SalesOrdersTable from "./components/sales-orders-table";
import SalesOrderItemsTableSkeleton from "./skeletons/sales-order-items-table-skeleton";
import SalesOrdersStatsSkeleton from "./skeletons/sales-orders-stats-skeleton";
import SalesOrdersTableSkeleton from "./skeletons/sales-orders-table-skeleton";

export default function SalesOrdersPage() {
  return (
    <MainLayout className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="typo-headline-xl font-semibold tracking-tight">Sales Orders</h2>
          <p className="typo-body-md text-on-surface-variant">
            Manage and track all sales orders and shipments.
          </p>
        </div>

        <SalesOrdersControlBar />
      </div>

      {/* Stats Grid */}
      <Suspense fallback={<SalesOrdersStatsSkeleton />}>
        <SalesOrdersStats />
      </Suspense>

      {/* Table */}
      <div className="grid grid-cols-12 gap-6">
        {/* Sales Order */}
        <div className="col-span-12 lg:col-span-5">
          <Suspense fallback={<SalesOrdersTableSkeleton />}>
            <SalesOrdersTable />
          </Suspense>
        </div>

        {/* Items */}
        <div className="col-span-12 space-y-6 lg:col-span-7">
          <Suspense fallback={<SalesOrderItemsTableSkeleton />}>
            <SalesOrderItemsTable />
          </Suspense>
        </div>
      </div>
    </MainLayout>
  );
}
