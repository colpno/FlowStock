export const ROUTES = {
  home: {
    href: "/",
    icon: "home",
    label: "Home",
  },
  dashboard: {
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  inventory: {
    href: "/inventory",
    icon: "inventory_2",
    label: "Inventory",
    children: {
      activities: {
        href: "/inventory/activities",
      },
    },
  },
  salesOrders: {
    href: "/sales-orders",
    icon: "shopping_cart",
    label: "Sales Orders",
  },
  purchaseOrders: {
    href: "/purchase-orders",
    icon: "box_add",
    label: "Purchase Orders",
  },
  userManagement: {
    href: "/users",
    icon: "group",
    label: "User Management",
  },
  rolesPermissions: {
    href: "/roles-permissions",
    icon: "verified_user",
    label: "Roles & Permissions",
  },
  auditLogs: {
    href: "/audit-logs",
    icon: "history",
    label: "Audit Logs",
  },
  settings: {
    href: "/settings",
    icon: "settings",
    label: "Settings",
  },
  warehouse: {
    href: "/warehouse",
    icon: "warehouse",
    label: "Warehouse",
  },
};
