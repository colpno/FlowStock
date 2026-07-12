"use client";

import { MaterialIcon } from "../material-icon";
import { usePageParam } from "../pagination/use-page-param";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const pageSizes: number[] = [10, 25, 50, 75, 100];

export type TableControlBarSettingsProps<TData extends string> = {
  hidableColumns?: Partial<Record<TData, string>>;
  hiddenColumns?: TData[];
  sortable?: boolean;
  resizable?: boolean;
  onHidableColumnClick?: (id: TData, isHid: boolean) => void;
  onSortClick?: (clicked: boolean) => void;
  onResizeClick?: (clicked: boolean) => void;
} & React.ComponentProps<"div">;

export default function TableControlBarSettings<TData extends string>({
  hidableColumns,
  hiddenColumns,
  sortable,
  resizable,
  onHidableColumnClick,
  onSortClick,
  onResizeClick,
}: TableControlBarSettingsProps<TData>) {
  const { handlePageSizeChange, pageSize } = usePageParam({
    page: 1,
    pageSize: 10,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
        <MaterialIcon size={18}>settings</MaterialIcon>
        Table settings
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-40">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <MaterialIcon size={18}>download</MaterialIcon>
            Export
          </DropdownMenuItem>

          <DropdownMenuCheckboxItem checked={sortable} onCheckedChange={onSortClick}>
            <MaterialIcon size={18}>swap_vert</MaterialIcon>
            Sorting
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem checked={resizable} onCheckedChange={onResizeClick}>
            <MaterialIcon size={18}>resize</MaterialIcon>
            Resizing
          </DropdownMenuCheckboxItem>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <MaterialIcon size={18}>table</MaterialIcon>
              Page size
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup
                  value={`${pageSize}`}
                  onValueChange={(v) => handlePageSizeChange(Number(v))}
                >
                  {pageSizes.map((size) => (
                    <DropdownMenuRadioItem key={size} value={`${size}`}>
                      {size}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          {hidableColumns && hiddenColumns && onHidableColumnClick && (
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <MaterialIcon size={18}>visibility_off</MaterialIcon>
                Hide Columns
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {Object.entries(hidableColumns).map(([id, display]) => (
                    <DropdownMenuCheckboxItem
                      key={id}
                      checked={hiddenColumns.some((col) => col === id)}
                      onCheckedChange={(checked) => onHidableColumnClick(id as TData, checked)}
                    >
                      {display as string}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
