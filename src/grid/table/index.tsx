import React, { Fragment, useState } from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";

import { TableListProps } from "./types";

import { VisibleRows } from "./sorting-pagination";

const TableList = <T extends Record<string, any>>({
  rows,
  columns,
}: TableListProps<T>) => {
  // const [order, setOrder] = React.useState<"asc" | "desc">("asc");
  // const [orderBy, setOrderBy] = React.useState<string>("name");
  const [openRow, setOpenRow] = useState<string | null | number>(null);
  const [rowsPerPage, setRowsPerPage] = useState(5);
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

  // const rowsToShow = VisibleRows(page, rowsPerPage, rows, order, orderBy);
  const rowsToShow = VisibleRows(page, rowsPerPage, rows, "asc", "name");

  return (
    <TableContainer>
      <Table sx={{ minWidth: 1200 }}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field as string} width={column.width}>
                {column.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsToShow.map((row) => {
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
                      "id" ? null : typeof column.renderCell === "function" ? (
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
                      <TableRow key={`${column.field as string}-${idx}-expand`}>
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
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              count={rows.length}
              rowsPerPage={rowsPerPage ? rowsPerPage : 5}
              page={page ? page : 0}
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
