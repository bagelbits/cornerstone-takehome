import {
  DataGridProps,
  GridColDef,
  GridFeatureMode,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";

import { DEFAULT_PAGINATION_OPTIONS } from "@/utils/constants";

export const defaultSearchParams = {
  page: 1,
  pageSize: 10,
};

const columns: GridColDef[] = [
  { field: "row_names", headerName: "Row Names", sortable: false },
  { field: "Event_Name", headerName: "Event Name", sortable: false },
  { field: "Serious", headerName: "Serious", sortable: false },
  { field: "Ongoing", headerName: "Ongoing", sortable: false },
  { field: "Severity", headerName: "Severity", sortable: false },
  { field: "Start_Date", headerName: "Start Date", sortable: false },
  { field: "End_Date", headerName: "End Date", sortable: false },
  { field: "Drug_Related", headerName: "Drug Related", sortable: false },
  { field: "Subject", headerName: "Subject", sortable: false },
  { field: "Prot", headerName: "Protocol", sortable: false },
  { field: "Visit", headerName: "Visit", sortable: false },
  { field: "Cause", headerName: "Cause", sortable: false },
  { field: "Cause_1", headerName: "Cause 1", sortable: false },
  { field: "Cause_1_Name", headerName: "Cause 1 Name", sortable: false },
  { field: "Cause_2", headerName: "Cause 2", sortable: false },
  { field: "Cause_2_Name", headerName: "Cause 2 Name", sortable: false },
  { field: "Cause_3", headerName: "Cause 3", sortable: false },
  { field: "Cause_3_Name", headerName: "Cause 3 Name", sortable: false },
  { field: "Action_1_Name", headerName: "Action 1 Name", sortable: false },
  { field: "Action_2_Name", headerName: "Action 2 Name", sortable: false },
  { field: "Action_3_Name", headerName: "Action 3 Name", sortable: false },
  {
    field: "Action_Background_Dose",
    headerName: "Action Background Dose",
    sortable: false,
  },
  { field: "Action_Dose_1", headerName: "Action Dose 1", sortable: false },
  { field: "Action_Dose_2", headerName: "Action Dose 2", sortable: false },
  { field: "Action_Dose_3", headerName: "Action Dose 3", sortable: false },
  {
    field: "Action_Drug_Dose",
    headerName: "Action Drug Dose",
    sortable: false,
  },
  { field: "Action_None", headerName: "Action None", sortable: false },
  { field: "Action_Other", headerName: "Action Other", sortable: false },
  {
    field: "Action_Treatment",
    headerName: "Action Treatment",
    sortable: false,
  },
  {
    field: "Action_Treatment_Other",
    headerName: "Action Treatment Other",
    sortable: false,
  },
  {
    field: "Action_Withdrawn",
    headerName: "Action Withdrawn",
    sortable: false,
  },
];

const DataGridToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
};

export const dataGridProps: DataGridProps = {
  columns,
  getRowId: (row) => row.cai_record_num,

  // Default filters
  slots: {
    toolbar: DataGridToolbar,
  },
  disableColumnFilter: true,
  pagination: true,
  paginationMode: "server" as GridFeatureMode,
  pageSizeOptions: DEFAULT_PAGINATION_OPTIONS.pageSizeOptions,
  slotProps: {
    loadingOverlay: { variant: "skeleton", noRowsVariant: "skeleton" },
  },
};
