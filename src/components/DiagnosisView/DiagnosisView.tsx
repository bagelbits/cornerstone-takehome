import { Grid } from "@mui/material";

import CornerstoneHeader from "@/components/General/CornerstoneHeader";

import Summary from "./Summary";

const PageComponent = () => {
  return (
    <Grid container justifyContent="center">
      <CornerstoneHeader />
      <Summary />
    </Grid>
  );
};

export default PageComponent;
