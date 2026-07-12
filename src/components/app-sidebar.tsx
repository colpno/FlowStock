"use client";

import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

import { MaterialIcon } from "./material-icon";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "./ui/sidebar";

type SidebarProps = {
  activeTab?: string;
  user?: {
    name: string;
    role: string;
    image?: string;
  };
  children?: React.ReactNode;
};

const NAVIGATION_ITEMS = [
  { href: "/dashboard", icon: "dashboard", label: "Dashboard" },
  { href: "/inventory", icon: "inventory_2", label: "Inventory" },
  { href: "/customer-orders", icon: "shopping_cart", label: "Orders" },
  { href: "/users", icon: "group", label: "User Management" },
  { href: "/roles-permissions", icon: "verified_user", label: "Roles & Permissions" },
  { href: "/audit-logs", icon: "history", label: "Audit Logs" },
  { href: "/settings", icon: "settings", label: "Settings" },
];

export function AppSidebar({
  activeTab = "/dashboard",
  user = {
    name: "Alex Morgan",
    role: "SUPER ADMIN",
  },
}: SidebarProps) {
  const { open, isMobile } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      style={
        {
          "--sidebar-width-icon": "3.6rem",
        } as React.CSSProperties
      }
    >
      <SidebarHeader className="mb-2">
        <SidebarMenuButton tooltip="Home" className="h-12" render={<Link href="/" />}>
          {!open && <MaterialIcon>home</MaterialIcon>}
          <div className="h-full">
            <h1 className="typo-headline-md font-semibold tracking-tight text-on-surface">
              FlowStock Pro
            </h1>
            <p className="mt-0.5 text-xs tracking-widest text-outline uppercase">Operations Hub</p>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className={cn(!isMobile && !open && "gap-2")}>
            {NAVIGATION_ITEMS.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  tooltip={item.label}
                  render={
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-5 typo-body-md transition-colors",
                        activeTab === item.href
                          ? "bg-secondary-container font-semibold text-on-secondary-container active:scale-[0.98]"
                          : "text-on-surface-variant hover:bg-surface-container-high"
                      )}
                    />
                  }
                >
                  <MaterialIcon className="text-[20px]">{item.icon}</MaterialIcon>
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-3 rounded-lg bg-surface-container p-2">
          <img
            className="size-8 rounded-full object-cover"
            alt="User avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ2sD-H0QmbiCYmL4R6rWqy3mIuYIu4TOXSH6JELeOJyCUqtGQmu9EDxVtk5K9hGad1iGdHvxeDYTxaHBsrihYyPugUg7He24MF-jJ2LLCns-96cyCOCOgkmKnm-DGAGFZ2r7TYR2d_dP4MN9EfsGOOZ-2xoe_j7dEazk1z5H4HourtHo8aK0cQtYBDKBm9IPmYSn1D28HwVQgSwtDFZ3suX0nOL7FSvq50e9Cdfv0kMVGWiXfL1lR70KxLs9qO_Y2AWe-oCDHFHs"
          />
          <div className="overflow-hidden">
            <p className="truncate typo-body-sm font-semibold">{user.name}</p>
            <p className="truncate text-[10px] text-outline uppercase">{user.role}</p>
          </div>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
