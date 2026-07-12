import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { MaterialIcon } from "@/components/material-icon";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input, type InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export type PasswordFieldProps = {
  name: string;
  label?: React.ReactNode;
  slotProps?: {
    field?: Omit<React.ComponentProps<typeof Field>, "children">;
    fieldLabel?: Omit<React.ComponentProps<typeof FieldLabel>, "children" | "htmlFor">;
    fieldError?: Omit<React.ComponentProps<typeof FieldError>, "children" | "errors">;
  };
} & Omit<InputProps, "children" | "type" | "id">;

function PasswordField({ name, label, slotProps, ...props }: PasswordFieldProps) {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

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

          <div className="group relative">
            <MaterialIcon
              className="pointer-events-none absolute inset-y-0 top-1/2 left-0 -translate-y-1/2 pl-3 text-on-surface-variant group-focus-within:text-primary"
              size={20}
            >
              lock
            </MaterialIcon>
            <Input
              autoComplete="off"
              {...props}
              {...field}
              type={showPassword ? "text" : "password"}
              id={field.name}
              aria-invalid={fieldState.invalid}
              className={cn("pr-10 pl-10", props.className)}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-on-surface-variant transition-colors hover:text-on-surface"
            >
              <MaterialIcon size={20}>
                {showPassword ? "visibility_off" : "visibility"}
              </MaterialIcon>
            </button>
          </div>

          {fieldState.invalid && (
            <FieldError {...slotProps?.fieldError} errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
}

export default PasswordField;
