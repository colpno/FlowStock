import type { Document, InventoryActivity, Product, Warehouse } from "@/types/data";

import { faker } from "@faker-js/faker";

import Table from "@/components/table/table";
import { getDocument, getInventoryActivity, getProduct, getWarehouse } from "@/lib/data";

import { useInventoryActivitiesTable } from "../hooks/use-inventory-activities-table";

export type InventoryActivitiesTableDef = {
  product_name: Product["name"];
  product_sku: Product["sku"];
  warehouse_name: Warehouse["name"];
  document_type: Document["type"];
} & InventoryActivity;

const data: InventoryActivitiesTableDef[] = faker.helpers.multiple(
  () => ({
    ...getInventoryActivity(),
    product_name: getProduct().name,
    product_sku: getProduct().sku,
    warehouse_name: getWarehouse().name,
    document_type: getDocument().type,
  }),
  { count: 23 }
);

export default function InventoryActivitiesTable() {
  const { columns } = useInventoryActivitiesTable();

  return <Table columns={columns} data={data} />;
}
