"use client";

import type { OrderStatus, SalesOrder } from "@/types/data";

import { faker } from "@faker-js/faker";
import z from "zod";

import InventoryForm from "@/app/inventory/forms/inventory-form";
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
import { getSalesOrder } from "@/lib/data";
import { useStore } from "@/stores/use-store";

import { useSalesOrdersTable } from "../hooks/use-sales-orders-table";
import SalesOrdersStatusEditor from "./sales-orders-status-editor";

export type SalesOrdersTableDef = SalesOrder;

const data: SalesOrdersTableDef[] = faker.helpers.multiple(getSalesOrder, { count: 34 });

const editSchema = z.any();

export default function SalesOrdersTable() {
  const isTableSortable = useStore((state) => state.salesOrders.isTableSortable);
  const isTableResizable = useStore((state) => state.salesOrders.isTableResizable);
  const hiddenTableColumns = useStore((state) => state.salesOrders.hiddenTableColumns);
  const { columns, openDialog, setOpenDialog, editData } = useSalesOrdersTable();

  const handleStatusChange = (newStatus: OrderStatus) => {
    console.log(newStatus);
  };

  const handleUpdate = (formData: z.infer<typeof editSchema>) => {
    console.log(formData);
  };

  return (
    <>
      <Table
        columns={columns}
        data={data}
        hiddenColumns={hiddenTableColumns.order}
        sortable={isTableSortable}
        resizable={isTableResizable}
      />

      <Dialog
        open={openDialog === "edit-status"}
        onOpenChange={(open) => setOpenDialog(open ? "edit-status" : null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Status Editor</DialogTitle>
          </DialogHeader>
          <SalesOrdersStatusEditor onSubmitAction={handleStatusChange} />
        </DialogContent>
      </Dialog>

      <Dialog
        open={openDialog === "edit-form"}
        onOpenChange={(open) => setOpenDialog(open ? "edit-form" : null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order Editor</DialogTitle>
          </DialogHeader>
          <InventoryForm
            schema={editSchema}
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
