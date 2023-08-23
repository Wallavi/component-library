import React from "react";
import TableCell from "@mui/material/TableCell";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

export interface TableStockProps {
  value: number;
  variants: number;
}

export interface TableStockCellProps {
  value: TableStockProps;
  width?: string | number;
}

const TableStockCell = ({ value, width }: TableStockCellProps) => {
  return (
    <TableCell width={width}>
      <LinearProgress
        value={value.value}
        variant="determinate"
        color={value.value >= 10 ? "success" : "error"}
        sx={{
          height: 8,
          width: 36,
        }}
      />
      <Typography color="textSecondary" variant="body2">
        {value.value} in stock
        {value.variants > 1 && ` in ${value.variants} variants`}
      </Typography>
    </TableCell>
  );
};

export default TableStockCell;
