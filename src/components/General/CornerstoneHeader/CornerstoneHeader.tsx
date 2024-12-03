import { AppBar, Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const PageComponent = () => {
  return (
    <Grid item md={12}>
      <AppBar position="fixed">
        <Box display="flex" alignItems="center" sx={{ height: "100%", p: 1 }}>
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Diagnoses
          </Typography>
        </Box>
      </AppBar>
    </Grid>
  );
};

export default PageComponent;
