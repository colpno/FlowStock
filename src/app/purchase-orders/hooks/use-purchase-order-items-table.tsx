import type { PurchaseOrderItemsTableDef } from "../components/purchase-orders-items-table";

import { createColumnHelper } from "@tanstack/react-table";
import { useMemo, useState } from "react";

import { MaterialIcon } from "@/components/material-icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const usePurchaseOrderItemsTable = () => {
  const [openDialog, setOpenDialog] = useState<null | "remove-alert" | "edit-form">(null);
  const [editData, setEditData] = useState<null | PurchaseOrderItemsTableDef>(null);
  const columnHelper = createColumnHelper<PurchaseOrderItemsTableDef>();

  const handleEditClick = (defaultValues: PurchaseOrderItemsTableDef): void => {
    setOpenDialog("edit-form");
    setEditData(defaultValues);
  };

  const columns = useMemo(
    () => [
      columnHelper.accessor("product_id", {
        header: "Product",
        size: 250,
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
      columnHelper.accessor("quantity", {
        header: "Quantity",
        size: 80,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        meta: {
          align: "center",
        },
      }),
      columnHelper.accessor("cost", {
        header: "Cost",
        size: 80,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        meta: {
          align: "center",
        },
      }),
      columnHelper.accessor("currency_code", {
        header: "Currency",
        size: 80,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        meta: {
          align: "center",
        },
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
      columnHelper.display({
        id: "actions",
        header: "Actions",
        size: 50,
        meta: {
          align: "center",
        },
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MaterialIcon size={20}>more_vert</MaterialIcon>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => handleEditClick(row.original)}>
                  <MaterialIcon size={20}>edit</MaterialIcon>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-danger"
                  onClick={() => setOpenDialog("remove-alert")}
                >
                  <MaterialIcon size={20}>delete</MaterialIcon>
                  Remove
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      }),
    ],
    [columnHelper]
  );

  return { columns, editData, setEditData, openDialog, setOpenDialog };
};
