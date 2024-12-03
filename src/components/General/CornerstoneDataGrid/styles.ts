import { darken, lighten, styled, Theme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const getBackgroundColor = (
  color: string,
  theme: Theme,
  coefficient: number
) => ({
  backgroundColor: darken(color, coefficient),
  ...theme.applyStyles("light", {
    backgroundColor: lighten(color, coefficient),
  }),
});

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .cornerstone-theme--Info": {
    ...getBackgroundColor(theme.palette.info.main, theme, 0.7),
    "&:hover": {
      ...getBackgroundColor(theme.palette.info.main, theme, 0.6),
    },
    "&.Mui-selected": {
      ...getBackgroundColor(theme.palette.info.main, theme, 0.5),
      "&:hover": {
        ...getBackgroundColor(theme.palette.info.main, theme, 0.4),
      },
    },
  },
  "& .cornerstone-theme--Success": {
    ...getBackgroundColor(theme.palette.success.main, theme, 0.7),
    "&:hover": {
      ...getBackgroundColor(theme.palette.success.main, theme, 0.6),
    },
    "&.Mui-selected": {
      ...getBackgroundColor(theme.palette.success.main, theme, 0.5),
      "&:hover": {
        ...getBackgroundColor(theme.palette.success.main, theme, 0.4),
      },
    },
  },
  "& .cornerstone-theme--Error": {
    ...getBackgroundColor(theme.palette.error.main, theme, 0.7),
    "&:hover": {
      ...getBackgroundColor(theme.palette.error.main, theme, 0.6),
    },
    "&.Mui-selected": {
      ...getBackgroundColor(theme.palette.error.main, theme, 0.5),
      "&:hover": {
        ...getBackgroundColor(theme.palette.error.main, theme, 0.4),
      },
    },
  },
}));
