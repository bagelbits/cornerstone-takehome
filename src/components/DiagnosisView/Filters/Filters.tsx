import { Grid, Skeleton } from "@mui/material";
import useSWR from "swr";

import Error from "@/components/General/Error";
import { SearchParams } from "@/types/diagnoses";
import fetcher from "@/utils/fetcher";

import SeverityFilter from "./SeverityFilter";
import EventFilter from "./EventFilter";
import StartDateFilter from "./StartDateFilter";

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
    <Grid container spacing={10} alignItems={"center"} sx={{ px: 2, pb: 3 }}>
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
        <StartDateFilter
          startDate={data.startDate}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </Grid>
    </Grid>
  );
};

const LoadingState = () => {
  return (
    <Grid container spacing={3} alignItems={"center"} sx={{ pb: 3 }}>
      <Grid item xs={4}>
        <Skeleton variant="rounded" height={56} />
      </Grid>
      <Grid item xs={4}>
        <Skeleton variant="rounded" height={56} />
      </Grid>
      <Grid item xs={4}>
        <Skeleton variant="rounded" height={56} />
      </Grid>
    </Grid>
  );
};

const Filters = {
  PageComponent,
  LoadingState,
};

export default Filters;
