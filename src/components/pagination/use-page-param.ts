import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function usePageParam(initialState: { page: number; pageSize: number }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? initialState.page);
  const pageSize = Number(searchParams.get("pageSize") ?? initialState.pageSize);

  const handlePageChange = (newPage: number) => {
    if (newPage === page) return;

    const params = new URLSearchParams(searchParams);
    params.set("page", `${newPage}`);

    replace(`${pathname}?${params.toString()}`);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    if (newPageSize === pageSize) return;

    const params = new URLSearchParams(searchParams);
    params.set("pageSize", `${newPageSize}`);

    replace(`${pathname}?${params.toString()}`);
  };

  return { page, pageSize, handlePageChange, handlePageSizeChange };
}
