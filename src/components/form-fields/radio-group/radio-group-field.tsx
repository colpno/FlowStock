"use client";

import { Controller, useFormContext } from "react-hook-form";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

type Item = {
  value: string;
  display: React.ReactNode;
};

export type RadioGroupFieldProps = {
  name: string;
  items: Item[];
  label?: React.ReactNode;
  slotProps?: {
    field?: Omit<React.ComponentProps<typeof Field>, "children">;
    fieldLabel?: Omit<React.ComponentProps<typeof FieldLabel>, "children" | "htmlFor">;
    fieldError?: Omit<React.ComponentProps<typeof FieldError>, "children" | "errors">;
    radioItem?: Pick<React.ComponentProps<"div">, "className">;
    radioItemRadio?: Omit<React.ComponentProps<typeof RadioGroupItem>, "children" | "value" | "id">;
    radioItemLabel?: Omit<React.ComponentProps<typeof FieldLabel>, "children" | "htmlFor">;
  };
} & React.ComponentProps<typeof RadioGroup>;

export default function RadioGroupField({
  name,
  label,
  items,
  slotProps,
  ...props
}: RadioGroupFieldProps) {
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

          <RadioGroup {...props} {...field} onValueChange={onChange}>
            {items.map((item) => {
              const id = `radio-${item.value}`;

              return (
                <div
                  key={item.value}
                  className={cn("flex items-center gap-3", slotProps?.radioItem?.className)}
                >
                  <RadioGroupItem {...slotProps?.radioItemRadio} value={item.value} id={id} />
                  <FieldLabel {...slotProps?.radioItemLabel} htmlFor={id}>
                    {item.display}
                  </FieldLabel>
                </div>
              );
            })}
          </RadioGroup>

          {fieldState.invalid && (
            <FieldError {...slotProps?.fieldError} errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
}
