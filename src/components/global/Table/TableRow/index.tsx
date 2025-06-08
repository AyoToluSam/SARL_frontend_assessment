import { flexRender } from "@tanstack/react-table";
import type { Row } from "@tanstack/react-table";
import { memo } from "react";
import styles from "../_styles.module.scss";

const TableRow = memo(<T extends object>({ row }: { row: Row<T> }) => {
  return (
    <tr className={styles.body_row}>
      {row.getVisibleCells().map((cellEl) => {
        const headerText = cellEl.column.columnDef.header;
        return (
          <td
            key={cellEl.id + headerText}
            data-label={
              (typeof headerText === "string" ||
                typeof headerText === "number") &&
              headerText
            }
          >
            <span className={styles[cellEl.column.id]}>
              {flexRender(cellEl.column.columnDef.cell, cellEl.getContext())}
            </span>
          </td>
        );
      })}
    </tr>
  );
});

export default TableRow;
