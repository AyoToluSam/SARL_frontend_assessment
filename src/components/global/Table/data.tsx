import pluralize from "pluralize";
import styles from "./_styles.module.scss";
import type {
  GetColumnsWithHeader,
  GetServerPaginationProps,
  UseTableRowSelectionProps,
} from "./types";
import type { RowSelectionState } from "@tanstack/react-table";
import { useState } from "react";

export const getServerPagination = ({
  isPaginated,
  serverPagination,
}: GetServerPaginationProps) => {
  let getCanPreviousPageServer;
  let getCanNextPageServer;
  let previousPageServer;
  let nextPageServer;
  let setPageIndexServer;
  let pageIndexServer;
  let setPageSizeServer;
  let getPageCountServer;

  if (isPaginated === "server" && serverPagination) {
    getCanPreviousPageServer = () => serverPagination.pageIndex > 1;

    getCanNextPageServer = () =>
      serverPagination.pageIndex <
      Math.ceil(serverPagination.totalData / serverPagination.pageSize);

    previousPageServer = () => {
      if (serverPagination.pageIndex > 1)
        serverPagination.setPageIndex(serverPagination.pageIndex - 1);
    };

    nextPageServer = () => {
      if (
        serverPagination.pageIndex <
        Math.ceil(serverPagination.totalData / serverPagination.pageSize)
      )
        serverPagination.setPageIndex(serverPagination.pageIndex + 1);
    };

    setPageIndexServer = (index: number) => {
      if (
        index >= 1 &&
        index <=
          Math.ceil(serverPagination.totalData / serverPagination.pageSize)
      )
        serverPagination.setPageIndex(index);
    };

    pageIndexServer = serverPagination.pageIndex;

    setPageSizeServer = serverPagination.setPageSize;

    getPageCountServer = () =>
      Math.max(
        1,
        Math.ceil(serverPagination.totalData / serverPagination.pageSize)
      );
  }

  return {
    getCanPreviousPageServer,
    getCanNextPageServer,
    previousPageServer,
    nextPageServer,
    setPageIndexServer,
    pageIndexServer,
    setPageSizeServer,
    getPageCountServer,
  };
};

export const getColumnsWithHeader = <T extends object>({
  columns,
  totalData,
  tableTitle,
  headerChildren,
}: GetColumnsWithHeader<T>) => {
  return [
    {
      id: "Title",
      header: () => {
        const pluralizedTitle =
          totalData !== 1
            ? pluralize(tableTitle || "Item")
            : tableTitle || "Item";
        return (
          <div className={styles.header}>
            <h3>
              {pluralize(tableTitle || "Item")}
              <span className={styles.tableCount}>
                <span>{totalData}</span>
                {pluralizedTitle}
              </span>
            </h3>
            <div className={styles.headerChildren}>{headerChildren}</div>
          </div>
        );
      },
      columns,
      enableSorting: false,
    },
  ];
};

export const useTableRowSelection = <T extends Record<string, unknown>>({
  isServerPaginated,
  tableData,
  uniqueId = "id",
}: UseTableRowSelectionProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<Record<string, T>>({});

  const tableRowState = formatTableRowState(selectedRows);

  const [persistedRows, setPersistedRows] = useState<Record<string, T>>({});

  const persistedTableRowState = {
    ...tableRowState,
    ...formatTableRowState(persistedRows),
  };

  const handlePersistedRows = (
    rows: RowSelectionState | ((old: RowSelectionState) => RowSelectionState)
  ) => {
    if (isServerPaginated) {
      const currentPageData = tableData.reduce((acc, row) => {
        const rowId = String(row[uniqueId]);
        const isSelected =
          typeof rows === "function"
            ? rows(persistedTableRowState)[rowId]
            : rows[rowId];

        return {
          ...acc,
          [rowId]: isSelected ? row : null,
        };
      }, {});

      setPersistedRows((prev) => {
        const newState = { ...prev };

        Object.entries(currentPageData).forEach(([key, value]) => {
          if (value == null || value == undefined) {
            delete newState[key];
          } else {
            newState[key] = value as T;
          }
        });
        return newState;
      });
    } else {
      const selectedData = tableData.reduce((acc, row) => {
        const rowId = String(row[uniqueId]);
        const isSelected =
          typeof rows === "function" ? rows(tableRowState)[rowId] : rows[rowId];

        return {
          ...acc,
          [rowId]: isSelected ? row : null,
        };
      }, {});

      setSelectedRows(
        Object.entries(selectedData).reduce<Record<string, T>>(
          (acc, [key, value]) => {
            if (value != null && value != undefined) {
              acc[key] = value as T;
            }
            return acc;
          },
          {}
        )
      );
    }
  };

  const handleClearAll = () => {
    setSelectedRows({});
    setPersistedRows({});
  };

  const selectedRowsData = formatSelectedRowsToArray<T>(selectedRows);

  const persistedRowsData = formatSelectedRowsToArray<T>(persistedRows);

  return {
    selectedRows: isServerPaginated ? persistedRows : selectedRows,
    selectedRowsData: isServerPaginated ? persistedRowsData : selectedRowsData,
    rowState: isServerPaginated ? persistedTableRowState : tableRowState,
    setRowState: handlePersistedRows,
    handleClearAll,
  };
};

export const formatTableRowState = (rows: Record<string, unknown>) =>
  Object.keys(rows).reduce(
    (acc, key) => ({
      ...acc,
      [key]: true,
    }),
    {}
  );

export const formatSelectedRowsToArray = <T extends Record<string, unknown>>(
  selectedRows: Record<string, T>
) => Object.values(selectedRows).filter((value) => !!value);
