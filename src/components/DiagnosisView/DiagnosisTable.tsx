import { Grid } from "@mui/material";
import useSWR from "swr";

import Error from "@/components/General/Error";
import { SearchParams } from "@/types/diagnoses";
import { fetcherWithQueryString } from "@/utils/fetcher";

import Filters from "./Filters";

type ComponentProps = {
  searchParams: SearchParams;
  setSearchParams: (params: SearchParams) => void;
};

const PageComponent = ({ searchParams, setSearchParams }: ComponentProps) => {
  const { data, error, isLoading } = useSWR(
    ["/api/v1/diagnoses", searchParams],
    ([url, params]) => fetcherWithQueryString(url, params)
  );

  if (error) {
    return <Error label={"Error loading diagnoses"} />;
  }
  if (isLoading) {
    return <LoadingState />;
  }

  console.log(data);

  return (
    <Grid container sx={{ width: "calc(100% - 128px)", mt: 3 }}>
      <Filters.PageComponent
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </Grid>
  );
};

const LoadingState = () => {
  return (
    <Grid container sx={{ width: "calc(100% - 128px)", mt: 3 }}>
      <Filters.LoadingState />
    </Grid>
  );
};

export default PageComponent;
