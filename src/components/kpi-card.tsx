"use client";

import { cn } from "@/lib/utils";

import { MaterialIcon } from "./material-icon";

type KPICardProps = {
  icon: string;
  label: string;
  value?: string | number;
  change?: string | React.ReactNode;
  status?: "normal" | "success" | "warning" | "critical";
  children?: React.ReactNode;
};

const statusStyles = {
  normal: {
    textIcon: "text-primary",
    textChange: "text-on-surface-variant",
  },
  success: {
    textIcon: "text-primary",
    textChange: "text-success",
  },
  warning: {
    textIcon: "text-warning",
    textChange: "text-warning",
  },
  critical: {
    textIcon: "text-error",
    textChange: "text-error font-bold animate-pulse",
  },
};

export function KPICard({ icon, label, value, change, status = "normal", children }: KPICardProps) {
  const styles = statusStyles[status];

  return (
    <div
      className={cn(
        "rounded-xl border p-4",
        status === "critical"
          ? "relative overflow-hidden border-error/20 bg-error-container/20"
          : "border-outline-variant bg-surface-container-lowest"
      )}
    >
      <div className="mb-2 flex justify-between">
        <span
          className={cn(
            "mb-1 typo-label-sm tracking-wider uppercase",
            status === "critical" ? "font-semibold text-on-error-container" : "text-outline"
          )}
        >
          {label}
        </span>
        <div className={`rounded-lg ${styles.textIcon}`}>
          <MaterialIcon>{icon}</MaterialIcon>
        </div>
      </div>

      {value ? (
        <div className="flex items-center gap-3">
          <h3
            className={cn(
              status === "critical"
                ? "typo-headline-lg font-extrabold text-error"
                : "typo-headline-lg font-bold"
            )}
          >
            {value}
          </h3>

          {children}
        </div>
      ) : (
        children
      )}

      {change && (
        <span className={`mt-2 flex items-center gap-1 typo-label-md ${styles.textChange}`}>
          {change}
        </span>
      )}
    </div>
  );
}
