"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { MainLayout } from "@/components/main-layout";

export default function CustomerOrdersPage() {
  return (
    <>
      <AppSidebar activeTab="/customer-orders" />
      <Header />
      <MainLayout className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="typo-headline-xl font-semibold tracking-tight">Customer Orders</h2>
            <p className="typo-body-md text-on-surface-variant">
              Manage and track all customer orders and shipments.
            </p>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
