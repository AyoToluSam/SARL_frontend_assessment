import { RefObject, useState } from "react";
import Button from "../../core/Button";
import { ListFilter } from "lucide-react";
import styles from "./_styles.module.scss";
import { useClickOutside } from "../../../hooks/useClickOutside";
import FilterGroup from "./FilterGroup";
import { groupFilters } from "./utils";
import DateRange from "@/components/global/DateRange";
import OtherFilters from "@/components/global/Filter/OtherFilters";
import { FormProvider, useForm } from "react-hook-form";
import { TableFilters } from "@/components/global/Table/TableFilter/types";
import { FilterButtonProps } from "@/components/global/Table/TableFilter/data";

const Filter = ({
  filters,
  selectedGroup,
  addFilter,
  removeFilter,
  clearFilter,
  setDateRange,
  otherFilters,
  setOtherFilterValues,
  replaceFiltersOnCheck = true,
  filterDropPosition = "right",
}: FilterButtonProps) => {
  const filterGroups = groupFilters(filters, "group");

  const { open, setOpen, dropdownRef } = useClickOutside();

  const handleToggleDropdown = () => {
    setOpen(!open);
  };

  const toggle = (filter: TableFilters, isChecked: boolean) => {
    if (isChecked) {
      addFilter(filter, replaceFiltersOnCheck);
    } else {
      removeFilter(filter);
    }
  };

  const selectValue = (filter: TableFilters) => {
    addFilter(filter, true);
  };

  const methods = useForm();

  const { reset } = methods;

  const [resetKey, setResetKey] = useState(0);

  const handleClearAll = () => {
    clearFilter();
    reset();
    setResetKey((prev) => prev + 1);
  };

  return (
    <div
      ref={dropdownRef as RefObject<HTMLDivElement>}
      className={styles.dropdown_filter}
    >
      <Button
        text={"Filter"}
        variant={"grey"}
        width={"fit"}
        size={"small"}
        icon={<ListFilter size={20} />}
        onClick={handleToggleDropdown}
      />

      {(Object.entries(filterGroups).length > 0 ||
        (otherFilters && otherFilters?.length > 0) ||
        setDateRange) && (
        <div
          className={`${styles.content} ${open ? styles.active : ""} ${styles[filterDropPosition]}`}
        >
          {Object.entries(filterGroups).map(
            ([group, filterOptions], groupIndex) => {
              const isDefault = group === "default";
              return (
                <FilterGroup
                  key={groupIndex}
                  filters={filterOptions}
                  title={group}
                  selectedGroup={selectedGroup}
                  toggle={isDefault ? selectValue : toggle}
                  isDefault={isDefault}
                />
              );
            }
          )}

          <FormProvider {...methods}>
            <form
              className={styles.extra_filters}
              style={otherFilters ? { minWidth: "240px" } : undefined}
            >
              {setDateRange && (
                <div className={styles.date_range}>
                  <h4>Date Range</h4>
                  <DateRange setDateRange={setDateRange} useSubmit={false} />
                </div>
              )}

              {otherFilters && setOtherFilterValues && (
                <OtherFilters
                  key={resetKey}
                  filters={otherFilters}
                  setFilterValues={setOtherFilterValues}
                />
              )}
            </form>
          </FormProvider>

          <Button
            text={"Clear Filter"}
            // variant="grey"
            size="small"
            width={"full"}
            onClick={handleClearAll}
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
