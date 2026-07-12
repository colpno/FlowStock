"use client";

import type { PaginationDesktopProps } from "./pagination.types";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { usePaginationProvider } from "./pagination-provider";
import { usePagination } from "./use-pagination";

export function PaginationDesktop({
  siblingCount = 3,
  boundaryCount = 1,
  ...props
}: PaginationDesktopProps) {
  const { page, pageCount, onPageChange } = usePaginationProvider();
  const pages = usePagination({
    page,
    pageCount,
    siblingCount,
    boundaryCount,
  });

  if (pageCount <= 1) return null;

  return (
    <nav
      aria-label="Pagination"
      {...props}
      className={cn("flex items-center gap-1", props.className)}
    >
      <Button
        size="icon-sm"
        variant="outline"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        <ChevronLeft className="size-4" />
      </Button>

      {pages.map((item, index) =>
        item === "..." ? (
          <span
            key={index}
            className="text-muted-foreground flex h-9 w-9 items-center justify-center"
          >
            …
          </span>
        ) : (
          <Button
            key={item}
            size="icon-sm"
            variant={item === page ? "default" : "outline"}
            onClick={() => onPageChange(item)}
          >
            {item}
          </Button>
        )
      )}

      <Button
        size="icon-sm"
        variant="outline"
        onClick={() => onPageChange(page + 1)}
        disabled={page === pageCount}
      >
        <ChevronRight className="size-4" />
      </Button>
    </nav>
  );
}
