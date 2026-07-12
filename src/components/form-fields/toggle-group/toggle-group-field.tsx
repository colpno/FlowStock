import { Controller, useFormContext } from "react-hook-form";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Item = {
  value: string;
  display: React.ReactNode;
};

export type ToggleGroupFieldProps = {
  name: string;
  items: Item[];
  label?: React.ReactNode;
  slotProps?: {
    field?: Omit<React.ComponentProps<typeof Field>, "children">;
    fieldLabel?: Omit<React.ComponentProps<typeof FieldLabel>, "children" | "htmlFor">;
    fieldError?: Omit<React.ComponentProps<typeof FieldError>, "children" | "errors">;
    toggleGroupItem?: Omit<React.ComponentProps<typeof ToggleGroupItem>, "children" | "value">;
  };
} & React.ComponentProps<typeof ToggleGroup>;

export default function ToggleGroupField({
  name,
  label,
  items,
  slotProps,
  ...props
}: ToggleGroupFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...field }, fieldState }) => (
        <Field {...slotProps?.field} data-invalid={fieldState.invalid}>
          {!!label && (
            <FieldLabel {...slotProps?.fieldLabel} htmlFor={field.name}>
              {label}
            </FieldLabel>
          )}

          <ToggleGroup {...props} {...field} onValueChange={onChange}>
            {items.map((item) => {
              const id = `toggle-${item.value}`;

              return (
                <ToggleGroupItem
                  {...slotProps?.toggleGroupItem}
                  variant="outline"
                  key={id}
                  value={item.value}
                >
                  {item.display}
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>

          {fieldState.invalid && (
            <FieldError {...slotProps?.fieldError} errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
}
