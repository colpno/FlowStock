"use client";

import { usePaginationProvider } from "./pagination-provider";

export default function PaginationInfo() {
  const { page, pageSize, totalItems } = usePaginationProvider();

  const offsetEnd = page * pageSize;
  const offsetStart = offsetEnd - pageSize + 1;

  return (
    <p className="typo-body-sm">
      Showing {offsetStart} - {offsetEnd} of {totalItems}
    </p>
  );
}
