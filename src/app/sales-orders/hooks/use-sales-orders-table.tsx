import type { SalesOrdersTableDef } from "../components/sales-orders-table";
import type { SalesOrder } from "@/types/data";

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
import { COLOR_SETS } from "@/constants/colors";
import { toPascalCase } from "@/lib/utils";

const getStatusStyles = (status: SalesOrder["status"]) => {
  switch (status) {
    case "DELIVERED":
      return COLOR_SETS.SUCCESS;
    case "PROCESSING":
    case "PACKING":
      return COLOR_SETS.INFO;
    case "SHIPPING":
      return COLOR_SETS.WARNING;
    default:
      throw new Error(`Unsupported sales order status: ${status}`);
  }
};

export const useSalesOrdersTable = () => {
  const [openDialog, setOpenDialog] = useState<null | "edit-status" | "remove-alert" | "edit-form">(
    null
  );
  const [editData, setEditData] = useState<null | SalesOrdersTableDef>(null);
  const columnHelper = createColumnHelper<SalesOrdersTableDef>();

  const handleEditClick = (defaultValues: SalesOrdersTableDef): void => {
    setOpenDialog("edit-form");
    setEditData(defaultValues);
  };

  const columns = useMemo(
    () => [
      columnHelper.accessor("order_no", {
        header: "Order",
        size: 200,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
      }),
      columnHelper.accessor("status", {
        header: "Status",
        size: 100,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        cell: (props) => {
          const value = props.getValue();
          const textStyles = getStatusStyles(value).text;
          const backgroundStyles = getStatusStyles(value).background;
          const dotStyles = getStatusStyles(value).dot;

          return (
            <div
              onClick={() => setOpenDialog("edit-status")}
              className={`inline-flex w-max cursor-pointer items-center justify-center gap-1 rounded-3xl px-2 py-0.5 transition-colors hover:brightness-95 ${backgroundStyles}`}
            >
              <div className={`size-1.5 rounded-full ${dotStyles}`} />
              <span className={`text-[10px] font-bold ${textStyles}`}>{toPascalCase(value)}</span>
            </div>
          );
        },
      }),
      columnHelper.accessor("customer_id", {
        header: "Customer",
        size: 200,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        cell: (props) => (
          <div className="typo-table-data">
            <p>{props.row.original.customer_name}</p>
            <p className="typo-body-sm text-muted">{props.row.original.customer_phone}</p>
          </div>
        ),
      }),
      columnHelper.accessor("shipping_address", {
        header: "Shipping Address",
        size: 300,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
      }),
      columnHelper.accessor("courier_no", {
        header: "Courier No",
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
