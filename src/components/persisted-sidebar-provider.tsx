"use client";

import * as React from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { useStore } from "@/stores/use-store";

export function PersistedSidebarProvider({ children }: { children: React.ReactNode }) {
  const isOpen = useStore((state) => state.sidebar.open);
  const setIsOpen = useStore((state) => state.sidebar.setOpen);

  return (
    <SidebarProvider open={isOpen} onOpenChange={setIsOpen}>
      {children}
    </SidebarProvider>
  );
}
