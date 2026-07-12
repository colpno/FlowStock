import type { PaginationDesktopProps, PaginationProviderValue } from "./pagination.types";

const DOTS = "...";

export function usePagination({
  page,
  pageCount,
  siblingCount = 3,
  boundaryCount = 1,
}: Pick<PaginationProviderValue, "page" | "pageCount"> &
  Pick<PaginationDesktopProps, "siblingCount" | "boundaryCount">) {
  if (pageCount <= 1) return [1];

  const totalPageNumbers = siblingCount * 2 + boundaryCount * 2 + 3;

  if (totalPageNumbers >= pageCount) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(page - siblingCount, boundaryCount + 2);
  const rightSibling = Math.min(page + siblingCount, pageCount - boundaryCount - 1);

  const showLeftDots = leftSibling > boundaryCount + 2;
  const showRightDots = rightSibling < pageCount - boundaryCount - 1;

  const pages: (number | typeof DOTS)[] = [];

  for (let i = 1; i <= boundaryCount; i++) {
    pages.push(i);
  }

  if (showLeftDots) {
    pages.push(DOTS);
  } else {
    for (let i = boundaryCount + 1; i < leftSibling; i++) {
      pages.push(i);
    }
  }

  for (let i = leftSibling; i <= rightSibling; i++) {
    pages.push(i);
  }

  if (showRightDots) {
    pages.push(DOTS);
  } else {
    for (let i = rightSibling + 1; i <= pageCount - boundaryCount; i++) {
      pages.push(i);
    }
  }

  for (let i = pageCount - boundaryCount + 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return pages;
}
