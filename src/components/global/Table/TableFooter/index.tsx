import styles from "./_styles.module.scss";
import type { TableFooterProps } from "../types";
import { useState } from "react";
import { toast } from "react-toastify";

const TableFooter = ({
  getCanPreviousPage,
  getCanNextPage,
  previousPage,
  nextPage,
  setPageIndex,
  pageIndex,
  // setPageSize,
  // pageSize,
  getPageCount,
}: TableFooterProps) => {
  const pageCount = getPageCount();

  const getPageNumbers = () => {
    if (pageCount <= 6)
      return Array.from({ length: pageCount }, (_, i) => i + 1);

    const pages: (number | string)[] = [1, 2, 3];

    if (pageIndex > 4) pages.push("...");

    if (pageIndex > 3 && pageIndex < pageCount - 2) pages.push(pageIndex);

    if (pageIndex < pageCount - 3) pages.push("...");

    pages.push(pageCount - 2, pageCount - 1, pageCount);

    return pages;
  };

  const [goto, setGoto] = useState("");

  const handleGoTo = () => {
    const pageNumber = Number(goto);

    const isValid = goto && 1 <= pageNumber && pageNumber <= pageCount;

    if (isValid) {
      setPageIndex(pageNumber);
      setGoto("");
    } else {
      toast.error("Invalid page index.");
    }
  };

  return (
    <div className={styles.table_footer}>
      <div className={styles.nav_container}>
        <button
          className={styles.nav_button}
          onClick={() => previousPage()}
          disabled={!getCanPreviousPage()}
        >
          Previous
        </button>

        <div className={styles.nav_pages}>
          {getPageNumbers().map((page: number | string, index: number) => {
            const isNavPage = typeof page === "number";
            return (
              <div
                key={index}
                onClick={() => isNavPage && setPageIndex(page)}
                className={`${isNavPage && styles.page} ${pageIndex === page && styles.current}`}
              >
                <p>{page}</p>
              </div>
            );
          })}
        </div>

        <button
          className={styles.nav_button}
          onClick={() => nextPage()}
          disabled={!getCanNextPage()}
        >
          Next
        </button>
      </div>
      <div className={styles.go_to}>
        <p>Go to</p>
        <input
          type="number"
          placeholder="page.."
          value={goto}
          onChange={(e) => setGoto(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleGoTo()}
          min={1}
          max={pageCount}
        />
        <button onClick={handleGoTo} className={styles.nav_button}>
          Go
        </button>
      </div>
    </div>
  );
};

export default TableFooter;
