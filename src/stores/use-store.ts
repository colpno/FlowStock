import { create, type StateCreator, useStore as useZustandStore } from "zustand";
import { createJSONStorage, persist, type PersistOptions } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { sidebarSlice, type SidebarStore } from "./use-sidebar-store";

export type ImmerStateCreator<T> = StateCreator<Store, [["zustand/immer", never], never], [], T>;

export type Store = SidebarStore;

type PersistedStore = {
  sidebar: Pick<Store["sidebar"], "open">;
};

const persistOptions: PersistOptions<Store, PersistedStore> = {
  name: "flow-stock",
  partialize: (state) => ({
    sidebar: {
      open: state.sidebar.open,
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
    };
  },
};

const rootSlice: ImmerStateCreator<Store> = (...parameters) => ({
  ...sidebarSlice(...parameters),
});

export const store = create<Store>()(persist(immer(rootSlice), persistOptions));

export const useStore = <T>(selector: (state: Store) => T) => useZustandStore(store, selector);
