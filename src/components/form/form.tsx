"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  DeepPartial,
  DefaultValues,
  FieldValues,
  FormState,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import type { ZodType } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export type FormProps<TFormData extends FieldValues, TSubmitDirty extends boolean> = {
  schema: ZodType<any, TFormData>;
  children: React.ReactNode | ((methods: UseFormReturn<TFormData>) => React.ReactNode);
  onSubmit: TSubmitDirty extends true
    ? (data: Partial<TFormData>) => void | Promise<void>
    : (data: TFormData) => void | Promise<void>;
  defaultValues?: Partial<TFormData>;
  submitDirty?: TSubmitDirty;
} & Omit<React.ComponentProps<"form">, "children" | "onSubmit">;

export default function Form<TFormData extends FieldValues, TSubmitDirty extends boolean = false>({
  children,
  schema,
  onSubmit,
  defaultValues,
  submitDirty,
  ...props
}: FormProps<TFormData, TSubmitDirty>) {
  const methods = useForm<TFormData>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<TFormData>,
  });

  const submitHandler: SubmitHandler<TFormData> = async (data) => {
    if (submitDirty) {
      const dirtyFields = extractDirtyValues(data, methods.formState.dirtyFields);
      if (!dirtyFields) return;
      await onSubmit(dirtyFields as TFormData);
    } else {
      await onSubmit(data);
    }
  };

  return (
    <FormProvider {...methods}>
      <form {...props} onSubmit={methods.handleSubmit(submitHandler)}>
        {typeof children === "function" ? children(methods) : children}
      </form>
    </FormProvider>
  );
}

/**
 *  Utility function to get dirty values from form fields.
 *  It checks if the fields are dirty based on the provided dirtyFields map.
 *  If a field is dirty, it returns the corresponding value from allFields.
 *  If a field is not dirty, it is not included in the result.
 * @param allFields An object containing all form fields and their values.
 * @param dirtyFields An object containing all form fields and their boolean dirty state.
 * @returns An object containing only the fields that are dirty, with their corresponding values from allFields.
 */
const extractDirtyValues = <T extends FieldValues>(
  values: T,
  dirty: FormState<T>["dirtyFields"]
): DeepPartial<T> | undefined => {
  if ((dirty as any) === true) return values as any;
  if ((dirty as any) === false) return undefined;

  if (Array.isArray(values)) {
    const arr = values
      .map((v, i) => extractDirtyValues(v, (dirty as any)[i]))
      .filter((v) => v !== undefined);

    return arr.length ? (arr as any) : undefined;
  }

  const obj = {} as DeepPartial<T>;

  for (const k in dirty) {
    const v = extractDirtyValues(values[k], dirty[k] as any);
    if (v !== undefined) obj[k] = v;
  }

  return Object.keys(obj).length ? obj : undefined;
};
