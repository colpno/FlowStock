import { Suspense } from "react";

import { MainLayout } from "@/components/main-layout";

import PurchaseOrdersControlBar from "./components/purchase-orders-control-bar";
import PurchaseOrderItemsTable from "./components/purchase-orders-items-table";
import PurchaseOrdersStats from "./components/purchase-orders-stats";
import PurchaseOrdersTable from "./components/purchase-orders-table";
import PurchaseOrderItemsTableSkeleton from "./skeletons/purchase-order-items-table-skeleton";
import PurchaseOrdersStatsSkeleton from "./skeletons/purchase-orders-stats-skeleton";
import PurchaseOrdersTableSkeleton from "./skeletons/purchase-orders-table-skeleton";

export default function PurchaseOrdersPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="typo-headline-xl font-semibold tracking-tight">Purchase Orders</h2>
            <p className="typo-body-md text-on-surface-variant">
              Manage supplier purchase orders and procurement workflows.
            </p>
          </div>

          <PurchaseOrdersControlBar />
        </div>

        {/* Stats Grid */}
        <Suspense fallback={<PurchaseOrdersStatsSkeleton />}>
          <PurchaseOrdersStats />
        </Suspense>

        <div className="grid grid-cols-12 gap-6">
          {/* Purchase Orders Table */}
          <div className="col-span-12 lg:col-span-5">
            <Suspense fallback={<PurchaseOrdersTableSkeleton />}>
              <PurchaseOrdersTable />
            </Suspense>
          </div>

          {/* Items */}
          <div className="col-span-12 space-y-6 lg:col-span-7">
            <Suspense fallback={<PurchaseOrderItemsTableSkeleton />}>
              <PurchaseOrderItemsTable />
            </Suspense>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
