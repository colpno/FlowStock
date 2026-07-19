import type { ImmerStateCreator } from "./use-store";
import type { PurchaseOrderItemsTableDef } from "@/app/purchase-orders/components/purchase-orders-items-table";
import type { PurchaseOrdersTableDef } from "@/app/purchase-orders/components/purchase-orders-table";

type OrderColumn = keyof PurchaseOrdersTableDef;
type ItemColumn = keyof PurchaseOrderItemsTableDef;
export type PurchaseTableName = "orders-table" | "items-table";
type TableColumn<T extends PurchaseTableName> = T extends "orders-table" ? OrderColumn : ItemColumn;

export type PurchaseOrdersStoreStates = {
  hiddenTableColumns: {
    order: OrderColumn[];
    item: ItemColumn[];
  };
  isTableSortable: boolean;
  isTableResizable: boolean;
};

export type PurchaseOrdersStoreActions = {
  hideTableColumn: <T extends PurchaseTableName>(
    type: T,
    payload: TableColumn<T> | TableColumn<T>[]
  ) => void;
  unhideTableColumn: <T extends PurchaseTableName>(
    type: T,
    payload: TableColumn<T> | TableColumn<T>[]
  ) => void;
  setIsTableSortable: (payload: boolean) => void;
  setIsTableResizable: (payload: boolean) => void;
};

export type PurchaseOrdersStore = {
  purchaseOrders: PurchaseOrdersStoreStates & PurchaseOrdersStoreActions;
};

export const purchaseOrdersSlice: ImmerStateCreator<PurchaseOrdersStore> = (set) => ({
  purchaseOrders: {
    hiddenTableColumns: {
      order: [],
      item: [],
    },
    hideTableColumn: (type, payload) =>
      set((state) => {
        const tableColumns = Array.isArray(payload) ? payload : [payload];

        if (type === "orders-table") {
          state.purchaseOrders.hiddenTableColumns.order.push(...(tableColumns as OrderColumn[]));
        }
        if (type === "items-table") {
          state.purchaseOrders.hiddenTableColumns.item.push(...(tableColumns as ItemColumn[]));
        }
      }),
    unhideTableColumn: (type, payload) =>
      set((state) => {
        const tableColumns = Array.isArray(payload) ? payload : [payload];

        if (type === "orders-table") {
          state.purchaseOrders.hiddenTableColumns.order.filter(
            (column) => !(tableColumns as OrderColumn[]).includes(column)
          );
        }
        if (type === "items-table") {
          state.purchaseOrders.hiddenTableColumns.item.filter(
            (column) => !(tableColumns as ItemColumn[]).includes(column)
          );
        }
      }),

    isTableSortable: false,
    setIsTableSortable: (payload) =>
      set((state) => {
        state.purchaseOrders.isTableSortable = payload;
      }),

    isTableResizable: false,
    setIsTableResizable: (payload) =>
      set((state) => {
        state.purchaseOrders.isTableResizable = payload;
      }),
  },
});
