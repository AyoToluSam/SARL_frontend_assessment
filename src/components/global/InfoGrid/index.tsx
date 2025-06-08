import { useMemo } from "react";
import styles from "./_styles.module.scss";

export type Info = { key: string; value: string; spanColumns?: 2 | 3 | 4 | 5 };

type InfoGridProps = {
  info: Info[];
  gridColumns?: 2 | 3 | 4 | 5;
};

const InfoGrid = ({ info, gridColumns = 2 }: InfoGridProps) => {
  const lastGridColumnSpan = useMemo(() => {
    const lastRowColumns =
      info.reduce(
        (acc, curr) => (curr.spanColumns ? acc + (curr.spanColumns - 1) : acc),
        info.length
      ) % gridColumns;

    return lastRowColumns > 0 ? gridColumns - lastRowColumns + 1 : 0;
  }, [info, gridColumns]);

  return (
    <div
      className={`${styles.options}`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
      }}
    >
      {info.map((item, index) => (
        <div
          key={`${item.key}-${index}`}
          className={`${styles.option}`}
          style={
            index === info.length - 1 && lastGridColumnSpan > 0
              ? { gridColumn: `span ${lastGridColumnSpan}` }
              : item.spanColumns
                ? {
                    gridColumn: `span ${item.spanColumns <= gridColumns ? item.spanColumns : 2}`,
                  }
                : undefined
          }
        >
          <span>{item.key}</span>
          <span>{item.value || "-"}</span>
        </div>
      ))}
    </div>
  );
};

export default InfoGrid;
