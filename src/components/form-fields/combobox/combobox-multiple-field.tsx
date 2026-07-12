import { Controller, useFormContext } from "react-hook-form";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

export type ComboboxMultipleFieldProps<Value> = {
  name: string;
  label?: React.ReactNode;
  slotProps?: {
    field?: Omit<React.ComponentProps<typeof Field>, "children">;
    fieldLabel?: Omit<React.ComponentProps<typeof FieldLabel>, "children" | "htmlFor">;
    fieldError?: Omit<React.ComponentProps<typeof FieldError>, "children" | "errors">;
    comboboxChip?: Omit<React.ComponentProps<typeof ComboboxChip>, "children">;
    comboboxChips?: Omit<React.ComponentProps<typeof ComboboxChips>, "children" | "ref">;
    comboboxChipsInput?: Omit<React.ComponentProps<typeof ComboboxChipsInput>, "children" | "id">;
    comboboxContent?: Omit<React.ComponentProps<typeof ComboboxContent>, "children" | "anchor">;
    comboboxEmpty?: React.ComponentProps<typeof ComboboxEmpty>;
    comboboxItem?: Omit<React.ComponentProps<typeof ComboboxItem>, "children" | "value">;
    comboboxList?: Omit<React.ComponentProps<typeof ComboboxList>, "children">;
    comboboxValue?: Omit<React.ComponentProps<typeof ComboboxValue>, "children">;
  };
} & Omit<React.ComponentProps<typeof Combobox<Value, true>>, "children" | "multiple">;

export default function ComboboxMultipleField<Value>({
  name,
  label,
  slotProps,
  ...props
}: ComboboxMultipleFieldProps<Value>) {
  const { control } = useFormContext();
  const anchor = useComboboxAnchor();

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

          <Combobox autoHighlight {...props} {...field} onValueChange={onChange} multiple>
            <ComboboxChips {...slotProps?.comboboxChips} ref={anchor}>
              <ComboboxValue {...slotProps?.comboboxValue}>
                {(values) => (
                  <>
                    {values.map((value: string) => (
                      <ComboboxChip {...slotProps?.comboboxChip} key={value}>
                        {value}
                      </ComboboxChip>
                    ))}
                    <ComboboxChipsInput {...slotProps?.comboboxChipsInput} id={field.name} />
                  </>
                )}
              </ComboboxValue>
            </ComboboxChips>

            <ComboboxContent {...slotProps?.comboboxContent} anchor={anchor}>
              <ComboboxEmpty {...slotProps?.comboboxEmpty}>No items found.</ComboboxEmpty>
              <ComboboxList {...slotProps?.comboboxList}>
                {(item) => (
                  <ComboboxItem {...slotProps?.comboboxItem} key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
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
