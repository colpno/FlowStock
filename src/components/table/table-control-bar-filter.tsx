import type { FieldValues } from "react-hook-form";
import type { ZodType } from "zod";

import Form from "../form/form";
import { MaterialIcon } from "../material-icon";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export type TableControlBarFilterProps<TFormData extends FieldValues> = {
  children: React.ReactNode;
  title?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formSchema: ZodType<any, TFormData>;
  onSubmit: () => void;
};

export default function TableControlBarFilter<TFormData extends FieldValues>({
  children,
  title,
  formSchema,
  onSubmit,
}: TableControlBarFilterProps<TFormData>) {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" size="sm" />}>
        <MaterialIcon size={18}>filter_list</MaterialIcon>
        Filter
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetClose />
        </SheetHeader>

        <Separator />

        <Form
          schema={formSchema}
          onSubmit={onSubmit}
          className="flex flex-1 flex-col overflow-hidden"
        >
          {({ reset }) => (
            <>
              <div className="flex-1 space-y-4 overflow-y-auto px-4 pt-1 pb-6">{children}</div>

              <SheetFooter className="mt-auto flex-row justify-end space-x-2 bg-surface-container-low *:flex-1">
                <Button variant="outline" onClick={() => reset()}>
                  Reset
                </Button>
                <Button type="submit">Apply Filters</Button>
              </SheetFooter>
            </>
          )}
        </Form>
      </SheetContent>
    </Sheet>
  );
}
