import type { Customer, OrderStatus, SalesOrder } from "@/types/data";

import { faker } from "@faker-js/faker";

import Table from "@/components/table/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getCustomer, getSalesOrder } from "@/lib/data";
import { useStore } from "@/stores/use-store";

import { useSalesOrdersTable } from "../hooks/use-sales-orders-table";
import SalesOrdersStatusEditor from "./sales-orders-status-editor";

export type SalesOrdersTableDef = {
  customer_name: Customer["name"];
} & SalesOrder;

const data: SalesOrdersTableDef[] = faker.helpers.multiple(
  () => ({
    ...getSalesOrder(),
    customer_name: getCustomer().name,
  }),
  { count: 34 }
);

export default function SalesOrdersTable() {
  const isTableSortable = useStore((state) => state.salesOrders.isTableSortable);
  const isTableResizable = useStore((state) => state.salesOrders.isTableResizable);
  const hiddenTableColumns = useStore((state) => state.salesOrders.hiddenTableColumns);
  const { columns, openDialog, setOpenDialog } = useSalesOrdersTable();

  const handleStatusChange = (newStatus: OrderStatus) => {
    console.log(newStatus);
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
          <SalesOrdersStatusEditor onSubmit={handleStatusChange} />
        </DialogContent>
      </Dialog>
    </>
  );
}
