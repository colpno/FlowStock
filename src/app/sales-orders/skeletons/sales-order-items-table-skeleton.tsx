import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const widths = [
  ["w-12", "w-14", "w-16", "w-18", "w-20"],
  ["w-24", "w-32", "w-28", "w-36", "w-40"],
  ["w-24", "w-32", "w-28", "w-36", "w-40"],
  ["w-24", "w-32", "w-28", "w-36", "w-40"],
  ["w-12", "w-14", "w-16", "w-18", "w-20"],
  ["w-12", "w-14", "w-16", "w-18", "w-20"],
  ["w-12", "w-14", "w-16", "w-18", "w-20"],
];

export default function SalesOrderItemsTableSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead className="border-b border-outline-variant bg-surface-container-low">
            <tr>
              <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                Order ID
              </th>
              <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                Customer
              </th>
              <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                Amount
              </th>
              <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                Status
              </th>
              <th className="px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(widths.length).keys()].map((_, i) => (
              <tr
                key={`row-${i}`}
                className="border-b border-outline-variant transition-colors *:px-4 *:py-3 hover:bg-surface-container-low"
              >
                <td>
                  <Skeleton className={cn("h-5", widths[0]![i % widths[i]!.length])} />
                </td>
                <td>
                  <Skeleton className={cn("h-5", widths[1]![i % widths[i]!.length])} />
                </td>
                <td>
                  <Skeleton className={cn("h-5", widths[2]![i % widths[i]!.length])} />
                </td>
                <td>
                  <Skeleton className={cn("h-5", widths[3]![i % widths[i]!.length])} />
                </td>
                <td>
                  <Skeleton className={cn("h-5", widths[4]![i % widths[i]!.length])} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
