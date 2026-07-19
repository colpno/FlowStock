import type * as DataType from "@/types/data";

import { faker } from "@faker-js/faker";

import { ORDER_STATUSES, PERMISSIONS, USER_ROLES } from "@/constants/common";

faker.seed(123);

export const getUser = (): DataType.User => {
  const fullName = faker.person.fullName();
  const splittedFullname = fullName.split(" ");

  return {
    id: faker.string.uuid(),
    username: faker.internet.username({
      lastName: splittedFullname[splittedFullname.length - 1],
      firstName: splittedFullname.slice(0, -1).join(" "),
    }),
    password: faker.string.alpha(),
    salt: faker.string.alpha(),
    full_name: fullName,
    role: faker.helpers.arrayElement(USER_ROLES),
    created_at: faker.date.past().toISOString(),
    updated_at: faker.date.past().toISOString(),
  };
};

export const getRolePermissions = (): DataType.RolePermissions => ({
  id: faker.string.uuid(),
  role: faker.helpers.arrayElement(USER_ROLES),
  permissions: faker.helpers.arrayElements(PERMISSIONS),
  created_at: faker.date.past().toISOString(),
  updated_at: faker.date.past().toISOString(),
});

export const getProduct = (): DataType.Product => ({
  id: faker.string.uuid(),
  category_id: getCategory().id,
  sku: faker.helpers.fake("PROD-{{string.alpha(3, {casing: 'upper'})}}-{{string.numeric(4)}}"),
  name: faker.commerce.productName(),
  created_at: faker.date.past().toISOString(),
  updated_at: faker.date.past().toISOString(),
});

export const getCategory = (): DataType.Category => ({
  id: faker.string.uuid(),
  name: faker.commerce.productAdjective(),
  created_at: faker.date.past().toISOString(),
  updated_at: faker.date.past().toISOString(),
});

export const getWarehouse = (): DataType.Warehouse => ({
  id: faker.string.uuid(),
  name: faker.company.name(),
  location: `${faker.location.buildingNumber()}, ${faker.location.streetAddress()}, ${faker.location.state()}, ${faker.location.city()}`,
  created_at: faker.date.past().toISOString(),
  updated_at: faker.date.past().toISOString(),
});

export const getSupplier = (): DataType.Supplier => ({
  id: faker.string.uuid(),
  name: faker.company.name(),
  created_at: faker.date.past().toISOString(),
  updated_at: faker.date.past().toISOString(),
});

export const getSalesOrder = (): DataType.SalesOrder => ({
  id: faker.string.uuid(),
  customer_id: faker.string.uuid(),
  customer_name: faker.person.fullName(),
  customer_phone: faker.phone.number({ style: "national" }),
  shipping_address: `${faker.location.buildingNumber()}, ${faker.location.streetAddress()}, ${faker.location.state()}, ${faker.location.city()}`,
  order_no: faker.helpers.fake("SO-{{string.alpha(3, {casing: 'upper'})}}-{{string.numeric(4)}}"),
  status: faker.helpers.arrayElement(ORDER_STATUSES),
  courier_no: faker.helpers.fromRegExp("TRK[0-9A-Z]{7}"),
  created_at: faker.date.past().toISOString(),
  updated_at: faker.date.past().toISOString(),
});

export const getSalesOrderItem = (): DataType.SalesOrderItem => ({
  id: faker.string.uuid(),
  order_id: getSalesOrder().id,
  product_id: getProduct().id,
  quantity: faker.number.int(10),
  price: Number(faker.finance.amount()),
  currency_code: faker.finance.currencyCode(),
  created_at: faker.date.past().toISOString(),
  updated_at: faker.date.past().toISOString(),
});

export const getPurchaseOrder = (): DataType.PurchaseOrder => ({
  id: faker.string.uuid(),
  supplier_id: getSupplier().id,
  order_no: faker.helpers.fake("PO-{{string.alpha(3, {casing: 'upper'})}}-{{string.numeric(4)}}"),
  status: faker.helpers.arrayElement(ORDER_STATUSES),
  courier_no: faker.helpers.fromRegExp("TRK[0-9A-Z]{7}"),
  created_at: faker.date.past().toISOString(),
  updated_at: faker.date.past().toISOString(),
});

export const getPurchaseOrderItem = (): DataType.PurchaseOrderItem => ({
  id: faker.string.uuid(),
  order_id: getPurchaseOrder().id,
  product_id: getProduct().id,
  quantity: faker.number.int(500),
  cost: Number(faker.finance.amount()),
  currency_code: faker.finance.currencyCode(),
  created_at: faker.date.past().toISOString(),
  updated_at: faker.date.past().toISOString(),
});

export const getInventory = (): DataType.Inventory & { available: number } => {
  const physical = faker.number.int({ min: 10, max: 1000 });
  const reserved = faker.number.int({ min: 10, max: physical });
  const available = physical - reserved;

  return {
    id: faker.string.uuid(),
    warehouse_id: getWarehouse().id,
    product_id: getProduct().id,
    physical,
    reserved,
    available,
    created_at: faker.date.past().toISOString(),
    updated_at: faker.date.past().toISOString(),
  };
};

export const getInventoryActivity = (): DataType.InventoryActivity => {
  return {
    id: faker.string.uuid(),
    movement_no: `${faker.helpers.arrayElement(["SO", "PO", "TR", "ADJ"])}${faker.helpers.fake(
      "-{{string.alpha(3, {casing: 'upper'})}}-{{string.numeric(4)}}"
    )}`,
    movement_type: faker.helpers.arrayElement([
      "PURCHASE_RECEIPT",
      "SHIPMENT",
      "TRANSFER",
      "ADJUSTMENT",
    ]),
    warehouse_id: getWarehouse().id,
    product_id: getProduct().id,
    moved_by: getUser().id,
    old_quantity: faker.number.int(1000),
    change: faker.number.int({ min: -50, max: 100 }),
    reason: faker.lorem.sentence(),
    created_at: faker.date.past().toISOString(),
    updated_at: faker.date.past().toISOString(),
  };
};
