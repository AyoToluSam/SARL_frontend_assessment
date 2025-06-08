import { returnPropertiesWithValue } from "../../../../utils/formatData";
import type { OtherFilterValues, TableFilters, UseFilterProps } from "./types";
import { useState } from "react";
import type { DateRangeType } from "../../../../components/global/DateRange";

export const useFilters = ({
  filters = [],
  otherFilters,
  replaceFiltersOnCheck,
  filterDropPosition,
  useDateRange,
}: UseFilterProps) => {
  const [selectedGroup, setSelectedGroup] = useState<TableFilters[]>([]);

  const addFilter = (filter: TableFilters, replace?: boolean) => {
    let newSelectedGroup = [...selectedGroup];

    if (replace) {
      newSelectedGroup = selectedGroup.filter(
        (selected) => filter.id !== selected.id
      );
    }

    setSelectedGroup([...newSelectedGroup, filter]);
  };

  const removeFilter = (filter: TableFilters) => {
    const newSelectedGroup = selectedGroup.filter(
      (selected) => filter.id !== selected.id || filter.value !== selected.value
    );
    setSelectedGroup(newSelectedGroup);
  };

  const clearFilter = () => {
    setSelectedGroup([]);
  };

  const formatedFilterParams = selectedGroup.reduce<Record<string, unknown>>(
    (acc, curr) => {
      acc[curr.paramName || curr.id] = curr.value;

      return acc;
    },
    {}
  );

  const [otherFilterValues, setOtherFilterValues] = useState<OtherFilterValues>(
    {}
  );

  const otherFilterParams = returnPropertiesWithValue(otherFilterValues);

  const [dateRange, setDateRange] = useState<DateRangeType>({
    startDate: null,
    endDate: null,
  });

  const allFilterParams = {
    ...formatedFilterParams,
    ...otherFilterParams,
    ...(dateRange?.startDate ? dateRange : {}),
  };

  return {
    filters,
    selectedGroup,
    otherFilters,
    otherFilterValues,
    setOtherFilterValues,
    otherFilterParams,
    formatedFilterParams,
    allFilterParams,
    addFilter,
    removeFilter,
    clearFilter,
    replaceFiltersOnCheck,
    filterDropPosition,
    ...(useDateRange ? { dateRange, setDateRange } : {}),
  };
};

export type FilterButtonProps = ReturnType<typeof useFilters>;
