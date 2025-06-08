import type { ColumnFilter } from "@tanstack/react-table";
import { ExportFormat } from "../../../../types/types";
import { Component } from "react";
import type { ComponentElement } from "react";
import type { ButtonProps } from "../../../core/Button";
import type { IOtherFilters } from "../../../../components/global/Filter/types";
import type { FilterButtonProps } from "../../../../components/global/Table/TableFilter/data";

export interface TableFilters extends ColumnFilter {
  label: string;
  group?: "default" | (string & {});
  paramName?: string;
}

export type OtherFilterValues = Record<string, string | number | boolean>;

export type UseFilterProps = {
  filters?: TableFilters[];
  otherFilters?: IOtherFilters[];
  replaceFiltersOnCheck?: boolean;
  filterDropPosition?: "left" | "right" | "center";
  useDateRange?: boolean;
};

export type TableFilterProps = {
  useFilter?: boolean;
  filterProps?: FilterButtonProps;
  onReset?: () => void;
  useSearch?: boolean;
  searchText?: string;
  onSearch?: (searchText: string) => void;
  searchPlaceholder?: string;
  exportFn?: (format: ExportFormat) => void | Promise<void>;
  exportToEmail?: () => void | Promise<void>;
  exportButtonVariant?: "main" | "alt" | "grey";
  ActionButton?: ComponentElement<ButtonProps, Component<ButtonProps>>;
  reverse?: boolean;
};
