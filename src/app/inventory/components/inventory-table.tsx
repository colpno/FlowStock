"use client";

import type { Inventory, Product, Warehouse } from "@/types/data";

import { faker } from "@faker-js/faker";
import z from "zod";

import Table from "@/components/table/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getInventory, getProduct, getWarehouse } from "@/lib/data";
import { useStore } from "@/stores/use-store";

import InventoryForm from "../forms/inventory-form";
import { useInventoryTable } from "../hooks/use-inventory-table";

export type InventoryTableDef = {
  product_name: Product["name"];
  product_sku: Product["sku"];
  warehouse_name: Warehouse["name"];
  available: number;
} & Inventory;

const data: InventoryTableDef[] = faker.helpers.multiple(
  () => ({
    ...getInventory(),
    product_name: getProduct().name,
    product_sku: getProduct().sku,
    warehouse_name: getWarehouse().name,
  }),
  { count: 23 }
);

const updateSchema = z.any();

export default function InventoryTable() {
  const isTableSortable = useStore((state) => state.inventory.isTableSortable);
  const isTableResizable = useStore((state) => state.inventory.isTableResizable);
  const hiddenTableColumns = useStore((state) => state.inventory.hiddenTableColumns);
  const { columns, openDialog, setOpenDialog, editData } = useInventoryTable();

  const handleUpdate = (formData: z.infer<typeof updateSchema>) => {
    console.log(formData);
  };

  return (
    <>
      <Table
        columns={columns}
        data={data}
        hiddenColumns={hiddenTableColumns}
        sortable={isTableSortable}
        resizable={isTableResizable}
      />

      <Dialog
        open={openDialog === "edit-form"}
        onOpenChange={(open) => setOpenDialog(open ? "edit-form" : null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Item</DialogTitle>
          </DialogHeader>
          <InventoryForm
            schema={updateSchema}
            onSubmit={handleUpdate}
            defaultValues={editData || undefined}
          />
        </DialogContent>
      </Dialog>

      <AlertDialog
        open={openDialog === "remove-alert"}
        onOpenChange={(open) => setOpenDialog(open ? "remove-alert" : null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
