import { useState } from "react";

import { Grid } from "@mui/material";
import { GridPaginationModel } from "@mui/x-data-grid";
import useSWR from "swr";

import Error from "@/components/General/Error";
import { DEFAULT_PAGINATION_OPTIONS } from "@/utils/constants";
import { Diagnosis, SearchParams } from "@/types/diagnoses";
import { fetcherWithBody, fetcherWithQueryString } from "@/utils/fetcher";

import Filters from "./Filters";
import { dataGridProps, defaultSearchParams } from "./resultTableRender";
import CorcerstoneDataGrid from "../General/CornerstoneDataGrid";

const PageComponent = () => {
  const [searchParams, setSearchParams] =
    useState<SearchParams>(defaultSearchParams);
  const { data, error, isLoading } = useSWR(
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

  const handleRowUpdate = (updatedRow: Diagnosis) => {
    console.log("Updated row:", updatedRow);
    const response = fetcherWithBody(
      `/api/v1/diagnoses/${updatedRow.cai_record_num}`,
      updatedRow
    );

    console.log("Response:", response);
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
        {/* TODO: https://mui.com/x/react-data-grid/editing/#server-side-persistence */}
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
        />
      </Grid>
    </Grid>
  );
};

export default PageComponent;
