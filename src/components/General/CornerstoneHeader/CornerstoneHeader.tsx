import { AppBar, Box, Grid } from "@mui/material";
import Image from "next/image";

const PageComponent = () => {
  return (
    <Grid item md={12}>
      <AppBar position="fixed" color="transparent">
        <Box display="flex" sx={{ height: "100%", p: 1 }}>
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </Box>
      </AppBar>
    </Grid>
  );
};

export default PageComponent;
