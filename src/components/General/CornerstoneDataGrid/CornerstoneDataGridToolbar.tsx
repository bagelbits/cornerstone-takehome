import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  ToolbarPropsOverrides,
} from "@mui/x-data-grid";
import { ReactNode } from "react";

declare module "@mui/x-data-grid" {
  interface ToolbarPropsOverrides {
    ExtraToolbarButtons?: ReactNode[];
  }
}

const CornerstoneDataGridToolbar = ({
  ExtraToolbarButtons,
}: ToolbarPropsOverrides) => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      {ExtraToolbarButtons}
    </GridToolbarContainer>
  );
};

export default CornerstoneDataGridToolbar;
