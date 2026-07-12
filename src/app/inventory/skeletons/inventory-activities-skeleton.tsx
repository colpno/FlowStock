import { Skeleton } from "@/components/ui/skeleton";

export default function InventoryActivitiesSkeleton() {
  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5">
      <h4 className="mb-4 typo-headline-md font-semibold">Recent Activity</h4>
      <div className="space-y-3">
        {Array(14)
          .fill(0)
          .map((_, i) => (
            <div key={`recent-${i}`} className="flex items-center gap-3">
              <Skeleton className="h-10 w-8 rounded-full" />

              <div className="flex-1 space-y-1">
                <Skeleton className="h-4 w-25 rounded-sm" />
                <Skeleton className="h-2 w-13 rounded-[3px]" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
