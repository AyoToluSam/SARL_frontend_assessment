import styles from "./_styles.module.scss";
import { RotateCw } from "lucide-react";
import type { TableFilterProps } from "./types";
import Filter from "../../Filter";
import Search from "../../Search";
import ExportData from "../ExportData";

const TableFilter = ({
  useFilter = true,
  filterProps,
  onReset,
  useSearch = true,
  searchText,
  searchPlaceholder,
  onSearch,
  exportFn,
  exportToEmail,
  exportButtonVariant,
  ActionButton,
  reverse,
}: TableFilterProps) => {
  return (
    <div className={`${styles.table_filter} ${reverse ? styles.reverse : ""}`}>
      {useFilter && filterProps && (
        <div className={styles.filter_group}>
          {onReset && (
            <button className={styles.reload} onClick={onReset}>
              <RotateCw color="white" size={25} />
            </button>
          )}
          <Filter {...filterProps} />
        </div>
      )}

      {useSearch && (
        <Search
          searchText={searchText}
          onSearch={onSearch}
          placeholder={searchPlaceholder}
        />
      )}

      {exportFn && (
        <ExportData
          onExport={exportFn}
          onSendToEmail={exportToEmail}
          buttonVariant={exportButtonVariant}
        />
      )}

      {ActionButton}
    </div>
  );
};

export default TableFilter;
