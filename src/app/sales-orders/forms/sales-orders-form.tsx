import type { FieldValues } from "react-hook-form";

import Form, { type FormProps } from "@/components/form/form";
import DatePickerField from "@/components/form-fields/date-picker-field/date-picker-field";
import NumberField from "@/components/form-fields/number-field/number-field";
import TextField from "@/components/form-fields/text-field/text-field";
import ToggleGroupField from "@/components/form-fields/toggle-group/toggle-group-field";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function SalesOrdersForm<TFieldData extends FieldValues>(
  props: Omit<FormProps<TFieldData, boolean>, "children">
) {
  return (
    <Form {...props} className={cn("space-y-3", props.className)}>
      <TextField name="id" label="Order Id" />

      <TextField name="customer" label="Customer" />

      <NumberField name="amount" label="Amount" />

      <ToggleGroupField
        name="status"
        label="Status"
        items={[
          { display: "Delivered", value: "delivered" },
          { display: "Pending", value: "pending" },
          { display: "In Transit", value: "in-transit" },
        ]}
      />

      <DatePickerField name="date" label="Date" />

      <DialogFooter className="*:flex-1 sm:flex-row-reverse" showCloseButton>
        <Button>Submit</Button>
      </DialogFooter>
    </Form>
  );
}
