import { Controller, useFormContext } from "react-hook-form";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input, type InputProps } from "@/components/ui/input";

export type TextFieldProps = {
  name: string;
  label?: React.ReactNode;
  slotProps?: {
    field?: Omit<React.ComponentProps<typeof Field>, "children">;
    fieldLabel?: Omit<React.ComponentProps<typeof FieldLabel>, "children" | "htmlFor">;
    fieldError?: Omit<React.ComponentProps<typeof FieldError>, "children" | "errors">;
  };
} & Omit<InputProps, "id">;

function TextField({ name, label, slotProps, ...props }: TextFieldProps) {
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

          <Input
            autoComplete="off"
            {...props}
            {...field}
            id={field.name}
            aria-invalid={fieldState.invalid}
          />

          {fieldState.invalid && (
            <FieldError {...slotProps?.fieldError} errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
}

export default TextField;
