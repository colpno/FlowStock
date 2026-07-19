"use client";

import type { FieldValues } from "react-hook-form";

import Form, { type FormProps } from "@/components/form/form";
import ComboboxField from "@/components/form-fields/combobox/combobox-field";
import NumberField from "@/components/form-fields/number-field/number-field";
import TextField from "@/components/form-fields/text-field/text-field";
import ToggleGroupField from "@/components/form-fields/toggle-group/toggle-group-field";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function InventoryForm<TFieldData extends FieldValues>(
  props: Omit<FormProps<TFieldData, boolean>, "children">
) {
  return (
    <Form {...props} className={cn("space-y-3", props.className)}>
      <TextField name="sku" label="SKU" />

      <TextField name="productName" label="Product Name" />

      <ComboboxField name="category" label="Category" items={["Electronic", "Fabric", "Phone"]} />

      <ToggleGroupField
        name="status"
        label="Status"
        items={[
          { display: "In Stock", value: "In Stock" },
          { display: "Low Stock", value: "Low Stock" },
          { display: "Out of Stock", value: "Out of Stock" },
        ]}
      />

      <NumberField name="physical" label="Physical" />

      <DialogFooter className="*:flex-1 sm:flex-row-reverse" showCloseButton>
        <Button>Submit</Button>
      </DialogFooter>
    </Form>
  );
}
