"use client";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type RowData,
  type TableOptions,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";

import { cn } from "@/lib/utils";

import { MaterialIcon } from "../material-icon";
import { PaginationDesktop } from "../pagination/pagination-desktop";
import PaginationInfo from "../pagination/pagination-info";
import PaginationMobile from "../pagination/pagination-mobile";
import PaginationProvider from "../pagination/pagination-provider";
import { usePageParam } from "../pagination/use-page-param";

export type TableProps<TData extends RowData> = {
  hiddenColumns?: Array<keyof TData>;
  sortable?: boolean;
  resizable?: boolean;
  emptyMessage?: string;
  pagination?: boolean;
} & Pick<TableOptions<TData>, "columns" | "data">;

export default function Table<TData extends RowData>({
  columns,
  data,
  hiddenColumns = [],
  sortable = false,
  resizable = false,
  emptyMessage = "No results found.",
  pagination = true,
}: TableProps<TData>) {
  const { handlePageChange, pageSize, page } = usePageParam({
    page: 1,
    pageSize: 10,
  });
  const totalItems = data.length;
  const pageCount = Math.ceil(totalItems / pageSize);
  const columnVisibility = hiddenColumns.reduce(
    (acc, col) => ({
      ...acc,
      [col]: false,
    }),
    {} as VisibilityState
  );

  const table = useReactTable<TData>({
    columns,
    data,
    state: {
      pagination: {
        pageIndex: page - 1,
        pageSize,
      },
      columnVisibility,
    },
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          {/* Headers */}
          <thead className="border-b border-outline-variant bg-surface-container-low">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="relative space-x-0.5 px-4 py-3 typo-label-sm font-bold tracking-wider text-on-surface-variant uppercase"
                  >
                    <div
                      className={cn(
                        "flex items-center justify-start",
                        header.column.columnDef.meta?.align === "right" && "justify-end",
                        header.column.columnDef.meta?.align === "center" && "justify-center"
                      )}
                      style={{ width: `${header.column.getSize()}px` }}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}

                      {/* Sort handler */}
                      {sortable && header.column.columnDef.enableSorting && (
                        <div className="inline-flex size-6 items-center justify-center">
                          {header.column.getIsSorted() === "asc" ? (
                            <button onClick={header.column.getToggleSortingHandler()}>
                              <MaterialIcon>arrow_drop_up</MaterialIcon>
                            </button>
                          ) : header.column.getIsSorted() === "desc" ? (
                            <button onClick={header.column.getToggleSortingHandler()}>
                              <MaterialIcon>arrow_drop_down</MaterialIcon>
                            </button>
                          ) : (
                            <button onClick={header.column.getToggleSortingHandler()}>
                              <MaterialIcon size={18}>swap_vert</MaterialIcon>
                            </button>
                          )}
                        </div>
                      )}

                      {/* Resize handler */}
                      {resizable && header.column.columnDef.enableResizing && (
                        <button
                          type="button"
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          className={cn(
                            "absolute inset-y-0 right-0 w-1 cursor-col-resize bg-surface-container-high",
                            header.column.getIsResizing() && "bg-primary"
                          )}
                        />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* Data Rows */}
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-outline-variant transition-colors hover:bg-surface-container-low"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={cn(
                      "px-4 py-3 typo-table-data",
                      cell.column.columnDef.meta?.align === "right" && "text-right",
                      cell.column.columnDef.meta?.align === "center" && "text-center"
                    )}
                  >
                    <div style={{ width: `${cell.column.getSize()}px` }}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {table.getRowModel().rows.length <= 0 && (
        <div className="py-4 text-center typo-table-data">{emptyMessage}</div>
      )}

      {/* Pagination */}
      {pagination && (
        <PaginationProvider
          value={{ page, pageSize, totalItems, pageCount, onPageChange: handlePageChange }}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <PaginationInfo />

            <PaginationDesktop className="not-md:hidden" />
            <PaginationMobile className="md:hidden" />
          </div>
        </PaginationProvider>
      )}
    </div>
  );
}
