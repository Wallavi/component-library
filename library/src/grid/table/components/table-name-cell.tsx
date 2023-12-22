import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import ImageIcon from "@mui/icons-material/Image";
import { SxProps } from "@mui/system";

import { useThemeContext } from "../../../theme/wrapper";
import { ThemeProvider } from "@mui/material/styles";

export interface TableNameProps {
  image: string;
  value: string;
  category: string;
}

export interface TableNameCellProps {
  value: TableNameProps;
  width?: string | number;
  sx?: SxProps;
}

const TableNameCell = ({ value, width, sx }: TableNameCellProps) => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <TableCell width={width} sx={sx}>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          {value.image ? (
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "background.default",
                backgroundImage: `url(${value.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: 1,
                display: "flex",
                height: 80,
                justifyContent: "center",
                overflow: "hidden",
                width: 80,
              }}
            />
          ) : (
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "background.default",
                borderRadius: 1,
                display: "flex",
                height: 80,
                justifyContent: "center",
                width: 80,
              }}
            >
              <ImageIcon fontSize="small" />
            </Box>
          )}
          <Box
            sx={{
              cursor: "pointer",
              ml: 2,
            }}
          >
            <Typography variant="body1">{value.value}</Typography>
            <Typography
              sx={{ color: (theme) => theme.palette.grey[600] }}
              variant="listItemSecondary"
            >
              {value.category}
            </Typography>
          </Box>
        </Box>
      </TableCell>
    </ThemeProvider>
  );
};

export default TableNameCell;
