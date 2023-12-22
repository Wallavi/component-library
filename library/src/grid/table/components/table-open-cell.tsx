import React from "react";
import TableCell from "@mui/material/TableCell";

import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useThemeContext } from "../../../theme/wrapper";
import { ThemeProvider } from "@mui/material/styles";

export interface OpenTableProps {
  open: boolean;
  handleOpenRow: (id: string | null | number) => void;
  rowId: string | null | number;
  width?: string | number;
}

const OpenTableCell = ({
  open,
  handleOpenRow,
  rowId,
  width,
}: OpenTableProps) => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <TableCell
        padding="checkbox"
        sx={{
          ...(open && {
            position: "relative",
            "&:after": {
              position: "absolute",
              content: '" "',
              top: 0,
              left: 0,
              backgroundColor: "primary.main",
              width: 3,
              height: "calc(100% + 1px)",
            },
          }),
        }}
        width={width}
      >
        <IconButton onClick={() => handleOpenRow(rowId)}>
          {open ? (
            <ExpandMoreIcon fontSize="small" />
          ) : (
            <ChevronRightIcon fontSize="small" />
          )}
        </IconButton>
      </TableCell>
    </ThemeProvider>
  );
};

export default OpenTableCell;
