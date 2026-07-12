"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { KPICard } from "@/components/kpi-card";
import { MainLayout } from "@/components/main-layout";
import { MaterialIcon } from "@/components/material-icon";
import { Button } from "@/components/ui/button";

export default function RolesPermissionsPage() {
  return (
    <>
      <AppSidebar activeTab="/roles" />
      <Header />
      <MainLayout className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="typo-headline-xl font-semibold tracking-tight">
              Role & Permission Management
            </h2>
            <p className="typo-body-md text-on-surface-variant">
              Configure roles, permissions, and access control policies.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <MaterialIcon size={16}>filter_list</MaterialIcon>
              Filter
            </Button>
            <Button size="sm">
              <MaterialIcon size={16}>add_circle</MaterialIcon>
              New Role
            </Button>
          </div>
        </div>

        {/* Roles Summary */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Total Roles */}
          <KPICard icon="verified_user" label="Total Roles" value="12" change="Active roles" />

          {/* Total Users */}
          <KPICard
            icon="groups"
            label="Total Users"
            value="1,284"
            status="success"
            change={
              <>
                <MaterialIcon size={14}>trending_up</MaterialIcon>
                +12 new
              </>
            }
          />

          {/* Custom Roles */}
          <KPICard
            icon="construction"
            label="Custom Roles"
            value="5"
            change="Organization-specific"
          />
        </div>

        {/* Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex rounded-lg bg-surface-container p-1">
            <button className="rounded-md bg-surface-container-lowest px-4 py-1 typo-body-sm font-medium text-on-surface shadow-sm">
              Roles
            </button>
            <button className="rounded-md px-4 py-1 typo-body-sm font-medium text-on-surface-variant transition-colors hover:text-on-surface">
              Permissions
            </button>
          </div>
        </div>

        {/* Roles Table */}
        <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead className="border-b border-outline-variant bg-surface-container-low">
                <tr>
                  <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                    Role Name
                  </th>
                  <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                    Description
                  </th>
                  <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                    Users
                  </th>
                  <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                    Permissions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-outline-variant transition-colors hover:bg-surface-container-low">
                  <td className="px-4 py-3 typo-table-data font-medium">Admin</td>
                  <td className="px-4 py-3 typo-table-data">Full system access</td>
                  <td className="px-4 py-3 typo-table-data">42</td>
                  <td className="px-4 py-3 typo-table-data">
                    <span className="inline-block rounded-full bg-primary-container/20 px-2 py-1 typo-label-sm text-primary">
                      All
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
