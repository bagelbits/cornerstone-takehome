import { Box, Skeleton, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";

import { ChartNode } from "@/types/diagnoses";

type ComponentProps = {
  ongoing: ChartNode[];
};

const pieParams = {
  height: 200,
  width: 200,
  margin: { right: 5 },
  slotProps: { legend: { hidden: true } },
};

const PageComponent = ({ ongoing }: ComponentProps) => {
  const ongoingData = ongoing.map((node) => ({
    label: node.name,
    value: node.count,
  }));

  return (
    <Box flexGrow={1}>
      <Typography>Ongoing</Typography>
      <PieChart
        series={[
          {
            innerRadius: 40,
            highlightScope: { fade: "global", highlight: "item" },
            faded: { innerRadius: 30, additionalRadius: -10, color: "gray" },
            data: ongoingData,
          },
        ]}
        {...pieParams}
      />
    </Box>
  );
};

const LoadingState = () => {
  return (
    <Box flexGrow={1}>
      <Typography>Ongoing</Typography>
      <Skeleton variant="circular" animation="wave" width={200} height={200} />
    </Box>
  );
};

const OngoingGraph = {
  PageComponent,
  LoadingState,
};

export default OngoingGraph;
