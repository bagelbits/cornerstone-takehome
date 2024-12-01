import { Grid } from "@mui/material";

import CornerstoneHeader from "@/components/General/CornerstoneHeader";

import Summary from "./Summary";
import DiagnosisTable from "./DiagnosisTable";

const PageComponent = () => {
  return (
    <Grid container justifyContent="center">
      <CornerstoneHeader />
      <Summary />
      <DiagnosisTable />
    </Grid>
  );
};

export default PageComponent;
