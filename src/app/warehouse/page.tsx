"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { MainLayout } from "@/components/main-layout";
import { MaterialIcon } from "@/components/material-icon";
import { Button } from "@/components/ui/button";

export default function WarehousePage() {
  return (
    <>
      <AppSidebar activeTab="/warehouse" />
      <Header />
      <MainLayout>
        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="typo-headline-xl font-semibold tracking-tight">
                Warehouse Management
              </h2>
              <p className="typo-body-md text-on-surface-variant">
                Monitor warehouse operations, locations, and logistics.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <MaterialIcon size={16}>filter_list</MaterialIcon>
                Filter
              </Button>
              <Button size="sm">
                <MaterialIcon size={16}>add_location</MaterialIcon>
                New Location
              </Button>
            </div>
          </div>

          {/* Warehouse Stats */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Total Warehouses */}
            <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="typo-label-sm font-bold tracking-wider text-outline uppercase">
                  Total Warehouses
                </span>
                <MaterialIcon className="text-primary">warehouse</MaterialIcon>
              </div>
              <div className="typo-headline-lg font-semibold tracking-tight">8</div>
              <div className="mt-1 typo-label-md text-on-surface-variant">Active locations</div>
            </div>

            {/* Total Capacity */}
            <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="typo-label-sm font-bold tracking-wider text-outline uppercase">
                  Total Capacity
                </span>
                <MaterialIcon className="text-secondary">storage</MaterialIcon>
              </div>
              <div className="typo-headline-lg font-semibold tracking-tight">42.5k</div>
              <div className="mt-1 typo-label-md text-on-surface-variant">Bin locations</div>
            </div>

            {/* Avg Utilization */}
            <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="typo-label-sm font-bold tracking-wider text-outline uppercase">
                  Avg Utilization
                </span>
                <MaterialIcon className="text-tertiary">trending_up</MaterialIcon>
              </div>
              <div className="typo-headline-lg font-semibold tracking-tight">78%</div>
              <div className="mt-1 flex items-center gap-1 typo-label-md text-warning">
                <MaterialIcon size={14}>warning</MaterialIcon>
                Near capacity
              </div>
            </div>

            {/* Active Shipments */}
            <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="typo-label-sm font-bold tracking-wider text-outline uppercase">
                  Active Shipments
                </span>
                <MaterialIcon className="text-success">local_shipping</MaterialIcon>
              </div>
              <div className="typo-headline-lg font-semibold tracking-tight">234</div>
              <div className="mt-1 flex items-center gap-1 typo-label-md text-success">
                <MaterialIcon size={14}>check_circle</MaterialIcon>
                In transit
              </div>
            </div>
          </div>

          {/* Warehouses Table */}
          <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead className="border-b border-outline-variant bg-surface-container-low">
                  <tr>
                    <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                      Location
                    </th>
                    <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                      Region
                    </th>
                    <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                      Capacity
                    </th>
                    <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                      Utilized
                    </th>
                    <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-outline-variant transition-colors hover:bg-surface-container-low">
                    <td className="px-4 py-3 typo-table-data font-medium">North Hub</td>
                    <td className="px-4 py-3 typo-table-data">Northeast</td>
                    <td className="px-4 py-3 typo-table-data">5,240</td>
                    <td className="px-4 py-3 typo-table-data">4,120</td>
                    <td className="px-4 py-3 typo-table-data">
                      <span className="inline-block rounded-full bg-success/20 px-2 py-1 typo-label-sm text-success">
                        Optimal
                      </span>
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
