import { Controller, useFormContext } from "react-hook-form";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

export type ComboboxFieldProps = {
  name: string;
  label?: React.ReactNode;
  slotProps?: {
    field?: Omit<React.ComponentProps<typeof Field>, "children">;
    fieldLabel?: Omit<React.ComponentProps<typeof FieldLabel>, "children" | "htmlFor">;
    fieldError?: Omit<React.ComponentProps<typeof FieldError>, "children" | "errors">;
    comboboxInput?: Omit<React.ComponentProps<typeof ComboboxInput>, "children" | "id">;
    comboboxContent?: Omit<React.ComponentProps<typeof ComboboxContent>, "children" | "anchor">;
    comboboxEmpty?: React.ComponentProps<typeof ComboboxEmpty>;
    comboboxItem?: Omit<React.ComponentProps<typeof ComboboxItem>, "children" | "value">;
    comboboxList?: Omit<React.ComponentProps<typeof ComboboxList>, "children">;
  };
} & React.ComponentProps<typeof Combobox>;

export default function ComboboxField({ name, label, slotProps, ...props }: ComboboxFieldProps) {
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

          <Combobox {...props} {...field} onValueChange={onChange}>
            <ComboboxInput {...slotProps?.comboboxInput} id={field.name} />
            <ComboboxContent {...slotProps?.comboboxContent}>
              <ComboboxEmpty {...slotProps?.comboboxEmpty}>No items found.</ComboboxEmpty>
              <ComboboxList {...slotProps?.comboboxList}>
                {props.items?.map((item) => (
                  <ComboboxItem {...slotProps?.comboboxItem} key={item}>
                    {item}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>

          {fieldState.invalid && (
            <FieldError {...slotProps?.fieldError} errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
}
