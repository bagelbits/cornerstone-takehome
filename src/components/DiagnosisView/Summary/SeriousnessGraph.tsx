import { Box, Skeleton, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";

import { ChartNode } from "@/types/diagnoses";

type ComponentProps = {
  seriousness: ChartNode[];
};

const pieParams = {
  height: 200,
  width: 200,
  margin: { right: 5 },
  slotProps: { legend: { hidden: true } },
};

const PageComponent = ({ seriousness }: ComponentProps) => {
  const seriousnessData = seriousness.map((node) => ({
    label: node.name,
    value: node.count,
  }));

  return (
    <Box flexGrow={1}>
      <Typography>Seriousness</Typography>
      <PieChart
        series={[
          {
            innerRadius: 40,
            highlightScope: { fade: "global", highlight: "item" },
            faded: { innerRadius: 30, additionalRadius: -10, color: "gray" },
            data: seriousnessData,
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
      <Typography>Seriousness</Typography>
      <Skeleton variant="circular" animation="wave" width={200} height={200} />
    </Box>
  );
};

const SeriousnessGraph = {
  PageComponent,
  LoadingState,
};

export default SeriousnessGraph;
