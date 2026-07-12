"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { MainLayout } from "@/components/main-layout";

export default function InventoryPage() {
  return (
    <>
      <AppSidebar activeTab="/inventory" />
      <Header />
      <MainLayout className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="typo-headline-xl font-semibold tracking-tight">Inventory Management</h2>
            <p className="typo-body-md text-on-surface-variant">
              Real-time inventory levels, stock movements, and warehouse organization.
            </p>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
