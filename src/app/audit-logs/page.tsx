"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { KPICard } from "@/components/kpi-card";
import { MainLayout } from "@/components/main-layout";
import { MaterialIcon } from "@/components/material-icon";
import { Button } from "@/components/ui/button";

export default function AuditLogsPage() {
  return (
    <>
      <AppSidebar activeTab="/audit-logs" />
      <Header />
      <MainLayout className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="typo-headline-xl font-semibold tracking-tight">Audit Logs</h2>
            <p className="typo-body-md text-on-surface-variant">
              Track system activities, changes, and user actions for compliance.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <MaterialIcon size={16}>filter_list</MaterialIcon>
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <MaterialIcon size={16}>download</MaterialIcon>
              Export
            </Button>
          </div>
        </div>

        {/* Activity Summary */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Total Events */}
          <KPICard
            icon="event_note"
            label="Total Events"
            value="48,291"
            status="success"
            change="This month"
          />

          {/* User Actions */}
          <KPICard
            icon="person"
            label="User Actions"
            value="12,485"
            status="success"
            change={
              <>
                <MaterialIcon size={14}>trending_up</MaterialIcon>
                +2.4%
              </>
            }
          />

          {/* System Changes */}
          <KPICard
            icon="tune"
            label="System Changes"
            value="3,847"
            change="Configuration updates"
          />
        </div>

        {/* Audit Logs Table */}
        <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead className="border-b border-outline-variant bg-surface-container-low">
                <tr>
                  <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                    User
                  </th>
                  <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                    Action
                  </th>
                  <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                    Resource
                  </th>
                  <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                    Timestamp
                  </th>
                  <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-outline-variant transition-colors hover:bg-surface-container-low">
                  <td className="px-4 py-3 typo-table-data font-medium">John Doe</td>
                  <td className="px-4 py-3 typo-table-data">User created</td>
                  <td className="px-4 py-3 typo-table-data">sarah@example.com</td>
                  <td className="px-4 py-3 typo-table-data text-on-surface-variant">
                    2025-12-15 14:32
                  </td>
                  <td className="px-4 py-3 typo-table-data">
                    <span className="inline-block rounded-full bg-success/20 px-2 py-1 typo-label-sm text-success">
                      Success
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
