import React from "react";
import TableList from "./index";
import FilterTableListHooks from "./filters-table"
import { columns, rows } from "./components/column-definition";
import type { Meta, StoryObj } from "@storybook/react";
import { TableListProps } from "./types";
import { RowsProps } from "./components/types";
import { grey } from "@mui/material/colors";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const meta: Meta<TableListProps<RowsProps>> = {
  title: "Grid/TableList",
  component: TableList,
};

type Story = StoryObj<typeof meta>;

export default meta;

const sortIconComponent = (props) => {
  return (
    <div {...props}>
      <FileDownloadIcon />
    </div>
  );
};

export const Primary: Story = {
  args: {
    rows: rows,
    columns: columns,
  },
};

export const Custom: Story = {
  args: {
    rows: rows,
    columns: columns,
    rowsPerPagePagination: 6,
    sortIconComponent: sortIconComponent,
    sx: {
      minWidth: 1200,
      ".MuiTableHead-root": { background: grey[300] },
      ".MuiTableSortLabel-icon ": {
        lineHeight: 0,
      },
    },
  },
};

export const Empty: Story = {
  args: {
    rows: [],
    columns: columns,
  },
};

export const FilterTable: Story = {
  render: () => <FilterTableListHooks />,
};

