"use client";

import DatePickerField from "@/components/form-fields/date-picker-field/date-picker-field";
import RadioGroupField from "@/components/form-fields/radio-group/radio-group-field";
import TextField from "@/components/form-fields/text-field/text-field";

export default function InventoryActivitiesFilterForm() {
  return (
    <>
      <RadioGroupField
        name="warehouse_name"
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

      <TextField
        name="sku"
        label="Product SKU"
        slotProps={{
          fieldLabel: {
            className: "typo-headline-md! uppercase",
          },
        }}
      />

      <TextField
        name="product_name"
        label="Product Name"
        slotProps={{
          fieldLabel: {
            className: "typo-headline-md! uppercase",
          },
        }}
      />

      <DatePickerField
        name="created_at"
        label="Created At"
        mode="range"
        calendarProps={{ numberOfMonths: 2 }}
        slotProps={{
          fieldLabel: {
            className: "typo-headline-md! uppercase",
          },
        }}
      />

      <DatePickerField
        name="updated_at"
        label="Updated At"
        mode="range"
        calendarProps={{ numberOfMonths: 2 }}
        slotProps={{
          fieldLabel: {
            className: "typo-headline-md! uppercase",
          },
        }}
      />
    </>
  );
}
