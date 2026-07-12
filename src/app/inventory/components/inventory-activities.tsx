import type { Document, InventoryActivity as InventoryMovementType } from "@/types/data";

import { faker } from "@faker-js/faker";
import Link from "next/link";

import { MaterialIcon } from "@/components/material-icon";
import { COLOR_SETS } from "@/constants/colors";
import { ROUTES } from "@/constants/route";
import { getDocument, getInventoryActivity } from "@/lib/data";
import { cn } from "@/lib/utils";

const data: (InventoryMovementType & { document_type: Document["type"] })[] =
  faker.helpers.multiple(
    () => ({
      ...getInventoryActivity(),
      document_type: getDocument().type,
    }),
    {
      count: 12,
    }
  );

const iconStyle: Record<Document["type"], { icon: string; style: string }> = {
  TRANSFER: {
    icon: "swap_horiz",
    style: `${COLOR_SETS.INFO.background} ${COLOR_SETS.INFO.text} ${COLOR_SETS.INFO.border}`,
  },
  PURCHASE_RECEIPT: {
    icon: "package_2",
    style: `${COLOR_SETS.SUCCESS.background} ${COLOR_SETS.SUCCESS.text} ${COLOR_SETS.SUCCESS.border}`,
  },
  SHIPMENT: {
    icon: "delivery_truck_speed",
    style: `${COLOR_SETS.DANGER.background} ${COLOR_SETS.DANGER.text} ${COLOR_SETS.DANGER.border}`,
  },
  ADJUSTMENT: {
    icon: "edit",
    style: `${COLOR_SETS.WARNING.background} ${COLOR_SETS.WARNING.text} ${COLOR_SETS.WARNING.border}`,
  },
};

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
            <div className={cn("flex h-10 w-8 items-center justify-center rounded-full")}>
              <MaterialIcon size={22}>{iconStyle[item.document_type].icon}</MaterialIcon>
            </div>
            <div className="flex-1">
              <p className="typo-body-sm font-medium">{item.document_type}</p>
              <p className="text-[11px] text-outline">{item.document_id}</p>
            </div>
            <p
              className={cn(
                "typo-body-sm",
                item.change.startsWith("+") ? COLOR_SETS.SUCCESS.text : COLOR_SETS.DANGER.text
              )}
            >
              {item.change}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
