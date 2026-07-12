import DatePickerField from "@/components/form-fields/date-picker-field/date-picker-field";
import NumberField from "@/components/form-fields/number-field/number-field";
import TextField from "@/components/form-fields/text-field/text-field";
import ToggleGroupField from "@/components/form-fields/toggle-group/toggle-group-field";

export default function SalesOrdersFilterForm() {
  return (
    <>
      <TextField name="id" label="Order Id" />

      <TextField name="customer" label="Customer" />

      <div className="flex items-center gap-2 *:flex-1">
        <NumberField name="amount-from" label="Amount (from)" />
        <NumberField name="amount-to" label="Amount (to)" />
      </div>

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
    </>
  );
}
