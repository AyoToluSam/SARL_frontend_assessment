import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import styles from "../_styles.module.scss";
import { flexRender } from "@tanstack/react-table";
import type { HeaderGroup } from "@tanstack/react-table";

interface TableHeaderProps<T> {
  headerEl: HeaderGroup<T>;
  headerIndex: number;
  isSorted: boolean;
  sortedColumns: string[];
  isDataAvailable: boolean;
}

const TableHeader = <T extends object>({
  headerEl,
  headerIndex,
  isSorted,
  sortedColumns,
  isDataAvailable,
}: TableHeaderProps<T>) => {
  const isTitleHeader = headerEl.headers[headerIndex]?.column.id === "Title";
  return (
    <tr className={isTitleHeader ? styles.header_title : styles.header_row}>
      {headerEl.headers.map((columnEl, cIndex) => {
        const sortOrder = columnEl.column.getIsSorted();
        const sortIcon =
          sortOrder === "asc" ? (
            <ArrowUp size={16} />
          ) : sortOrder === "desc" ? (
            <ArrowDown size={16} />
          ) : (
            <ArrowUpDown size={16} />
          );

        const isColumnSorted = sortedColumns.length
          ? isSorted &&
            columnEl.column.columnDef.enableSorting !== false &&
            sortedColumns.includes(columnEl.column.id)
          : isSorted && columnEl.column.columnDef.enableSorting !== false;
        return (
          <th
            key={columnEl.id + headerIndex.toString() + cIndex.toString()}
            colSpan={columnEl.colSpan}
          >
            <div>
              {columnEl.isPlaceholder
                ? null
                : flexRender(
                    columnEl.column.columnDef.header,
                    columnEl.getContext()
                  )}
              {isColumnSorted && isDataAvailable && (
                <span
                  onClick={columnEl.column.getToggleSortingHandler()}
                  className={styles.sort_icon}
                >
                  {sortIcon}
                </span>
              )}
            </div>
          </th>
        );
      })}
    </tr>
  );
};
export default TableHeader;
