import { ReactNode, useState } from "react";

import { Button, Grid } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { GridPaginationModel, GridRowSelectionModel } from "@mui/x-data-grid";
import useSWR from "swr";

import Error from "@/components/General/Error";
import { DEFAULT_PAGINATION_OPTIONS } from "@/utils/constants";
import {
  DiagnosisStatus,
  Diagnosis,
  SearchParams,
  UpdateDiagnosisRequest,
} from "@/types/diagnoses";
import { fetcherWithBody, fetcherWithQueryString } from "@/utils/fetcher";

import Filters from "./Filters";
import { dataGridProps, defaultSearchParams } from "./resultTableRender";
import CorcerstoneDataGrid from "../General/CornerstoneDataGrid";

type ExtraToolbarButtonsProps = {
  rowsSelected: GridRowSelectionModel;
  handleRowUpdate: (updatedRow: UpdateDiagnosisRequest) => Promise<Diagnosis>;
};

const ExtraToolbarButtons = ({
  rowsSelected,
  handleRowUpdate,
}: ExtraToolbarButtonsProps): ReactNode[] => {
  if (!rowsSelected || rowsSelected.length === 0) {
    return [];
  }

  const handleClick = (flag: DiagnosisStatus) => {
    for (const rowId of rowsSelected) {
      handleRowUpdate({ cai_record_num: rowId as string, status: flag });
    }
  };

  return [
    <Button
      color="error"
      size="small"
      startIcon={<ErrorIcon />}
      onClick={() => handleClick("error")}
      key={1}
    >
      Erroneous
    </Button>,
    <Button
      color="success"
      size="small"
      startIcon={<CheckCircleIcon />}
      onClick={() => handleClick("valid")}
      key={2}
    >
      Valid
    </Button>,
    <Button
      color="info"
      size="small"
      startIcon={<BookmarkIcon />}
      onClick={() => handleClick("bookmark")}
      key={3}
    >
      Bookmark
    </Button>,
  ];
};

const PageComponent = () => {
  const [searchParams, setSearchParams] =
    useState<SearchParams>(defaultSearchParams);
  const [rowsSelected, setRowsSelected] = useState<GridRowSelectionModel>([]);

  const { data, error, isLoading, mutate } = useSWR(
    ["/api/v1/diagnoses", searchParams],
    ([url, params]) => fetcherWithQueryString(url, params)
  );

  if (error) {
    return <Error label={"Error loading diagnoses"} />;
  }

  const results = data?.results || [];
  const pagination = data?.pagination || DEFAULT_PAGINATION_OPTIONS;

  const handlePaginationModelChange = (
    paginationModel: GridPaginationModel
  ) => {
    setSearchParams({
      ...searchParams,
      page: paginationModel.page + 1,
      pageSize: paginationModel.pageSize,
    });
  };

  const handleRowUpdate = async (updatedRow: UpdateDiagnosisRequest) => {
    const response = await fetcherWithBody(
      `/api/v1/diagnoses/${updatedRow.cai_record_num}`,
      updatedRow
    );
    mutate();

    return response;
  };

  const handleProcessRowUpdateError = (error: Error) => {
    console.error("Error updating row:", error);
  };

  return (
    <Grid container sx={{ width: "calc(100% - 128px)", mt: 3 }}>
      <Grid item xs={12}>
        <Filters.PageComponent
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </Grid>
      <Grid item xs={12}>
        <CorcerstoneDataGrid
          {...dataGridProps}
          editMode="row"
          rows={results}
          paginationModel={{
            page: pagination.page - 1,
            pageSize: pagination.pageSize,
          }}
          rowCount={pagination.total}
          onPaginationModelChange={handlePaginationModelChange}
          loading={isLoading}
          processRowUpdate={handleRowUpdate}
          onProcessRowUpdateError={handleProcessRowUpdateError}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowsSelected(newRowSelectionModel);
          }}
          rowSelectionModel={rowsSelected}
          slotProps={{
            toolbar: {
              ExtraToolbarButtons: ExtraToolbarButtons({
                rowsSelected,
                handleRowUpdate,
              }),
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default PageComponent;
