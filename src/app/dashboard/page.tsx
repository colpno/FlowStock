"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { KPICard } from "@/components/kpi-card";
import { MainLayout } from "@/components/main-layout";
import { MaterialIcon } from "@/components/material-icon";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <>
      <AppSidebar activeTab="/dashboard" />
      <Header />
      <MainLayout className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="typo-headline-xl font-semibold tracking-tight">Executive Dashboard</h2>
            <p className="typo-body-md text-on-surface-variant">
              Real-time logistics performance and system status overview.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <MaterialIcon size={16}>download</MaterialIcon>
              Export Data
            </Button>
            <Button size="sm">
              <MaterialIcon size={16}>refresh</MaterialIcon>
              Refresh Stats
            </Button>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Revenue */}
          <KPICard
            icon="payments"
            label="Total Revenue"
            value="$1,284,500.00"
            status="success"
            change={
              <>
                <MaterialIcon size={14}>trending_up</MaterialIcon>
                +2.4% from last month
              </>
            }
          />

          {/* Active Orders */}
          <KPICard
            icon="local_shipping"
            label="Active Orders"
            value="1,402"
            status="success"
            change={
              <>
                <MaterialIcon size={14}>arrow_upward</MaterialIcon>
                +5.2%
              </>
            }
          />

          {/* Low Stock Items (Critical) */}
          <KPICard
            icon="inventory"
            label="Low Stock Items"
            value="12"
            status="critical"
            change="CRITICAL"
          />

          {/* Warehouse Capacity */}
          <KPICard icon="warehouse" label="Warehouse Capacity" value="84%" change="840 / 1k Bins">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-container">
              <div className="h-full rounded-full bg-warning" style={{ width: "84%" }} />
            </div>
          </KPICard>
        </div>

        {/* Bento Content Area */}
        <div className="grid grid-cols-12 gap-6">
          {/* Performance Chart */}
          <div className="col-span-12 overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest lg:col-span-8">
            <div className="flex items-end justify-between border-b border-outline-variant p-5">
              <div>
                <h4 className="typo-headline-md font-semibold">Sales Performance</h4>
                <p className="typo-body-sm text-outline">
                  Net revenue vs order volume (last 30 days)
                </p>
              </div>
              <select className="rounded-md border-outline-variant bg-surface-container-low px-2 py-1 typo-body-sm outline-none">
                <option>Last 30 Days</option>
                <option>Quarter to Date</option>
                <option>Year to Date</option>
              </select>
            </div>
            <div className="relative flex min-h-90 flex-col justify-end p-6">
              {/* Chart Placeholder */}
              <div className="flex h-full w-full items-center justify-center rounded-lg bg-surface-container-low/50 py-8 text-on-surface-variant">
                <div className="flex flex-col items-center gap-2">
                  <MaterialIcon size={48} className="opacity-50">
                    bar_chart
                  </MaterialIcon>
                  <span className="typo-body-sm">Chart placeholder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Sidebar */}
          <div className="col-span-12 space-y-6 lg:col-span-4">
            {/* System Status */}
            <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5">
              <h4 className="mb-4 typo-headline-md font-semibold">System Status</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="typo-body-sm text-on-surface-variant">Database</span>
                  <span className="inline-block h-2 w-2 rounded-full bg-success" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="typo-body-sm text-on-surface-variant">Cache Layer</span>
                  <span className="inline-block h-2 w-2 rounded-full bg-success" />
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5">
              <h4 className="mb-4 typo-headline-md font-semibold">Recent Activity</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="mt-1 rounded-full bg-primary-container/20 p-2 text-primary">
                    <MaterialIcon size={16}>check_circle</MaterialIcon>
                  </div>
                  <div className="flex-1">
                    <p className="typo-body-sm font-medium">Order #34891</p>
                    <p className="text-[11px] text-outline">Delivered</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="mt-1 rounded-full bg-warning/20 p-2 text-warning">
                    <MaterialIcon size={16}>schedule</MaterialIcon>
                  </div>
                  <div className="flex-1">
                    <p className="typo-body-sm font-medium">Stock Alert</p>
                    <p className="text-[11px] text-outline">Low inventory</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="mt-1 rounded-full bg-secondary-container/20 p-2 text-secondary">
                    <MaterialIcon size={16}>person_add</MaterialIcon>
                  </div>
                  <div className="flex-1">
                    <p className="typo-body-sm font-medium">New User</p>
                    <p className="text-[11px] text-outline">Rachel Cooper</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
