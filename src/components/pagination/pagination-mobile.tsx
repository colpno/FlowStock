"use client";

import type { PaginationMobileProps } from "./pagination.types";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { usePaginationProvider } from "./pagination-provider";

export default function PaginationMobile(props: PaginationMobileProps) {
  const { page, pageCount, onPageChange } = usePaginationProvider();

  if (pageCount <= 1) return null;

  return (
    <nav
      aria-label="Pagination"
      {...props}
      className={cn("flex items-center gap-1", props.className)}
    >
      <Button
        size="icon-xs"
        variant="outline"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        <ChevronLeft className="size-4" />
      </Button>

      <p className="typo-body-md">
        Page {page} of {pageCount}
      </p>

      <Button
        size="icon-xs"
        variant="outline"
        onClick={() => onPageChange(page + 1)}
        disabled={page === pageCount}
      >
        <ChevronRight className="size-4" />
      </Button>
    </nav>
  );
}
