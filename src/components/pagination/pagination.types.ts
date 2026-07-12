export type PaginationDesktopProps = {
  /**
   * The number of page buttons shown on each side of the current page.
   * @default 3
   */
  siblingCount?: number;
  /**
   * The number of page buttons that are always shown at the beginning and end of the pagination.
   * @default 1
   */
  boundaryCount?: number;
} & React.ComponentProps<"nav">;

export type PaginationMobileProps = React.ComponentProps<"nav">;

export type PaginationProviderValue = {
  /** Current page. */
  page: number;
  /** The number of items per page. */
  pageSize: number;
  /** The total of pages. */
  pageCount: number;
  onPageChange: (page: number) => void;

  /** The total of items. */
  totalItems?: number;
};
