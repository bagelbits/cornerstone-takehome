import { Grid, Typography } from "@mui/material";

import { SearchParams } from "@/types/diagnoses";

type ComponentProps = {
  searchParams: SearchParams;
  setSearchParams: (params: SearchParams) => void;
};

const PageComponent = ({ searchParams, setSearchParams }: ComponentProps) => {
  return (
    <Grid container spacing={3} alignItems={"center"} sx={{ pb: 3 }}>
      <Grid item xs={4}>
        <Typography variant="h5" align="center">
          Filters
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" align="center">
          Go
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" align="center">
          Here
        </Typography>
      </Grid>
    </Grid>
  );
};

const LoadingState = () => {
  return (
    <Grid container spacing={3} alignItems={"center"} sx={{ pb: 3 }}>
      <Grid item xs={4}>
        <Typography variant="h5" align="center">
          Loading
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" align="center">
          Loading
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" align="center">
          Loading
        </Typography>
      </Grid>
    </Grid>
  );
};

const Filters = {
  PageComponent,
  LoadingState,
};

export default Filters;
