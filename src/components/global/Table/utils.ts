import type { TableFilters } from "../../../components/global/Table/TableFilter/types";
import type { FlatFilterType } from "./types";

export const isRowIncluded = <T extends Record<string, unknown>>(
  row: T,
  filters: FlatFilterType
) => {
  let isIncluded = true;

  filters.forEach((filter) => {
    if (!filter.values.includes(row[filter.id])) {
      isIncluded = false;
    }
  });

  return isIncluded;
};

export const flattenFilters = (inputArray: TableFilters[]) => {
  const resultMap = new Map();

  for (const item of inputArray) {
    const { id, value } = item;

    if (!resultMap.has(id)) {
      resultMap.set(id, [value]);
    } else {
      resultMap.get(id)?.push(value);
    }
  }

  return Array.from(resultMap.entries()).map(([id, values]) => ({
    id,
    values,
  }));
};
