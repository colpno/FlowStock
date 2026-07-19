"use client";

import type { PurchaseOrderItemsTableDef } from "./purchase-orders-items-table";
import type { PurchaseOrdersTableDef } from "./purchase-orders-table";
import type { PurchaseTableName } from "@/stores/use-purchase-orders-store";

import z from "zod";

import { MaterialIcon } from "@/components/material-icon";
import TableControlBarFilter from "@/components/table/table-control-bar-filter";
import TableControlBarSettings from "@/components/table/table-control-bar-settings";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useStore } from "@/stores/use-store";

import PurchaseOrdersFilterForm from "../forms/purchase-orders-filter-form";
import PurchaseOrdersForm from "../forms/purchase-orders-form";

type HidableColumns = Omit<
  Omit<Record<keyof PurchaseOrdersTableDef, string>, "supplier_name"> &
    Omit<Record<keyof PurchaseOrderItemsTableDef, string>, "product_name" | "product_sku">,
  "id"
>;

const hidableColumns: HidableColumns = {
  order_no: "Order No",
  supplier_id: "Supplier",
  status: "Status",
  courier_no: "Courier No",
  order_id: "Order Id",
  product_id: "Product",
  quantity: "Quantity",
  cost: "Cost",
  currency_code: "Currency",
  created_at: "Created At",
  updated_at: "Updated At",
};

const filterSchema = z.any();

const addItemSchema = z.any();

export default function PurchaseOrdersControlBar() {
  const hiddenTableColumns = useStore((state) => state.purchaseOrders.hiddenTableColumns);
  const hideTableColumn = useStore((state) => state.purchaseOrders.hideTableColumn);
  const unhideTableColumn = useStore((state) => state.purchaseOrders.unhideTableColumn);
  const isTableSortable = useStore((state) => state.purchaseOrders.isTableSortable);
  const setIsTableSortable = useStore((state) => state.purchaseOrders.setIsTableSortable);
  const isTableResizable = useStore((state) => state.purchaseOrders.isTableResizable);
  const setIsTableResizable = useStore((state) => state.purchaseOrders.setIsTableResizable);

  const handleColumnHiding = (
    col: (typeof hiddenTableColumns.order)[number] | (typeof hiddenTableColumns.item)[number],
    checked: boolean
  ) => {
    const isOrderTable = (
      ["id", "courier_no", "supplier_id", "supplier_name", "status"] as Array<
        keyof PurchaseOrdersTableDef
      >
    ).some((orderCol) => orderCol === col);
    const tableName: PurchaseTableName = isOrderTable ? "orders-table" : "items-table";

    if (checked) {
      hideTableColumn(tableName, col);
    } else {
      unhideTableColumn(tableName, col);
    }
  };

  const handleAddItem = (data: PurchaseOrdersTableDef): void | Promise<void> => {
    console.log("🚀 ~ handleAddItem ~ data:", data);
  };

  return (
    <div className="flex gap-3">
      <TableControlBarSettings
        hidableColumns={hidableColumns}
        hiddenColumns={[...hiddenTableColumns.order, ...hiddenTableColumns.item]}
        sortable={isTableSortable}
        resizable={isTableResizable}
        onHidableColumnClick={handleColumnHiding}
        onSortClick={setIsTableSortable}
        onResizeClick={setIsTableResizable}
      />

      <TableControlBarFilter
        title="Filter Supplier Orders"
        formSchema={filterSchema}
        onSubmit={console.log}
      >
        <PurchaseOrdersFilterForm />
      </TableControlBarFilter>

      <Dialog>
        <DialogTrigger render={<Button size="sm" />}>
          <MaterialIcon size={18}>add</MaterialIcon>
          New Item
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Item Creation</DialogTitle>
          </DialogHeader>
          <PurchaseOrdersForm schema={addItemSchema} onSubmit={handleAddItem} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
