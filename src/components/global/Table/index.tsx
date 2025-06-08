import { useCallback, useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import type { ColumnSort } from "@tanstack/react-table";
import SuspenseElement from "../SuspenseElement";
import EmptyData from "../EmptyData";
import styles from "./_styles.module.scss";
import type { TableProps } from "./types";
import { getColumnsWithHeader, getServerPagination } from "./data";
import TableFooter from "./TableFooter";
import TableRow from "../../../components/global/Table/TableRow";
import TableHeader from "../../../components/global/Table/TableHeader";

const Table = <T extends object>({
  data,
  columns,
  tableTitle,
  useHeader = true,
  search,
  columnFilter,
  columnVisibility,
  isSorted = true,
  sortedColumns = [],
  isPaginated = "local",
  serverPagination,
  enableRowSelection,
  loading,
  headerChildren,
  initialPageSize = 10,
  allowOverflow,
  className,
}: TableProps<T>) => {
  const tableData = useMemo(() => data, [data]);
  const tableColumns = useMemo(() => columns, [columns]);

  const [sorting, setSorting] = useState<ColumnSort[]>([]);

  const tableState = useMemo(
    () => ({
      sorting,
      globalFilter: search,
      columnFilters: columnFilter || [],
      columnVisibility,
      rowSelection: enableRowSelection?.selectedRows || {},
    }),
    [sorting, search, columnFilter, columnVisibility, enableRowSelection]
  );

  const tableConfig = useMemo(
    () => ({
      data: tableData,
      columns: useHeader
        ? getColumnsWithHeader({
            columns: tableColumns,
            totalData:
              (isPaginated === "server"
                ? serverPagination?.totalData
                : tableData.length) || 0,
            tableTitle,
            headerChildren,
          })
        : tableColumns,
      manualPagination: isPaginated === "server",
      enableRowSelection: !!enableRowSelection,
      onRowSelectionChange: enableRowSelection?.onRowSelectionChange,
      getRowId: (row: T, index: number) =>
        (row as Record<string, unknown>)[
          enableRowSelection?.uniqueId || "id"
        ]?.toString() || index.toString(),
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onSortingChange: setSorting,
      state: tableState,
      initialState: { pagination: { pageSize: initialPageSize } },
    }),
    [
      tableData,
      useHeader,
      tableColumns,
      isPaginated,
      serverPagination?.totalData,
      tableTitle,
      headerChildren,
      enableRowSelection,
      tableState,
      initialPageSize,
    ]
  );

  const {
    getHeaderGroups,
    getRowModel,
    getCanNextPage,
    getCanPreviousPage,
    nextPage,
    previousPage,
    setPageIndex,
    setPageSize,
    getPageCount,
    // getPageOptions,
    getState,
  } = useReactTable(tableConfig);

  const {
    pagination: { pageIndex, pageSize },
  } = getState();

  const {
    getCanPreviousPageServer,
    getCanNextPageServer,
    previousPageServer,
    nextPageServer,
    setPageIndexServer,
    pageIndexServer,
    setPageSizeServer,
    getPageCountServer,
  } = useMemo(
    () => getServerPagination({ isPaginated, serverPagination }),
    [isPaginated, serverPagination]
  );

  const getRowData = useCallback(() => {
    return getRowModel().rows;
  }, [getRowModel]);

  const isDataAvailable = !!getRowData().length;

  const isLoading = loading && !isDataAvailable;

  const isFetching = loading && isDataAvailable;

  return (
    <div className={`${styles.table_wrapper} ${className}`}>
      <table className={styles.table}>
        <thead>
          {getHeaderGroups().map((headerEl, index) => {
            return (
              <TableHeader
                key={headerEl.id + index.toString()}
                headerEl={headerEl}
                headerIndex={index}
                isSorted={isSorted}
                sortedColumns={sortedColumns}
                isDataAvailable={isDataAvailable}
              />
            );
          })}

          {isFetching && (
            <tr className={styles.data_updating}>
              <td colSpan={getHeaderGroups()[0].headers.length}>
                <div className={styles.loading_bar} />
              </td>
            </tr>
          )}
        </thead>

        {isDataAvailable && (
          <tbody
            className={`${styles.table_body} ${allowOverflow && styles.overflow} ${isFetching && styles.updating}`}
          >
            {getRowData().map((rowEl, rIndex) => {
              return (
                <TableRow key={rowEl.id + rIndex.toString()} row={rowEl} />
              );
            })}
          </tbody>
        )}
      </table>

      {isLoading && (
        <div className={styles.empty_data}>
          <SuspenseElement isPageLoader={false} />
        </div>
      )}

      {!isDataAvailable && !loading && (
        <div className={styles.empty_data}>
          <EmptyData />
        </div>
      )}

      {isDataAvailable && isPaginated && isPaginated !== "none" && (
        <TableFooter
          getCanPreviousPage={getCanPreviousPageServer || getCanPreviousPage}
          getCanNextPage={getCanNextPageServer || getCanNextPage}
          previousPage={previousPageServer || previousPage}
          nextPage={nextPageServer || nextPage}
          setPageIndex={
            setPageIndexServer || ((page) => setPageIndex(page - 1))
          }
          pageIndex={pageIndexServer || pageIndex + 1}
          setPageSize={setPageSizeServer || setPageSize}
          pageSize={pageSize}
          getPageCount={getPageCountServer || getPageCount}
        />
      )}
    </div>
  );
};

export default Table;
