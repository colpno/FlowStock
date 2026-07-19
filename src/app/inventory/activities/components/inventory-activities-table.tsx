"use client";

import type { InventoryActivity, Product, User, Warehouse } from "@/types/data";

import { faker } from "@faker-js/faker";

import Table from "@/components/table/table";
import { getInventoryActivity, getProduct, getUser, getWarehouse } from "@/lib/data";

import { useInventoryActivitiesTable } from "../hooks/use-inventory-activities-table";

export type InventoryActivitiesTableDef = {
  product_name: Product["name"];
  product_sku: Product["sku"];
  warehouse_name: Warehouse["name"];
  moved_by_name: User["full_name"];
} & InventoryActivity;

const data: InventoryActivitiesTableDef[] = faker.helpers.multiple(
  () => ({
    ...getInventoryActivity(),
    product_name: getProduct().name,
    product_sku: getProduct().sku,
    warehouse_name: getWarehouse().name,
    moved_by_name: getUser().full_name,
  }),
  { count: 23 }
);

export default function InventoryActivitiesTable() {
  const { columns } = useInventoryActivitiesTable();

  return <Table columns={columns} data={data} />;
}
