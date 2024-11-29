import { useState } from "react";

import { Grid } from "@mui/material";

import CornerstoneHeader from "@/components/General/CornerstoneHeader";
import { SearchParams } from "@/types/diagnoses";

import Summary from "./Summary";
import DiagnosisTable from "./DiagnosisTable";
import { defaultSearchParams } from "./resultTableRender";

const PageComponent = () => {
  const [searchParams, setSearchParams] =
    useState<SearchParams>(defaultSearchParams);
  return (
    <Grid container justifyContent="center">
      <CornerstoneHeader />
      <Summary searchParams={searchParams} />
      <DiagnosisTable
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </Grid>
  );
};

export default PageComponent;
