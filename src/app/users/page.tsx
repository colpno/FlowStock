"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { KPICard } from "@/components/kpi-card";
import { MainLayout } from "@/components/main-layout";
import { MaterialIcon } from "@/components/material-icon";
import { Button } from "@/components/ui/button";

export default function UsersPage() {
  return (
    <>
      <AppSidebar activeTab="/users" />
      <Header />
      <MainLayout className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="typo-headline-xl font-semibold tracking-tight">User Management</h2>
            <p className="typo-body-md text-on-surface-variant">
              Configure system access, roles, and security policies for all team members.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <MaterialIcon size={16}>filter_list</MaterialIcon>
              Filters
            </Button>
            <Button size="sm">
              <MaterialIcon size={16}>person_add</MaterialIcon>
              Add User
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Total Users */}
          <KPICard
            icon="groups"
            label="Total Users"
            value="1,284"
            status="success"
            change={
              <>
                <MaterialIcon size={14}>trending_up</MaterialIcon>
                +12%
              </>
            }
          />

          {/* Active Now */}
          <KPICard icon="bolt" label="Active Now" value="412" change="Across 8 regions" />

          {/* Pending Invites */}
          <KPICard icon="mail" label="Pending Invites" value="18">
            <span className="typo-label-sm font-bold text-error">Expires soon</span>
          </KPICard>

          {/* Role Distribution */}
          <KPICard icon="pie_chart" label="Role Distribution">
            <div className="flex h-2 items-center gap-1">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: "40%" }}
                title="Admin"
              />
              <div
                className="h-full rounded-full bg-secondary-container"
                style={{ width: "30%" }}
                title="Manager"
              />
              <div
                className="h-full rounded-full bg-tertiary-container"
                style={{ width: "20%" }}
                title="Sales"
              />
              <div
                className="h-full rounded-full bg-outline-variant"
                style={{ width: "10%" }}
                title="Other"
              />
            </div>
          </KPICard>
        </div>

        {/* Users Table */}
        <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead className="sticky top-0 border-b border-outline-variant bg-surface-container-low">
                <tr>
                  <th className="px-4 py-3 typo-label-sm font-bold tracking-wider whitespace-nowrap text-on-surface-variant uppercase">
                    <div className="flex items-center gap-2">
                      Name
                      <MaterialIcon size={14}>arrow_downward</MaterialIcon>
                    </div>
                  </th>
                  <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                    Email
                  </th>
                  <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                    Role
                  </th>
                  <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                    Status
                  </th>
                  <th className="px-4 py-3 text-right typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-outline-variant transition-colors hover:bg-surface-container-low">
                  <td className="px-4 py-3 typo-table-data font-medium">John Anderson</td>
                  <td className="px-4 py-3 typo-table-data text-on-surface-variant">
                    john@flowstock.com
                  </td>
                  <td className="px-4 py-3 typo-table-data">
                    <span className="inline-block rounded-full bg-primary-container/20 px-2 py-1 typo-label-sm text-primary">
                      Admin
                    </span>
                  </td>
                  <td className="px-4 py-3 typo-table-data">
                    <div className="flex items-center gap-1">
                      <span className="inline-block h-2 w-2 rounded-full bg-success" />
                      <span className="text-success">Active</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right typo-table-data">
                    <Button variant="ghost" size="sm">
                      <MaterialIcon size={14}>more_vert</MaterialIcon>
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-outline-variant transition-colors hover:bg-surface-container-low">
                  <td className="px-4 py-3 typo-table-data font-medium">Sarah Mitchell</td>
                  <td className="px-4 py-3 typo-table-data text-on-surface-variant">
                    sarah@flowstock.com
                  </td>
                  <td className="px-4 py-3 typo-table-data">
                    <span className="inline-block rounded-full bg-secondary-container/20 px-2 py-1 typo-label-sm text-secondary">
                      Manager
                    </span>
                  </td>
                  <td className="px-4 py-3 typo-table-data">
                    <div className="flex items-center gap-1">
                      <span className="inline-block h-2 w-2 rounded-full bg-success" />
                      <span className="text-success">Active</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right typo-table-data">
                    <Button variant="ghost" size="sm">
                      <MaterialIcon size={14}>more_vert</MaterialIcon>
                    </Button>
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
