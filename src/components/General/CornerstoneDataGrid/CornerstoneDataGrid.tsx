import { Box } from "@mui/material";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";

import { DEFAULT_DATAGRID_OPTIONS } from "./utils";

const CornerstoneDataGrid = (props: DataGridProps) => {
  const mergedProps: DataGridProps = {
    ...DEFAULT_DATAGRID_OPTIONS,
    ...props,
    slots: {
      ...DEFAULT_DATAGRID_OPTIONS.slots,
      ...props.slots,
    },
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: 686,
        backgroundColor: "background.paper",
      }}
    >
      <DataGrid
        {...mergedProps}
        pagination
        slotProps={{
          loadingOverlay: { variant: "skeleton", noRowsVariant: "skeleton" },
        }}
      />
    </Box>
  );
};

export default CornerstoneDataGrid;
