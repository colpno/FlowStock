import type { DatePickerProps, DatePickerValue, DateRange, Mode } from "./date-picker.types";

import { useState } from "react";

import { MaterialIcon } from "@/components/material-icon";

import { Calendar } from "../calendar";
import { Input } from "../input";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { formatDate, isValidDate, normalizeValue } from "./date-picker.utils";

function DatePicker<TMode extends Mode = "single">({
  value: valueProp,
  onChange,
  calendarProps,
  mode = "single" as TMode,
  ...props
}: DatePickerProps<TMode>) {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState<Date | undefined>(() => normalizeValue(valueProp));
  const [value, setValue] = useState(() => formatDate(valueProp));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    const date = new Date(value);
    if (isValidDate(date) && /^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
      onChange?.(date as DatePickerValue<TMode>);
      setMonth(date);
    }
  };

  const handleCalendarSelect = (date: Date | Date[] | DateRange | undefined) => {
    if (date) {
      onChange?.(date as DatePickerValue<TMode>);
    }
    setValue(formatDate(date));
  };

  return (
    <div className="group relative">
      <Input
        {...props}
        value={value}
        onChange={handleInputChange}
        autoComplete="off"
        className="pr-10"
      />

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="absolute inset-y-0 right-0 flex items-center pr-3 text-on-surface-variant transition-colors hover:text-on-surface">
          <MaterialIcon size={20}>calendar_today</MaterialIcon>

          <span className="sr-only">Select date</span>
        </PopoverTrigger>

        <PopoverContent
          className="w-auto overflow-hidden p-0"
          align="end"
          alignOffset={-8}
          sideOffset={10}
        >
          <Calendar
            {...calendarProps}
            mode={mode as "single"}
            selected={valueProp === "" ? undefined : (valueProp as Date)}
            month={month}
            onMonthChange={setMonth}
            onSelect={handleCalendarSelect}
            aria-label="Calendar"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePicker;
