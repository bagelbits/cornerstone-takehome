import { Box } from "@mui/material";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";

import { DEFAULT_DATAGRID_OPTIONS } from "./utils";
import { DEFAULT_PAGINATION_OPTIONS } from "@/utils/constants";

const CornerstoneDataGrid = (props: DataGridProps) => {
  const mergedProps: DataGridProps = {
    ...DEFAULT_DATAGRID_OPTIONS,
    ...props,
    slots: {
      ...DEFAULT_DATAGRID_OPTIONS.slots,
      ...props.slots,
    },
  };
  // const height =
  //   166 +
  //   (mergedProps?.paginationModel?.pageSize ||
  //     DEFAULT_PAGINATION_OPTIONS.pageSize) *
  //     52;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: 682,
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
