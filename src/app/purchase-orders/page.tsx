"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { MainLayout } from "@/components/main-layout";
import { MaterialIcon } from "@/components/material-icon";
import { Button } from "@/components/ui/button";

export default function PurchaseOrdersPage() {
  return (
    <>
      <AppSidebar activeTab="/purchase-orders" />
      <Header />
      <MainLayout>
        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="typo-headline-xl font-semibold tracking-tight">Purchase Orders</h2>
              <p className="typo-body-md text-on-surface-variant">
                Manage supplier purchase orders and procurement workflows.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <MaterialIcon size={16}>filter_list</MaterialIcon>
                Filter
              </Button>
              <Button size="sm">
                <MaterialIcon size={16}>add_circle</MaterialIcon>
                New Order
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Total POs */}
            <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="typo-label-sm font-bold tracking-wider text-outline uppercase">
                  Total POs
                </span>
                <MaterialIcon className="text-primary">receipt</MaterialIcon>
              </div>
              <div className="typo-headline-lg font-semibold tracking-tight">2,548</div>
              <div className="mt-1 flex items-center gap-1 typo-label-md text-success">
                <MaterialIcon size={14}>trending_up</MaterialIcon>
                +3.2%
              </div>
            </div>

            {/* Pending */}
            <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="typo-label-sm font-bold tracking-wider text-outline uppercase">
                  Pending
                </span>
                <MaterialIcon className="text-warning">schedule</MaterialIcon>
              </div>
              <div className="typo-headline-lg font-semibold tracking-tight">89</div>
              <div className="mt-1 flex items-center gap-1 typo-label-md text-warning">
                <MaterialIcon size={14}>access_time</MaterialIcon>
                Awaiting approval
              </div>
            </div>

            {/* Received */}
            <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="typo-label-sm font-bold tracking-wider text-outline uppercase">
                  Received
                </span>
                <MaterialIcon className="text-success">check_circle</MaterialIcon>
              </div>
              <div className="typo-headline-lg font-semibold tracking-tight">1,924</div>
              <div className="mt-1 flex items-center gap-1 typo-label-md text-success">
                <MaterialIcon size={14}>verified</MaterialIcon>
                Complete
              </div>
            </div>

            {/* Total Value */}
            <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="typo-label-sm font-bold tracking-wider text-outline uppercase">
                  Total Value
                </span>
                <MaterialIcon className="text-secondary">currency_exchange</MaterialIcon>
              </div>
              <div className="typo-headline-lg font-semibold tracking-tight">$12.3M</div>
              <div className="mt-1 typo-label-md text-on-surface-variant">YTD Spending</div>
            </div>
          </div>

          {/* Purchase Orders Table */}
          <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead className="border-b border-outline-variant bg-surface-container-low">
                  <tr>
                    <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                      PO Number
                    </th>
                    <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                      Supplier
                    </th>
                    <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                      Amount
                    </th>
                    <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                      Status
                    </th>
                    <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-outline-variant transition-colors hover:bg-surface-container-low">
                    <td className="px-4 py-3 typo-table-data font-medium">PO-2025-001</td>
                    <td className="px-4 py-3 typo-table-data">Global Suppliers</td>
                    <td className="px-4 py-3 typo-table-data font-semibold">$54,200</td>
                    <td className="px-4 py-3 typo-table-data">
                      <span className="inline-block rounded-full bg-success/20 px-2 py-1 typo-label-sm text-success">
                        Received
                      </span>
                    </td>
                    <td className="px-4 py-3 typo-table-data text-on-surface-variant">
                      2025-12-10
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
