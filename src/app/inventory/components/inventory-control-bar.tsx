"use client";

import type { InventoryTableDef } from "./inventory-table";

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

import InventoryFilterForm from "../forms/inventory-filter-form";
import InventoryForm from "../forms/inventory-form";

/** Pair of key - display text. */
const hidableColumns = {
  product_id: "Product",
  warehouse_id: "Warehouse",
  physical: "Physical",
  reserved: "Reserved",
  available: "Available",
} satisfies Partial<Record<keyof InventoryTableDef, string>>;

const filterSchema = z.any();

const addItemSchema = z.any();

export default function InventoryControlBar() {
  const hiddenTableColumns = useStore((state) => state.inventory.hiddenTableColumns);
  const hideTableColumn = useStore((state) => state.inventory.hideTableColumn);
  const unhideTableColumn = useStore((state) => state.inventory.unhideTableColumn);
  const isTableSortable = useStore((state) => state.inventory.isTableSortable);
  const setIsTableSortable = useStore((state) => state.inventory.setIsTableSortable);
  const isTableResizable = useStore((state) => state.inventory.isTableResizable);
  const setIsTableResizable = useStore((state) => state.inventory.setIsTableResizable);

  const handleCheckedChange = (id: keyof InventoryTableDef, checked: boolean) => {
    if (checked) {
      hideTableColumn(id);
    } else {
      unhideTableColumn(id);
    }
  };

  const handleAddItem = (data: InventoryTableDef): void | Promise<void> => {
    console.log("🚀 ~ handleAddItem ~ data:", data);
  };

  return (
    <div className="flex gap-3">
      <TableControlBarSettings
        hidableColumns={hidableColumns}
        hiddenColumns={hiddenTableColumns}
        sortable={isTableSortable}
        resizable={isTableResizable}
        onHidableColumnClick={handleCheckedChange}
        onSortClick={setIsTableSortable}
        onResizeClick={setIsTableResizable}
      />

      <TableControlBarFilter
        title="Filter Inventory"
        formSchema={filterSchema}
        onSubmit={console.log}
      >
        <InventoryFilterForm />
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
          <InventoryForm schema={addItemSchema} onSubmit={handleAddItem} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
