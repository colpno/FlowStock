"use client";

import { cn } from "@/lib/utils";

type MainLayoutProps = {
  children: React.ReactNode;
} & React.ComponentProps<"div">;

export function MainLayout({ children, ...props }: MainLayoutProps) {
  return (
    <main className="mt-14 h-[calc(100vh-3.5rem)] w-full overflow-y-auto p-6">
      <div {...props} className={cn("mx-auto max-w-[1600px]", props.className)}>
        {children}
      </div>
    </main>
  );
}
