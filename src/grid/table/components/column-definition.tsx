import React from "react";
import OpenTableCell from "./table-open-cell";
import TableNameCell from "./table-name-cell";
import TableStockCell from "./table-stock-cell";
import TableExpandCell from "./table-expand-cell";

import TableCell from "@mui/material/TableCell";
import Box from "@mui/material/Box";

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
  {
    field: "address",
    headerName: "Addres",
    renderCell: ({value, width}) => (
      <TableCell width={width}>
        <Box
        sx={{
          alignItems: "center",
          display: "flex",
        }}
      >
        {/* @ts-ignore */}
        <Box>{value.value}</Box>
      </Box>
      </TableCell>
    )
  },
];

export const rows = [
  {
    id: 1,
    expand: "",
    name: {
      value: "Makeup Lancome",
      category: "makeup",
      image:
        "https://plus.unsplash.com/premium_photo-1677526496597-aa0f49053ce2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFrZSUyMHVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    stock: {
      value: 10,
      variants: 2,
    },
    address: {
      value: "Cedro 305, Unión Popular, Tepic, Nayarit",
      location: {
        latitude: 21.4676429,
        longitude: -104.8814867
      }
    },
    status: "Published",
    price: 239900,
  },
  {
    id: 2,
    expand: "",
    name: {
      value: "Makeup Lipstick",
      category: "makeup",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFrZSUyMHVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60",
    },
    stock: {
      value: 0,
      variants: 0,
    },
    address: {
      value: "Av. Universidad 99, Ciudad del Valle, Tepic, Nayarit",
      location: {
        latitude: 21.4902438,
        longitude: -104.8876583
      }
    },
    status: "Draft",
    price: 950000,
  },
  {
    id: 3,
    expand: "",
    name: {
      value: "Healthcare Erbology",
      category: "healthcare",
    },
    stock: {
      value: 0,
      variants: 0,
    },
    address: {
      value: "Colegio de Ciencias y Letras de Tepic S.C., Boulevard Tepic-Xalisco, Caja de Agua, Tepic, Nayarit",
      location: {
        latitude: 21.4963863,
        longitude: -104.8992601
      }
    },
    status: "Draft",
    price: 179900,
  },
  {
    id: 4,
    expand: "",
    name: {
      value: "Healthcare Ritual",
      category: "healthcare",
    },
    stock: {
      value: 30,
      variants: 4,
    },
    address: {
      value: "Av del Valle 5, Cd del Valle, 63157 Tepic, Nay.",
      location: {
        latitude: 21.4899254,
        longitude: -104.888401
      }
    },
    status: "Published",
    price: 155000,
  },
  {
    id: 5,
    expand: "",
    name: {
      value: "Healthcare more",
      category: "healthcare",
    },
    stock: {
      value: 80,
      variants: 3,
    },
    address: {
      value: "Florencia 101A, Cd del Valle, 63157 Tepic, Nay.",
      location: {
        latitude: 21.4897301,
        longitude: -104.888168
      }
    },
    status: "Published",
    price: 185000,
  },
  {
    id: 6,
    expand: "",
    name: {
      value: "Layering Bracelets Collection",
      category: "jewelry",
    },
    stock: {
      value: 60,
      variants: 6,
    },
    address: {
      value: "Av del Valle 86-91, Cd del Valle, 63157 Tepic, Nay.",
      location: {
        latitude: 21.4930276,
        longitude: -104.888865
      }
    },
    status: "Published",
    price: 233990,
  },
  {
    id: 7,
    expand: "",
    name: {
      value: "Skincare Necessaire",
      category: "skincare",
    },
    stock: {
      value: 0,
      variants: 0,
    },
    address: {
      value: "Coto Bonastella, Tepic, Nayarit",
      location: {
        latitude: 21.460024,
        longitude: -104.843963
      }
    },
    status: "Draft",
    price: 920000,
  },
  {
    id: 8,
    expand: "",
    name: {
      value: "Skincare Soja CO",
      category: "skincare",
    },
    stock: {
      value: 60,
      variants: 6,
    },
    address: {
      value: "Coto Bonaura, Bonaterra, Tepic, Nayarit",
      location: {
        latitude: 21.4613177,
        longitude: -104.8435426
      }
    },
    status: "Draft",
    price: 1379900,
  },
  {
    id: 9,
    expand: "",
    name: {
      value: "Healthcare Ritual Pro",
      category: "healthcare",
    },
    stock: {
      value: 30,
      variants: 4,
    },
    address: {
      value: "Bonaterra Coto Alegranza, Tepic, Nayarit",
      location: {
        latitude: 21.461343,
        longitude: -104.8429951
      }
    },
    status: "Published",
    price: 1750000,
  },
  {
    id: 10,
    expand: "",
    name: {
      value: "Healthcare Pro",
      category: "healthcare",
    },
    stock: {
      value: 80,
      variants: 8,
    },
    address: {
      value: "COTO BONAQUA, Paseo de Bari, Nayarit",
      location: {
        latitude: 21.4629449,
        longitude: -104.842074
      }
    },
    status: "Published",
    price: 195000,
  },
];
