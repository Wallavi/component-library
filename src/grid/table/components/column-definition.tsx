import React from "react";
import OpenTableCell from "./table-open-cell";
import TableNameCell from "./table-name-cell";
import TableStockCell from "./table-stock-cell";
import TableExpandCell from "./table-expand-cell";

import { TableColumn } from "../types";
import { RowsProps } from "./types";

export const columns: TableColumn<RowsProps>[] = [
  {
    field: "expand",
    headerName: "",
    width: 50,
    renderCell: ({ open, handleOpenRow, rowId, value, width }) =>
      open !== undefined && handleOpenRow && rowId ? (
        <OpenTableCell
          open={open}
          handleOpenRow={handleOpenRow}
          rowId={rowId}
          width={width}
        />
      ) : null,
    // @ts-ignore
    expandCell: ({ value }) => <TableExpandCell value={value} />,
  },
  {
    field: "name",
    headerName: "Name",
    width: 350,
    renderCell: ({ value, width }) => (
      <TableNameCell
        // @ts-ignore
        value={value}
        width={width}
      />
    ),
  },
  {
    field: "status",
    headerName: "Status",
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 250,
    renderCell: ({ value, width }) => (
      <TableStockCell
        // @ts-ignore
        value={value}
        width={width}
      />
    ),
  },
  {
    field: "price",
    headerName: "Price",
  },
];

export const rows = [
  {
    id: 1,
    expand: "",
    name: {
      name: "Makeup Lancome",
      category: "makeup",
      image: "https://plus.unsplash.com/premium_photo-1677526496597-aa0f49053ce2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFrZSUyMHVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    stock: {
      quantity: 10,
      variants: 2,
    },
    status: "Published",
    price: 23.99,
  },
  {
    id: 2,
    expand: "",
    name: {
      name: "Makeup Lipstick",
      category: "makeup",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFrZSUyMHVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60"
    },
    stock: {
      quantity: 0,
      variants: 0,
    },
    status: "Draft",
    price: 95.0,
  },
  {
    id: 3,
    expand: "",
    name: {
      name: "Healthcare Erbology",
      category: "healthcare",
    },
    stock: {
      quantity: 0,
      variants: 0,
    },
    status: "Draft",
    price: 17.99,
  },
  {
    id: 4,
    expand: "",
    name: {
      name: "Healthcare Ritual",
      category: "healthcare",
    },
    stock: {
      quantity: 30,
      variants: 4,
    },
    status: "Published",
    price: 155.0,
  },
  {
    id: 5,
    expand: "",
    name: {
      name: "Healthcare more",
      category: "healthcare",
    },
    stock: {
      quantity: 80,
      variants: 3,
    },
    status: "Published",
    price: 185.0,
  },
  {
    id: 6,
    expand: "",
    name: {
      name: "Layering Bracelets Collection",
      category: "jewelry",
    },
    stock: {
      quantity: 60,
      variants: 6,
    },
    status: "Published",
    price: 233.99,
  },
  {
    id: 7,
    expand: "",
    name: {
      name: "Skincare Necessaire",
      category: "skincare",
    },
    stock: {
      quantity: 0,
      variants: 0,
    },
    status: "Draft",
    price: 92.0,
  },
  {
    id: 8,
    expand: "",
    name: {
      name: "Skincare Soja CO",
      category: "skincare",
    },
    stock: {
      quantity: 60,
      variants: 6,
    },
    status: "Draft",
    price: 137.99,
  },
  {
    id: 9,
    expand: "",
    name: {
      name: "Healthcare Ritual Pro",
      category: "healthcare",
    },
    stock: {
      quantity: 30,
      variants: 4,
    },
    status: "Published",
    price: 175.0,
  },
  {
    id: 10,
    expand: "",
    name: {
      name: "Healthcare Pro",
      category: "healthcare",
    },
    stock: {
      quantity: 80,
      variants: 8,
    },
    status: "Published",
    price: 195.0,
  },
];
