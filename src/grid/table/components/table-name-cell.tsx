import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import ImageIcon from "@mui/icons-material/Image";

interface TableNameProps {
  image: string;
  name: string;
  category: string;
}

interface TableNameCellProps {
  value: TableNameProps;
  width?: string | number;
}

const TableNameCell = ({ value, width }: TableNameCellProps) => {
  console.log(value.image)
  return (
    <TableCell width={width}>
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
          <Typography variant="subtitle2">{value.name}</Typography>
          <Typography color="textSecondary" variant="body2">
            in {value.category}
          </Typography>
        </Box>
      </Box>
    </TableCell>
  );
};

export default TableNameCell;
