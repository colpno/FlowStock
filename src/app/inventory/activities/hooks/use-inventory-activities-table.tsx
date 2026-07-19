import type { InventoryActivitiesTableDef } from "../components/inventory-activities-table";

import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";

import { COLOR_SETS } from "@/constants/colors";
import { cn, toPascalCase } from "@/lib/utils";

export const useInventoryActivitiesTable = () => {
  const columnHelper = createColumnHelper<InventoryActivitiesTableDef>();

  const columns = useMemo(
    () => [
      columnHelper.accessor("movement_no", {
        header: "Movement No",
        size: 200,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
      }),
      columnHelper.accessor("movement_type", {
        header: "Type",
        size: 150,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        cell: (props) => toPascalCase(props.getValue().replaceAll("_", " ")),
      }),
      columnHelper.accessor("moved_by", {
        header: "By",
        size: 150,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        cell: (props) => props.row.original.moved_by_name,
      }),
      columnHelper.accessor("warehouse_id", {
        header: "Warehouse",
        size: 200,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        cell: (props) => <p className="typo-table-data">{props.row.original.warehouse_name}</p>,
      }),
      columnHelper.accessor("product_id", {
        header: "Product",
        size: 300,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        cell: (props) => (
          <div>
            <p className="typo-table-data">{props.row.original.product_name}</p>
            <p className="typo-label-sm text-muted">SKU: {props.row.original.product_sku}</p>
          </div>
        ),
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
              "typo-table-data",
              props.getValue() > 0 ? COLOR_SETS.SUCCESS.text : COLOR_SETS.DANGER.text
            )}
          >
            {props.getValue() > 0 ? `+${props.getValue()}` : props.getValue()}
          </p>
        ),
      }),
      columnHelper.accessor("old_quantity", {
        header: "Old Quantity",
        size: 100,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        meta: {
          align: "center",
        },
      }),
      columnHelper.accessor("reason", {
        header: "Reason",
        size: 300,
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
