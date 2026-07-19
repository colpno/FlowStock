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
  category_id: Category["id"];
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

export type Supplier = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export type SalesOrder = {
  id: string;
  order_no: string;
  customer_id?: string;
  customer_name: string;
  customer_phone: string;
  shipping_address: string;
  status: OrderStatus;
  courier_no?: string;
  created_at: string;
  updated_at: string;
};

export type SalesOrderItem = {
  id: string;
  order_id: SalesOrder["id"];
  product_id: Product["id"];
  quantity: number;
  price: number;
  currency_code: string;
  created_at: string;
  updated_at: string;
};

export type PurchaseOrder = {
  id: string;
  order_no: string;
  supplier_id: Supplier["id"];
  status: OrderStatus;
  courier_no?: string;
  created_at: string;
  updated_at: string;
};

export type PurchaseOrderItem = {
  id: string;
  order_id: PurchaseOrder["id"];
  product_id: Product["id"];
  quantity: number;
  cost: number;
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
  warehouse_id: Warehouse["id"];
  product_id: Product["id"];
  /** The on-hand amount. */
  physical: number;
  /** The occupied amount. */
  reserved: number;
  created_at: string;
  updated_at: string;
};

export type InventoryActivity = {
  id: string;
  movement_no: string;
  movement_type: "PURCHASE_RECEIPT" | "SHIPMENT" | "TRANSFER" | "ADJUSTMENT";
  warehouse_id: Warehouse["id"];
  product_id: Product["id"];
  moved_by: User["id"];
  old_quantity: number;
  /**
   * @example 100
   * @example -20
   */
  change: number;
  reason: string;
  created_at: string;
  updated_at: string;
};
