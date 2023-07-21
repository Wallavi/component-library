
export interface RenderCellProps {
  open?: boolean;
  handleOpenRow?: (rowId: string | null | number) => void;
  rowId?: string | number | null;
  value: string | number | object;
  width?: string | number;
}

export interface TableColumn<T> {
  headerName: string;
  field: keyof T;
  width?: string | number;
  renderCell?: (params: RenderCellProps) => React.ReactNode;
  expandCell?: (params: RenderCellProps) => React.ReactNode;
}

export interface TableListProps<T> {
  rows: T[];
  columns: TableColumn<T>[];
  rowsPerPage?: number;
  page?: number;
  onPageChange?: (event: any, newPage: any) => void;
  onRowsPerPageChange?: (event: any) => void;
  countPages?: number
}