import { TableFilters } from "../Table/TableFilter/types";

export type FilterGroupProps = {
  filters: TableFilters[];
  title: string;
  selectedGroup: TableFilters[];
  toggle: (filter: TableFilters, checked: boolean) => void;
  isDefault?: boolean;
};

export type IOtherFilters = {
  fieldName: string;
  fieldLabel?: string;
  options: { label: string; value: string | number | boolean }[];
};
