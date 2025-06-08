import type { TableFilters } from "../../../components/global/Table/TableFilter/types";
import type { ColumnDef } from "@tanstack/react-table";
import type { RowSelectionState } from "@tanstack/react-table";
import type { ReactNode } from "react";

export interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  tableTitle?: string;
  useHeader?: boolean;
  headerChildren?: ReactNode;
  loading?: boolean;
  search?: string;
  columnFilter?: TableFilters[];
  columnVisibility?: { [key: string]: boolean };
  isSorted?: boolean;
  sortedColumns?: string[];
  isPaginated?: "local" | "server" | "none";
  initialPageSize?: number;
  serverPagination?: {
    totalData: number;
    pageIndex: number;
    pageSize: number;
    setPageIndex: (page: number) => void;
    setPageSize: (page: number) => void;
  };
  enableRowSelection?: {
    onRowSelectionChange: (
      rows: RowSelectionState | ((old: RowSelectionState) => RowSelectionState)
    ) => void;
    selectedRows?: RowSelectionState;
    uniqueId?: string;
  };
  allowOverflow?: boolean;
  className?: string;
}

export type TableColumn<T extends Record<string, unknown>> = ColumnDef<T>;

export type GetServerPaginationProps = {
  isPaginated?: "local" | "server" | "none";
  serverPagination?: {
    totalData: number;
    pageIndex: number;
    pageSize: number;
    setPageIndex: (page: number) => void;
    setPageSize: (page: number) => void;
  };
};

export interface GetColumnsWithHeader<T> {
  columns: ColumnDef<T>[];
  totalData: number;
  tableTitle?: string;
  headerChildren?: ReactNode;
}

export type TableFooterProps = {
  getCanPreviousPage: () => boolean;
  getCanNextPage: () => boolean;
  previousPage: () => void;
  nextPage: () => void;
  setPageIndex: (page: number) => void;
  pageIndex: number;
  setPageSize: (page: number) => void;
  pageSize: number;
  getPageCount: () => number;
};

export type UseTableRowSelectionProps<T = Record<string, unknown>> = {
  isServerPaginated?: boolean;
  tableData: T[];
  uniqueId?: string;
};

export type FlatFilterType = { id: string; values: unknown[] }[];
