import type { ImmerStateCreator } from "./use-store";
import type { InventoryTableDef } from "@/app/inventory/components/inventory-table";

type InventoryTableColumnIds = keyof InventoryTableDef;

export type InventoryStoreStates = {
  hiddenTableColumns: InventoryTableColumnIds[];
  isTableSortable: boolean;
  isTableResizable: boolean;
};

export type InventoryStoreActions = {
  hideTableColumn: (payload: InventoryTableColumnIds | InventoryTableColumnIds[]) => void;
  unhideTableColumn: (payload: InventoryTableColumnIds | InventoryTableColumnIds[]) => void;
  setIsTableSortable: (payload: boolean) => void;
  setIsTableResizable: (payload: boolean) => void;
};

export type InventoryStore = {
  inventory: InventoryStoreStates & InventoryStoreActions;
};

export const inventorySlice: ImmerStateCreator<InventoryStore> = (set) => ({
  inventory: {
    hiddenTableColumns: [],
    hideTableColumn: (payload) =>
      set((state) => {
        const tableColumns = Array.isArray(payload) ? payload : [payload];
        state.inventory.hiddenTableColumns.push(...tableColumns);
      }),
    unhideTableColumn: (payload) =>
      set((state) => {
        const tableColumns = Array.isArray(payload) ? payload : [payload];
        state.inventory.hiddenTableColumns = state.inventory.hiddenTableColumns.filter(
          (column) => !tableColumns.includes(column)
        );
      }),

    isTableSortable: false,
    setIsTableSortable: (payload) =>
      set((state) => {
        state.inventory.isTableSortable = payload;
      }),

    isTableResizable: false,
    setIsTableResizable: (payload) =>
      set((state) => {
        state.inventory.isTableResizable = payload;
      }),
  },
});
