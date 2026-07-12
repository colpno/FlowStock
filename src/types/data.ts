export type OrderStatus = "PROCESSING" | "PACKING" | "SHIPPING" | "DELIVERED";
export type Role = "ADMINISTRATOR" | "WAREHOUSE" | "SALES" | "PRODUCTION" | "HR";
export type Permission =
  | "inventory.edit"
  | "inventory.remove"
  | "salesOrders.edit"
  | "salesOrders.remove"
  | "purchaseOrders.edit"
  | "purchaseOrders.remove"
  | "users.edit"
  | "users.remove";

export type User = {
  id: string;
  username: string;
  password: string;
  salt: string;
  full_name: string;
  role: Role;
  created_at: string;
  updated_at: string;
};

export type RolePermissions = {
  id: string;
  role: Role;
  permissions: Permission[];
  created_at: string;
  updated_at: string;
};

export type Product = {
  id: string;
  category_id: string;
  sku: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export type Category = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export type Warehouse = {
  id: string;
  name: string;
  location: string;
  created_at: string;
  updated_at: string;
};

export type Customer = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export type Supplier = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export type SalesOrder = {
  id: string;
  customer_id: string;
  document_id: string;
  status: OrderStatus;
  courier_no?: string;
  created_at: string;
  updated_at: string;
};

export type SalesOrderItem = {
  id: string;
  sales_order_id: string;
  product_id: string;
  quantity: number;
  price: number;
  currency_code: string;
  created_at: string;
  updated_at: string;
};

export type PurchaseOrder = {
  id: string;
  supplier_id: string;
  document_id: string;
  status: OrderStatus;
  courier_no?: string;
  created_at: string;
  updated_at: string;
};

export type PurchaseOrderItem = {
  id: string;
  purchase_order_id: string;
  product_id: string;
  quantity: number;
  cost: string;
  /**
   * @example "VND"
   * @example "USD"
   */
  currency_code: string;
  created_at: string;
  updated_at: string;
};

export type Inventory = {
  id: string;
  warehouse_id: string;
  product_id: string;
  /** The on-hand amount. */
  physical: number;
  /** The occupied amount. */
  reserved: number;
  created_at: string;
  updated_at: string;
};

export type InventoryActivity = {
  id: string;
  warehouse_id: string;
  product_id: string;
  document_id: string;
  /**
   * @example "+100"
   * @example "-20"
   */
  change: string;
  created_at: string;
  updated_at: string;
};

export type Document = {
  id: string;
  document_id: string;
  type: "PURCHASE_RECEIPT" | "SHIPMENT" | "TRANSFER" | "ADJUSTMENT";
  created_at: string;
  updated_at: string;
};
