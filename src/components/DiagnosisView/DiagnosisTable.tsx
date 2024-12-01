import { useState } from "react";

import { Box, Grid } from "@mui/material";
import { DataGrid, GridPaginationModel } from "@mui/x-data-grid";
import useSWR from "swr";

import Error from "@/components/General/Error";
import { DEFAULT_PAGINATION_OPTIONS } from "@/utils/constants";
import { SearchParams } from "@/types/diagnoses";
import { fetcherWithQueryString } from "@/utils/fetcher";

import Filters from "./Filters";
import { dataGridProps, defaultSearchParams } from "./resultTableRender";

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

  console.log(data);
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

  return (
    <Grid container sx={{ width: "calc(100% - 128px)", mt: 3 }}>
      <Grid item xs={12}>
        <Filters.PageComponent
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            minHeight: 210,
            backgroundColor: "background.paper",
          }}
        >
          <DataGrid
            {...dataGridProps}
            rows={results}
            paginationModel={{
              page: pagination.page - 1,
              pageSize: pagination.pageSize,
            }}
            rowCount={pagination.total}
            onPaginationModelChange={handlePaginationModelChange}
            loading={isLoading}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default PageComponent;
