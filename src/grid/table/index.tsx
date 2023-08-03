import React, { Fragment, useState } from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";

import { TableListProps } from "./types";

import { VisibleRows } from "./sorting-pagination";

const TableList = <T extends Record<string, any>>({
  rows,
  columns,
  rowsPerPagePagination,
  sortIconComponent,
  ...rest
}: TableListProps<T>) => {
  type Row = (typeof rows)[number];
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string | symbol | number>("");
  const [openRow, setOpenRow] = useState<string | null | number>(null);
  const [rowsPerPage, setRowsPerPage] = useState(
    rowsPerPagePagination ? rowsPerPagePagination : 5
  );
  const [page, setPage] = useState(0);

  const handleOpenRow = (rowId: string | null | number) => {
    setOpenRow((prevValue) => (prevValue === rowId ? null : rowId));
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Row
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const createSortHandler =
    (property: keyof Row) => (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };

  const rowsToShow = VisibleRows(page, rowsPerPage, rows, order, orderBy);

  return (
    <TableContainer {...rest}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field as string} width={column.width}>
                <TableSortLabel
                  active={orderBy === column.field}
                  direction={orderBy === column.field ? order : "asc"}
                  onClick={createSortHandler(column.field)}
                  IconComponent={sortIconComponent}
                >
                  {column.headerName}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsToShow.length === 0 ? (
            <TableRow className="no-data-found">
              <TableCell colSpan={7}>
                <Typography align="center" variant="h5">
                  No hay datos encontrados
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            rowsToShow.map((row) => {
              const open = row.id === openRow;

              return (
                <Fragment key={row.id}>
                  <TableRow hover key={row.id}>
                    {columns.map((column, idx) =>
                      // @ts-ignore
                      typeof row[column.field] === "object" &&
                      !column.renderCell ? (
                        <TableCell
                          key={`${column.field as string}-${idx}`}
                          width={column.width}
                        >
                          -
                        </TableCell>
                      ) : // @ts-ignore
                      row[column.field] ===
                        "id" ? null : typeof column.renderCell ===
                        "function" ? (
                        <Fragment key={`${column.field as string}-${idx}`}>
                          {column.renderCell({
                            open: open,
                            handleOpenRow: handleOpenRow,
                            rowId: row.id,
                            value: row[column.field],
                            width: column.width,
                          })}
                        </Fragment>
                      ) : React.isValidElement(row[column.field]) ? (
                        <Fragment key={`${column.field as string}-${idx}`}>
                          {row[column.field]}
                        </Fragment>
                      ) : (
                        <TableCell
                          key={`${column.field as string}-${idx}`}
                          width={column.width}
                        >
                          {row[column.field]}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                  {columns.map(
                    (column, idx) =>
                      typeof column.expandCell === "function" &&
                      open && (
                        <TableRow
                          key={`${column.field as string}-${idx}-expand`}
                        >
                          <TableCell
                            colSpan={7}
                            sx={{
                              p: 0,
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
                            }}
                          >
                            {column.expandCell({
                              value: row,
                            })}
                          </TableCell>
                        </TableRow>
                      )
                  )}
                </Fragment>
              );
            })
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default TableList;
