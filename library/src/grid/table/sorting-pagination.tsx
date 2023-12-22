import { useMemo } from "react";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (typeof a[orderBy] === "object") {
    if ((b[orderBy] as { value: string }).value < (a[orderBy] as { value: string }).value) {
      return -1;
    }
    if ((b[orderBy] as { value: string }).value > (a[orderBy] as { value: string }).value) {
      return 1;
    }
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => {
    return [el, index] as [T, number];
  });
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const VisibleRows = <T extends Record<string, any>>(
  page: number,
  rowsPerPage: number,
  rows: T[],
  order: "desc" | "asc",
  orderBy: string | symbol | number
) =>
  useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );
