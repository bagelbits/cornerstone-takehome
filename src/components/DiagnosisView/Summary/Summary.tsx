import { Paper, Stack } from "@mui/material";
import useSWR from "swr";

import Error from "@/components/General/Error";
import fetcher from "@/utils/fetcher";
import { DiagnosisSummary } from "@/types/diagnoses";

import SeriousGraph from "./SeriousGraph";
import OngoingGraph from "./OngoingGraph";
import EventNameGraph from "./EventNameGraph";

const PageComponent = () => {
  const { data, error, isLoading } = useSWR(
    "/api/v1/diagnoses/summary",
    fetcher
  );

  const diagnosesSummary = data as DiagnosisSummary;

  if (error) {
    console.error("Error loading diagnoses summary", error);
    return <Error label={"Error loading diagnoses summary"} />;
  }
  if (isLoading) {
    return <LoadingState />;
  }
  return (
    <Paper sx={{ mt: 9, p: 1 }}>
      <Stack direction="row" width="100%" textAlign="center" spacing={2}>
        <EventNameGraph.PageComponent
          eventNames={diagnosesSummary.event_names}
        />
        <SeriousGraph.PageComponent serious={diagnosesSummary.serious} />
        <OngoingGraph.PageComponent ongoing={diagnosesSummary.ongoing} />
      </Stack>
    </Paper>
  );
};

const LoadingState = () => {
  return (
    <Paper sx={{ mt: 9, p: 1 }}>
      <Stack direction="row" width="100%" textAlign="center" spacing={2}>
        <EventNameGraph.LoadingState />
        <SeriousGraph.LoadingState />
        <OngoingGraph.LoadingState />
      </Stack>
    </Paper>
  );
};

export default PageComponent;
