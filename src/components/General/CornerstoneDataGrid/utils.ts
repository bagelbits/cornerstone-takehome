import { DEFAULT_PAGINATION_OPTIONS } from "@/utils/constants";

import CornerstoneDataGridToolbar from "./CornerstoneDataGridToolbar";
import { GridFeatureMode, GridLoadingOverlayVariant } from "@mui/x-data-grid";

export const DEFAULT_DATAGRID_OPTIONS = {
  slots: {
    toolbar: CornerstoneDataGridToolbar,
  },
  slotProps: {
    loadingOverlay: {
      variant: "skeleton" as GridLoadingOverlayVariant,
      noRowsVariant: "skeleton" as GridLoadingOverlayVariant,
    },
  },
  disableColumnFilter: true,
  // pagination: true,
  paginationMode: "server" as GridFeatureMode,
  pageSizeOptions: DEFAULT_PAGINATION_OPTIONS.pageSizeOptions,
};
