import type { ImmerStateCreator } from "./use-store";

export type SidebarStoreStates = {
  open: boolean;
};

export type SidebarStoreActions = {
  setOpen: (open: boolean) => void;
};

export type SidebarStore = {
  sidebar: SidebarStoreStates & SidebarStoreActions;
};

export const sidebarSlice: ImmerStateCreator<SidebarStore> = (set) => ({
  sidebar: {
    open: false,
    setOpen: (payload) =>
      set((state) => {
        state.sidebar.open = payload;
      }),
  },
});
