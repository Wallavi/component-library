import TableList from "./index";
import { columns, rows } from "./components/column-definition";
import type { Meta, StoryObj } from "@storybook/react";
import { TableListProps } from "./types";
import { RowsProps } from "./components/types";
import { grey } from "@mui/material/colors";

const meta: Meta<TableListProps<RowsProps>> = {
  title: "Grid/TableList",
  component: TableList,
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    rows: rows,
    columns: columns,
    rowsPerPagePagination: 10,
    sx: {
      minWidth: 1200,
      ".MuiTableHead-root": {background: grey[300]}
    }
  },
};
