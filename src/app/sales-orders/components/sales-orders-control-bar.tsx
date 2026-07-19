"use client";

import type { SalesOrderItemsTableDef } from "./sales-order-items-table";
import type { SalesOrdersTableDef } from "./sales-orders-table";
import type { SalesTableName } from "@/stores/use-sales-orders-store";

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

import SalesOrdersFilterForm from "../forms/sales-orders-filter-form";
import SalesOrdersForm from "../forms/sales-orders-form";

type HidableColumns = Omit<
  Omit<Record<keyof SalesOrdersTableDef, string>, "customer_name"> &
    Omit<Record<keyof SalesOrderItemsTableDef, string>, "product_name" | "product_sku">,
  "id"
>;

const hidableColumns: HidableColumns = {
  document_id: "Document Id",
  customer_id: "Customer",
  status: "Status",
  courier_no: "Courier No",
  product_id: "Product",
  quantity: "Quantity",
  price: "Price",
  currency_code: "Currency",
  created_at: "Created At",
  updated_at: "Updated At",
};

const filterSchema = z.any();

const addItemSchema = z.any();

export default function SalesOrdersControlBar() {
  const hiddenTableColumns = useStore((state) => state.salesOrders.hiddenTableColumns);
  const hideTableColumn = useStore((state) => state.salesOrders.hideTableColumn);
  const unhideTableColumn = useStore((state) => state.salesOrders.unhideTableColumn);
  const isTableSortable = useStore((state) => state.salesOrders.isTableSortable);
  const setIsTableSortable = useStore((state) => state.salesOrders.setIsTableSortable);
  const isTableResizable = useStore((state) => state.salesOrders.isTableResizable);
  const setIsTableResizable = useStore((state) => state.salesOrders.setIsTableResizable);

  const handleColumnHiding = (
    col: (typeof hiddenTableColumns.order)[number] | (typeof hiddenTableColumns.item)[number],
    checked: boolean
  ) => {
    const isOrderTable = (
      ["id", "courier_no", "customer_id", "customer_name", "status"] as Array<
        keyof SalesOrdersTableDef
      >
    ).some((orderCol) => orderCol === col);
    const tableName: SalesTableName = isOrderTable ? "orders-table" : "items-table";

    if (checked) {
      hideTableColumn(tableName, col);
    } else {
      unhideTableColumn(tableName, col);
    }
  };

  const handleAddItem = (data: SalesOrdersTableDef): void | Promise<void> => {
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
        title="Filter Customer Orders"
        formSchema={filterSchema}
        onSubmit={console.log}
      >
        <SalesOrdersFilterForm />
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
          <SalesOrdersForm schema={addItemSchema} onSubmit={handleAddItem} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
