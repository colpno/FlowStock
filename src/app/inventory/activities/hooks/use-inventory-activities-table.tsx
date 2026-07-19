import type { InventoryActivitiesTableDef } from "../components/inventory-activities-table";

import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";

import { COLOR_SETS } from "@/constants/colors";
import { cn } from "@/lib/utils";

export const useInventoryActivitiesTable = () => {
  const columnHelper = createColumnHelper<InventoryActivitiesTableDef>();

  const columns = useMemo(
    () => [
      columnHelper.accessor("product_name", {
        header: "Product",
        size: 300,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        cell: (props) => (
          <div>
            <p className="typo-body-md">{props.row.original.product_name}</p>
            <p className="typo-label-sm text-muted">SKU: {props.row.original.product_sku}</p>
          </div>
        ),
      }),
      columnHelper.accessor("warehouse_id", {
        header: "Warehouse",
        size: 300,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        cell: (props) => <p className="typo-body-md">{props.row.original.warehouse_name}</p>,
      }),
      columnHelper.accessor("change", {
        header: "Change",
        size: 100,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        meta: {
          align: "center",
        },
        cell: (props) => (
          <p
            className={cn(
              "typo-body-sm",
              props.getValue().startsWith("+") ? COLOR_SETS.SUCCESS.text : COLOR_SETS.DANGER.text
            )}
          >
            {props.getValue()}
          </p>
        ),
      }),
      columnHelper.accessor("document_type", {
        header: "Type",
        size: 200,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
      }),
      columnHelper.accessor("created_at", {
        header: "Created At",
        size: 200,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        cell: (props) => new Date(props.getValue()).toLocaleString("vi-VN"),
      }),
      columnHelper.accessor("updated_at", {
        header: "Updated At",
        size: 200,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        cell: (props) => new Date(props.getValue()).toLocaleString("vi-VN"),
      }),
    ],
    [columnHelper]
  );

  return { columns };
};
