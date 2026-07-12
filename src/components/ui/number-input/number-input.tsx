import { NumberField } from "@base-ui/react/number-field";

import { MaterialIcon } from "@/components/material-icon";

import { Input } from "../input";

export type NumberInputProps = React.ComponentProps<typeof NumberField.Root>;

function NumberInput(props: NumberInputProps) {
  return (
    <NumberField.Root {...props}>
      <NumberField.ScrubArea>
        <NumberField.ScrubAreaCursor />
      </NumberField.ScrubArea>
      <NumberField.Group className="flex items-center">
        <NumberField.Input render={<Input className="rounded-r-none border-r-0" />} />
        <div className="flex w-8 flex-col rounded-r-xl border border-outline-variant *:flex-1">
          <NumberField.Increment className="flex items-center justify-center border-b border-outline-variant">
            <MaterialIcon size={19}>add</MaterialIcon>
          </NumberField.Increment>
          <NumberField.Decrement className="flex items-center justify-center">
            <MaterialIcon size={19}>remove</MaterialIcon>
          </NumberField.Decrement>
        </div>
      </NumberField.Group>
    </NumberField.Root>
  );
}

export { NumberInput };
