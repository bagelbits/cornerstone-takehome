import ErrorIcon from "@mui/icons-material/Error";
import { Box, Typography } from "@mui/material";

const Error = ({ label }: { label: string }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <ErrorIcon color="error" />
      <Typography color="error">{label}</Typography>
    </Box>
  );
};

export default Error;
