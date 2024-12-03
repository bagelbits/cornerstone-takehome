import { DiagnosisStatus } from "@/types/diagnoses";
import { DataGridProps, GridColDef } from "@mui/x-data-grid";

export const defaultSearchParams = {
  page: 1,
  pageSize: 10,
};

const columns: GridColDef[] = [
  {
    field: "Event_Name",
    headerName: "Event Name",
    width: 200,
    sortable: false,
    editable: true,
  },
  { field: "Serious", headerName: "Serious", sortable: false, editable: true },
  { field: "Ongoing", headerName: "Ongoing", sortable: false, editable: true },
  {
    field: "Severity",
    headerName: "Severity",
    sortable: false,
    editable: true,
  },
  {
    field: "Start_Date",
    headerName: "Start Date",
    sortable: false,
    editable: true,
  },
  {
    field: "End_Date",
    headerName: "End Date",
    sortable: false,
    editable: true,
  },
  {
    field: "Drug_Related",
    headerName: "Drug Related",
    sortable: false,
    editable: true,
  },
  { field: "Subject", headerName: "Subject", sortable: false, editable: true },
  { field: "Prot", headerName: "Protocol", sortable: false, editable: true },
  { field: "Visit", headerName: "Visit", sortable: false, editable: true },
  {
    field: "Cause",
    headerName: "Cause",
    width: 200,
    sortable: false,
    editable: true,
  },
  { field: "Cause_1", headerName: "Cause 1", sortable: false, editable: true },
  {
    field: "Cause_1_Name",
    headerName: "Cause 1 Name",
    sortable: false,
    editable: true,
  },
  { field: "Cause_2", headerName: "Cause 2", sortable: false, editable: true },
  {
    field: "Cause_2_Name",
    headerName: "Cause 2 Name",
    sortable: false,
    editable: true,
  },
  { field: "Cause_3", headerName: "Cause 3", sortable: false, editable: true },
  {
    field: "Cause_3_Name",
    headerName: "Cause 3 Name",
    sortable: false,
    editable: true,
  },
  {
    field: "Action_1_Name",
    headerName: "Action 1 Name",
    sortable: false,
    editable: true,
  },
  {
    field: "Action_2_Name",
    headerName: "Action 2 Name",
    sortable: false,
    editable: true,
  },
  {
    field: "Action_3_Name",
    headerName: "Action 3 Name",
    sortable: false,
    editable: true,
  },
  {
    field: "Action_Background_Dose",
    headerName: "Action Background Dose",
    sortable: false,
    editable: true,
  },
  {
    field: "Action_Dose_1",
    headerName: "Action Dose 1",
    sortable: false,
    editable: true,
  },
  {
    field: "Action_Dose_2",
    headerName: "Action Dose 2",
    sortable: false,
    editable: true,
  },
  {
    field: "Action_Dose_3",
    headerName: "Action Dose 3",
    sortable: false,
    editable: true,
  },
  {
    field: "Action_Drug_Dose",
    headerName: "Action Drug Dose",
    sortable: false,
    editable: true,
  },
  {
    field: "Action_None",
    headerName: "Action None",
    sortable: false,
    editable: true,
  },
  {
    field: "Action_Other",
    headerName: "Action Other",
    sortable: false,
    editable: true,
  },
  {
    field: "Action_Treatment",
    headerName: "Action Treatment",
    sortable: false,
    editable: true,
  },
  {
    field: "Action_Treatment_Other",
    headerName: "Action Treatment Other",
    sortable: false,
    editable: true,
  },
  {
    field: "Action_Withdrawn",
    headerName: "Action Withdrawn",
    sortable: false,
    editable: true,
  },
];

const STATUS_TO_CLASS_MAPPING = {
  bookmark: "Info",
  valid: "Success",
  error: "Error",
};

export const dataGridProps: DataGridProps = {
  columns,
  getRowClassName: (params) =>
    params.row.status
      ? `cornerstone-theme--${
          STATUS_TO_CLASS_MAPPING[params.row.status as DiagnosisStatus]
        }`
      : "",
};
