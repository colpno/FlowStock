import type { InventoryActivity as InventoryMovementType } from "@/types/data";

import { faker } from "@faker-js/faker";
import Link from "next/link";

import { COLOR_SETS } from "@/constants/colors";
import { ROUTES } from "@/constants/route";
import { getInventoryActivity } from "@/lib/data";
import { cn, toPascalCase } from "@/lib/utils";

const data: InventoryMovementType[] = faker.helpers.multiple(getInventoryActivity, { count: 12 });

export default function InventoryActivities() {
  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="typo-headline-md font-semibold">Recent Activity</h4>
        <Link
          href={ROUTES.inventory.children.activities.href}
          className="typo-body-sm text-on-primary-fixed-variant"
        >
          View all
        </Link>
      </div>
      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="flex-1">
              <p className="typo-body-sm font-medium">
                {toPascalCase(item.movement_type.replaceAll("_", " "))}
              </p>
              <p className="text-[11px] text-outline">{item.movement_no}</p>
            </div>
            <p
              className={cn(
                "typo-body-sm",
                item.change > 0 ? COLOR_SETS.SUCCESS.text : COLOR_SETS.DANGER.text
              )}
            >
              {item.change > 0 ? `+${item.change}` : item.change}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
