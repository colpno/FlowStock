"use client";

import { MaterialIcon } from "@/components/material-icon";

export default function AccessDeniedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface p-6">
      <div className="flex max-w-md flex-col items-center gap-6 text-center">
        <div className="rounded-full bg-error-container/20 p-6">
          <MaterialIcon className="text-error" size={64} fill>
            lock
          </MaterialIcon>
        </div>

        <div className="space-y-2">
          <h1 className="typo-headline-xl font-semibold text-on-surface">Access Denied</h1>
          <p className="typo-body-md text-on-surface-variant">
            You don&apos;t have permission to access this resource.
          </p>
        </div>

        <a
          href="/dashboard"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 typo-body-md font-medium text-on-primary transition-all hover:brightness-110"
        >
          <MaterialIcon size={20}>arrow_back</MaterialIcon>
          Return to Dashboard
        </a>
      </div>
    </main>
  );
}
