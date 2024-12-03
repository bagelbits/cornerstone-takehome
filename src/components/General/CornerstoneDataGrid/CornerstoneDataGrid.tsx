import { Box } from "@mui/material";
import { DataGridProps } from "@mui/x-data-grid";

import { DEFAULT_DATAGRID_OPTIONS } from "./utils";
import { DEFAULT_PAGINATION_OPTIONS } from "@/utils/constants";
import { StyledDataGrid } from "./styles";

const CornerstoneDataGrid = (props: DataGridProps) => {
  const mergedProps: DataGridProps = {
    ...DEFAULT_DATAGRID_OPTIONS,
    ...props,
    slots: {
      ...DEFAULT_DATAGRID_OPTIONS.slots,
      ...props.slots,
    },
    slotProps: {
      ...DEFAULT_DATAGRID_OPTIONS.slotProps,
      ...props.slotProps,
    },
  };

  const height =
    166 +
    (mergedProps?.paginationModel?.pageSize ||
      DEFAULT_PAGINATION_OPTIONS.pageSize) *
      52;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height,
        backgroundColor: "background.paper",
      }}
    >
      <StyledDataGrid {...mergedProps} pagination />
    </Box>
  );
};

export default CornerstoneDataGrid;
