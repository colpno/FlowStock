"use client";

import ComboboxMultipleField from "@/components/form-fields/combobox/combobox-multiple-field";
import RadioGroupField from "@/components/form-fields/radio-group/radio-group-field";
import TextField from "@/components/form-fields/text-field/text-field";
import ToggleGroupField from "@/components/form-fields/toggle-group/toggle-group-field";

export default function InventoryFilterForm() {
  return (
    <>
      <RadioGroupField
        name="warehouse"
        label="Warehouse"
        items={[
          { display: "All Warehouses", value: "all" },
          { display: "North Hub", value: "north-hub" },
          { display: "South Logistics", value: "south-logistics" },
        ]}
        slotProps={{
          fieldLabel: {
            className: "typo-headline-md! uppercase",
          },
          radioItem: {
            className: "border-outline-variant border py-4 px-3",
          },
        }}
      />

      <ToggleGroupField
        name="status"
        label="Stock Status"
        multiple
        items={[
          { display: "In Stock", value: "in-stock" },
          { display: "Low Stock", value: "low-stock" },
          { display: "Out of Stock", value: "out-of-stock" },
        ]}
        slotProps={{
          fieldLabel: {
            className: "typo-headline-md! uppercase",
          },
          toggleGroupItem: {
            size: "lg",
          },
        }}
      />

      <TextField
        name="sku"
        label="SKU"
        slotProps={{
          fieldLabel: {
            className: "typo-headline-md! uppercase",
          },
        }}
      />

      <TextField
        name="productName"
        label="Product Name"
        slotProps={{
          fieldLabel: {
            className: "typo-headline-md! uppercase",
          },
        }}
      />

      <ComboboxMultipleField
        name="category"
        label="Category"
        items={["Electronic", "Fabric", "Phone"]}
        slotProps={{
          fieldLabel: {
            className: "typo-headline-md! uppercase",
          },
        }}
      />
    </>
  );
}
