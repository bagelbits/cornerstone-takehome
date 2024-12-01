import { Grid, Typography } from "@mui/material";
import useSWR from "swr";

import Error from "@/components/General/Error";
import { SearchParams } from "@/types/diagnoses";
import fetcher from "@/utils/fetcher";

import SeverityFilter from "./SeverityFilter";
import EventFilter from "./EventFilter";

type ComponentProps = {
  searchParams: SearchParams;
  setSearchParams: (params: SearchParams) => void;
};

const PageComponent = ({ searchParams, setSearchParams }: ComponentProps) => {
  const { data, isLoading, error } = useSWR(
    "/api/v1/diagnoses/search_filters",
    fetcher
  );

  if (isLoading) {
    return <LoadingState />;
  }
  if (error) {
    return <Error label={"Error loading diagnoses"} />;
  }

  return (
    <Grid container spacing={3} alignItems={"center"} sx={{ pb: 3 }}>
      <Grid item xs={4}>
        <EventFilter
          events={data.events}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </Grid>
      <Grid item xs={4}>
        <SeverityFilter
          severity={data.severity}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
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
