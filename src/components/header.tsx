"use client";

import { cn } from "@/lib/utils";

import { MaterialIcon } from "./material-icon";
import { Button } from "./ui/button";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";

type HeaderProps = {
  actions?: React.ReactNode;
};

export function Header({ actions }: HeaderProps) {
  const { isMobile, open } = useSidebar();

  return (
    <header
      className={cn(
        "fixed top-0 right-0 z-40 flex h-14 items-center justify-between border-b border-outline-variant bg-surface px-6 transition-[left] duration-200 ease-linear",
        isMobile ? "left-0" : open ? "left-(--sidebar-width)" : "left-(--sidebar-width-icon)"
      )}
    >
      <SidebarTrigger render={<Button size="icon-xs" variant="outline" className="mr-4" />} />

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 transition-colors outline-none hover:text-on-surface focus:ring-2 focus:ring-primary-container">
          <MaterialIcon className="text-on-surface-variant">help</MaterialIcon>
        </button>
        <div className="relative">
          <button className="rounded-full p-2 transition-colors outline-none hover:text-on-surface focus:ring-2 focus:ring-primary-container">
            <MaterialIcon className="text-on-surface-variant">notifications</MaterialIcon>
          </button>
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full border-2 border-surface bg-error" />
        </div>
        {actions}
      </div>
    </header>
  );
}
