"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { MainLayout } from "@/components/main-layout";
import { MaterialIcon } from "@/components/material-icon";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <>
      <AppSidebar activeTab="/settings" />
      <Header />
      <MainLayout className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="typo-headline-xl font-semibold tracking-tight">Settings</h2>
            <p className="typo-body-md text-on-surface-variant">
              Configure system preferences, security, and integrations.
            </p>
          </div>
          <Button variant="outline" size="sm">
            <MaterialIcon size={16}>download</MaterialIcon>
            Backup Config
          </Button>
        </div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* General Settings */}
          <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-primary-container/20 p-2 text-primary">
                <MaterialIcon size={24}>tune</MaterialIcon>
              </div>
              <h3 className="typo-headline-md font-semibold">General</h3>
            </div>
            <p className="mb-4 typo-body-sm text-on-surface-variant">
              Configure basic system settings and preferences.
            </p>
            <Button variant="outline" size="sm">
              <MaterialIcon size={14}>arrow_forward</MaterialIcon>
              Configure
            </Button>
          </div>

          {/* Security Settings */}
          <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-secondary-container/20 p-2 text-secondary">
                <MaterialIcon size={24}>security</MaterialIcon>
              </div>
              <h3 className="typo-headline-md font-semibold">Security</h3>
            </div>
            <p className="mb-4 typo-body-sm text-on-surface-variant">
              Manage security policies and access controls.
            </p>
            <Button variant="outline" size="sm">
              <MaterialIcon size={14}>arrow_forward</MaterialIcon>
              Configure
            </Button>
          </div>

          {/* Integrations */}
          <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-tertiary-container/20 p-2 text-tertiary">
                <MaterialIcon size={24}>api</MaterialIcon>
              </div>
              <h3 className="typo-headline-md font-semibold">Integrations</h3>
            </div>
            <p className="mb-4 typo-body-sm text-on-surface-variant">
              Connect third-party services and APIs.
            </p>
            <Button variant="outline" size="sm">
              <MaterialIcon size={14}>arrow_forward</MaterialIcon>
              Configure
            </Button>
          </div>
        </div>

        {/* System Info */}
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
          <h3 className="mb-4 flex items-center gap-2 typo-headline-md font-semibold">
            <MaterialIcon size={24} className="text-on-surface-variant">
              info
            </MaterialIcon>
            System Information
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-surface-container p-4">
              <p className="mb-1 typo-label-sm font-bold tracking-wider text-outline uppercase">
                Version
              </p>
              <p className="typo-body-md font-semibold">2.4.1</p>
            </div>
            <div className="rounded-lg bg-surface-container p-4">
              <p className="mb-1 typo-label-sm font-bold tracking-wider text-outline uppercase">
                Database
              </p>
              <p className="typo-body-md font-semibold">PostgreSQL 14.2</p>
            </div>
            <div className="rounded-lg bg-surface-container p-4">
              <p className="mb-1 typo-label-sm font-bold tracking-wider text-outline uppercase">
                Last Backup
              </p>
              <p className="typo-body-md font-semibold">2025-12-15 02:00 UTC</p>
            </div>
            <div className="rounded-lg bg-surface-container p-4">
              <p className="mb-1 typo-label-sm font-bold tracking-wider text-outline uppercase">
                API Status
              </p>
              <div className="flex items-center gap-2 typo-body-md font-semibold">
                <span className="inline-block h-2 w-2 rounded-full bg-success" />
                Operational
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
