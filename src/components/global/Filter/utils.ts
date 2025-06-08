import { TableFilters } from "../Table/TableFilter/types";

export const groupFilters = (
  objects: TableFilters[],
  property: keyof TableFilters,
  defaultValue = "default"
): Record<string, TableFilters[]> => {
  return objects.reduce(
    (grouped, obj) => {
      const key =
        obj[property] !== undefined ? String(obj[property]) : defaultValue;

      if (!grouped[key]) {
        grouped[key] = [];
      }

      grouped[key].push(obj);

      return grouped;
    },
    {} as Record<string, TableFilters[]>
  );
};
