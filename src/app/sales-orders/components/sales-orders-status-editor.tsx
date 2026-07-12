import type { OrderStatus } from "@/types/data";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ORDER_STATUSES } from "@/constants/common";
import { toPascalCase } from "@/lib/utils";

type Props = {
  onSubmit: (status: OrderStatus) => void;
};

export default function SalesOrdersStatusEditor(props: Props) {
  const [value, setValue] = useState<OrderStatus[]>([]);

  return (
    <>
      <ToggleGroup onValueChange={(v) => setValue(v as OrderStatus[])} className="flex flex-wrap">
        {ORDER_STATUSES.map((status) => (
          <ToggleGroupItem variant="outline" key={`toggle-${status}`} value={status}>
            {toPascalCase(status)}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <Button onClick={() => value[0] && props.onSubmit(value[0])}>Change</Button>
    </>
  );
}
