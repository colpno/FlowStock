import { Skeleton } from "@/components/ui/skeleton";

export default function InventoryStatsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 *:min-h-30 md:grid-cols-2 lg:grid-cols-4">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
