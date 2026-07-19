import { create, type StateCreator, useStore as useZustandStore } from "zustand";
import { createJSONStorage, persist, type PersistOptions } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { inventorySlice, type InventoryStore } from "./use-inventory-store";
import { purchaseOrdersSlice, type PurchaseOrdersStore } from "./use-purchase-orders-store";
import { salesOrdersSlice, type SalesOrdersStore } from "./use-sales-orders-store";
import { sidebarSlice, type SidebarStore } from "./use-sidebar-store";

export type ImmerStateCreator<T> = StateCreator<Store, [["zustand/immer", never], never], [], T>;

export type Store = SidebarStore & InventoryStore & SalesOrdersStore & PurchaseOrdersStore;

type PersistedStore = {
  sidebar: Pick<Store["sidebar"], "open">;
  inventory: Pick<
    Store["inventory"],
    "hiddenTableColumns" | "isTableSortable" | "isTableResizable"
  >;
  salesOrders: Pick<
    Store["salesOrders"],
    "hiddenTableColumns" | "isTableSortable" | "isTableResizable"
  >;
  purchaseOrders: Pick<
    Store["purchaseOrders"],
    "hiddenTableColumns" | "isTableSortable" | "isTableResizable"
  >;
};

const persistOptions: PersistOptions<Store, PersistedStore> = {
  name: "flow-stock",
  partialize: (state) => ({
    sidebar: {
      open: state.sidebar.open,
    },
    inventory: {
      hiddenTableColumns: state.inventory.hiddenTableColumns,
      isTableSortable: state.inventory.isTableSortable,
      isTableResizable: state.inventory.isTableResizable,
    },
    salesOrders: {
      hiddenTableColumns: state.salesOrders.hiddenTableColumns,
      isTableSortable: state.salesOrders.isTableSortable,
      isTableResizable: state.salesOrders.isTableResizable,
    },
    purchaseOrders: {
      hiddenTableColumns: state.purchaseOrders.hiddenTableColumns,
      isTableSortable: state.purchaseOrders.isTableSortable,
      isTableResizable: state.purchaseOrders.isTableResizable,
    },
  }),
  storage: createJSONStorage(() => localStorage),
  merge: (persistedState, currentState) => {
    const storageState = persistedState as PersistedStore;
    return {
      ...currentState,
      sidebar: {
        ...currentState.sidebar,
        ...storageState.sidebar,
      },
      inventory: {
        ...currentState.inventory,
        ...storageState.inventory,
      },
      salesOrders: {
        ...currentState.salesOrders,
        ...storageState.salesOrders,
      },
      purchaseOrders: {
        ...currentState.purchaseOrders,
        ...storageState.purchaseOrders,
      },
    };
  },
};

const rootSlice: ImmerStateCreator<Store> = (...parameters) => ({
  ...sidebarSlice(...parameters),
  ...inventorySlice(...parameters),
  ...salesOrdersSlice(...parameters),
  ...purchaseOrdersSlice(...parameters),
});

export const store = create<Store>()(persist(immer(rootSlice), persistOptions));

export const useStore = <T>(selector: (state: Store) => T) => useZustandStore(store, selector);
