import type { ImmerStateCreator } from "./use-store";
import type { SalesOrderItemsTableDef } from "@/app/sales-orders/components/sales-order-items-table";
import type { SalesOrdersTableDef } from "@/app/sales-orders/components/sales-orders-table";

type OrderColumn = keyof SalesOrdersTableDef;
type ItemColumn = keyof SalesOrderItemsTableDef;
export type SalesTableName = "orders-table" | "items-table";
type TableColumn<T extends SalesTableName> = T extends "orders-table" ? OrderColumn : ItemColumn;

export type SalesOrdersStoreStates = {
  hiddenTableColumns: {
    order: OrderColumn[];
    item: ItemColumn[];
  };
  isTableSortable: boolean;
  isTableResizable: boolean;
};

export type SalesOrdersStoreActions = {
  hideTableColumn: <T extends SalesTableName>(
    type: T,
    payload: TableColumn<T> | TableColumn<T>[]
  ) => void;
  unhideTableColumn: <T extends SalesTableName>(
    type: T,
    payload: TableColumn<T> | TableColumn<T>[]
  ) => void;
  setIsTableSortable: (payload: boolean) => void;
  setIsTableResizable: (payload: boolean) => void;
};

export type SalesOrdersStore = {
  salesOrders: SalesOrdersStoreStates & SalesOrdersStoreActions;
};

export const salesOrdersSlice: ImmerStateCreator<SalesOrdersStore> = (set) => ({
  salesOrders: {
    hiddenTableColumns: {
      order: [],
      item: [],
    },
    hideTableColumn: (type, payload) =>
      set((state) => {
        const tableColumns = Array.isArray(payload) ? payload : [payload];

        if (type === "orders-table") {
          state.salesOrders.hiddenTableColumns.order.push(...(tableColumns as OrderColumn[]));
        }
        if (type === "items-table") {
          state.salesOrders.hiddenTableColumns.item.push(...(tableColumns as ItemColumn[]));
        }
      }),
    unhideTableColumn: (type, payload) =>
      set((state) => {
        const tableColumns = Array.isArray(payload) ? payload : [payload];

        if (type === "orders-table") {
          state.salesOrders.hiddenTableColumns.order.filter(
            (column) => !(tableColumns as OrderColumn[]).includes(column)
          );
        }
        if (type === "items-table") {
          state.salesOrders.hiddenTableColumns.item.filter(
            (column) => !(tableColumns as ItemColumn[]).includes(column)
          );
        }
      }),

    isTableSortable: false,
    setIsTableSortable: (payload) =>
      set((state) => {
        state.salesOrders.isTableSortable = payload;
      }),

    isTableResizable: false,
    setIsTableResizable: (payload) =>
      set((state) => {
        state.salesOrders.isTableResizable = payload;
      }),
  },
});
