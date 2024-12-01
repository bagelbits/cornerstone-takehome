import { DEFAULT_PAGINATION_OPTIONS } from "@/utils/constants";

import CornerstoneDataGridToolbar from "./CornerstoneDataGridToolbar";
import { GridFeatureMode } from "@mui/x-data-grid";

export const DEFAULT_DATAGRID_OPTIONS = {
  slots: {
    toolbar: CornerstoneDataGridToolbar,
  },
  disableColumnFilter: true,
  // pagination: true,
  paginationMode: "server" as GridFeatureMode,
  pageSizeOptions: DEFAULT_PAGINATION_OPTIONS.pageSizeOptions,
};
