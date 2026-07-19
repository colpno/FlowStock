"use client";

import type { InventoryTableDef } from "../components/inventory-table";

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

const statusStyles = {
  normal: COLOR_SETS.SUCCESS,
  warning: COLOR_SETS.WARNING,
  critical: COLOR_SETS.DANGER,
};

export const useInventoryTable = () => {
  const [openDialog, setOpenDialog] = useState<null | "remove-alert" | "edit-form">(null);
  const [editData, setEditData] = useState<null | InventoryTableDef>(null);
  const columnHelper = createColumnHelper<InventoryTableDef>();

  const handleEditClick = (defaultValues: InventoryTableDef): void => {
    setOpenDialog("edit-form");
    setEditData(defaultValues);
  };

  const columns = useMemo(
    () => [
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
      columnHelper.accessor("warehouse_id", {
        header: "Warehouse",
        size: 300,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        cell: (props) => <p className="typo-table-data">{props.row.original.warehouse_name}</p>,
      }),
      columnHelper.display({
        header: "Status",
        size: 120,
        enableResizing: true,
        enableColumnFilter: true,
        enableHiding: true,
        meta: {
          align: "center",
        },
        cell: (props) => {
          const key: keyof typeof statusStyles =
            (props.row.getValue("available") as number) < 50
              ? "critical"
              : (props.row.getValue("available") as number) < 200
                ? "warning"
                : "normal";
          const textStyles = statusStyles[key].text;
          const backgroundStyles = statusStyles[key].background;
          const dotStyles = statusStyles[key].dot;
          const text =
            key === "critical" ? "Out of Stock" : key === "warning" ? "Low Stock" : "In Stock";
          return (
            <div
              className={`inline-flex w-max items-center justify-center gap-1 rounded-3xl px-2 py-0.5 ${backgroundStyles}`}
            >
              <div className={`size-1.5 rounded-full ${dotStyles}`} />
              <span className={`text-[10px] font-bold ${textStyles}`}>{text}</span>
            </div>
          );
        },
      }),
      columnHelper.accessor("physical", {
        header: "Physical",
        size: 80,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        meta: {
          align: "center",
        },
      }),
      columnHelper.accessor("reserved", {
        header: "Reserved",
        size: 80,
        enableResizing: true,
        enableColumnFilter: true,
        enableSorting: true,
        enableHiding: true,
        meta: {
          align: "center",
        },
      }),
      columnHelper.accessor("available", {
        header: "Available",
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

  return { columns, editData, openDialog, setOpenDialog };
};
