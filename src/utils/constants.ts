import { PaginationOptions } from "@/types/common";

export const DEFAULT_PAGINATION_OPTIONS: PaginationOptions = {
  page: 1,
  pageSize: 10,
  pageSizeOptions: [10, 25, 50, 100],
  total: 0,
};
