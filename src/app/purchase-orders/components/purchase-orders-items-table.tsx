"use client";

import type { Product, PurchaseOrderItem } from "@/types/data";

import { faker } from "@faker-js/faker";
import { useState } from "react";
import z from "zod";

import InventoryForm from "@/app/inventory/forms/inventory-form";
import { PaginationDesktop } from "@/components/pagination/pagination-desktop";
import PaginationInfo from "@/components/pagination/pagination-info";
import PaginationMobile from "@/components/pagination/pagination-mobile";
import PaginationProvider from "@/components/pagination/pagination-provider";
import { usePageParam } from "@/components/pagination/use-page-param";
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
import { getProduct, getPurchaseOrderItem } from "@/lib/data";
import { useStore } from "@/stores/use-store";

import { usePurchaseOrderItemsTable } from "../hooks/use-purchase-order-items-table";

export type PurchaseOrderItemsTableDef = {
  product_name: Product["name"];
  product_sku: Product["sku"];
} & Omit<PurchaseOrderItem, "id" | "purchase_order_id">;

const data: PurchaseOrderItemsTableDef[] = faker.helpers.multiple(
  () => ({
    ...getPurchaseOrderItem(),
    product_name: getProduct().name,
    product_sku: getProduct().sku,
  }),
  { count: 34 }
);

const editFormSchema = z.any();

export default function PurchaseOrderItemsTable() {
  const isTableSortable = useStore((state) => state.purchaseOrders.isTableSortable);
  const isTableResizable = useStore((state) => state.purchaseOrders.isTableResizable);
  const hiddenTableColumns = useStore((state) => state.purchaseOrders.hiddenTableColumns);
  const { columns, openDialog, setOpenDialog, editData, setEditData } =
    usePurchaseOrderItemsTable();

  const [page, setPage] = useState<number>(1);
  const { pageSize } = usePageParam({ page, pageSize: 10 });
  const totalItems = data.length;
  const pageCount = Math.ceil(totalItems / pageSize);

  return (
    <>
      <div>
        <Table
          columns={columns}
          data={data}
          hiddenColumns={hiddenTableColumns.item}
          sortable={isTableSortable}
          resizable={isTableResizable}
          pagination={false}
          emptyMessage="Please select an order to view its items."
        />

        <div>
          <PaginationProvider
            value={{ page, pageSize, totalItems, pageCount, onPageChange: setPage }}
          >
            <div className="flex items-center justify-between px-4 py-3">
              <PaginationInfo />

              <PaginationDesktop className="not-md:hidden" />
              <PaginationMobile className="md:hidden" />
            </div>
          </PaginationProvider>
        </div>
      </div>

      <Dialog
        open={openDialog === "edit-form"}
        onOpenChange={(open) => setOpenDialog(open ? "edit-form" : null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Item</DialogTitle>
          </DialogHeader>
          <InventoryForm
            schema={editFormSchema}
            onSubmit={setEditData}
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
