import type { DatePickerProps, Mode } from "@/components/ui/date-picker/date-picker.types";

import { Controller, useFormContext } from "react-hook-form";

import DatePicker from "@/components/ui/date-picker/date-picker";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

export type DatePickerFieldProps<TMode extends Mode> = {
  name: string;
  label?: React.ReactNode;
  slotProps?: {
    field?: Omit<React.ComponentProps<typeof Field>, "children">;
    fieldLabel?: Omit<React.ComponentProps<typeof FieldLabel>, "children" | "htmlFor">;
    fieldError?: Omit<React.ComponentProps<typeof FieldError>, "children" | "errors">;
  };
} & Omit<Partial<DatePickerProps<TMode>>, "id">;

function DatePickerField<TMode extends Mode = "single">({
  label,
  name,
  slotProps,
  ...props
}: DatePickerFieldProps<TMode>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field {...slotProps?.field} data-invalid={fieldState.invalid}>
          {!!label && (
            <FieldLabel {...slotProps?.fieldLabel} htmlFor={field.name}>
              {label}
            </FieldLabel>
          )}

          <DatePicker
            {...props}
            {...field}
            id={field.name}
            calendarProps={{
              showOutsideDays: true,
              ...props.calendarProps,
            }}
          />

          {fieldState.invalid && (
            <FieldError {...slotProps?.fieldError} errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
}

export default DatePickerField;
