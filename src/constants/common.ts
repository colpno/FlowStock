import type { OrderStatus, Permission, Role } from "@/types/data";

export const ORDER_STATUSES: OrderStatus[] = ["PROCESSING", "PACKING", "SHIPPING", "DELIVERED"];

export const USER_ROLES: Role[] = ["ADMINISTRATOR", "WAREHOUSE", "SALES", "PRODUCTION"];
export const PERMISSIONS: Permission[] = [
  "inventory.edit",
  "inventory.remove",
  "salesOrders.edit",
  "salesOrders.remove",
  "purchaseOrders.edit",
  "purchaseOrders.remove",
  "users.edit",
  "users.remove",
];
