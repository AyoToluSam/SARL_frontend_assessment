import { Action } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Control, FieldValues, UseFormRegister } from "react-hook-form";
import { GetOptionLabel, GetOptionValue, Options } from "react-select";

type BaseFormElementProps = {
  fieldName: string;
  fieldLabel?: string;
  required?: boolean;
  showRequiredFlag?: boolean;
  isValidated?: boolean;
  errorMessage?: string;
  validateFn?: (
    value: string | number | object,
    prop: unknown
  ) => boolean | string | undefined;
  onChangeFn?: (value: unknown) => void;
  onBlurFn?: (
    value: string | number | boolean | File | null | undefined
  ) => void;
  onInput?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleKeyDown?: (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  defaultValue?: string | number | object;
  defaultRadioOption?: string;
  placeholder?: string | boolean;
  isDisabled?: boolean;
  allowTogglePassword?: boolean;
  maxLength?: number;
  minDate?: string;
  maxDate?: string;
  optionsData?: Options<unknown> | string[];
  isOptionDisabledFn?: (
    option: unknown,
    selectValue: Options<unknown>
  ) => boolean;
  formatOptionLabel?: GetOptionLabel<unknown>;
  formatOptionValue?: GetOptionValue<unknown>;
  searchOptions?: string[] | { label: string; value: string }[];
  // getData?: AsyncThunk;
  dataSelector?: (action: Action) => unknown;
  optionLabel?: string;
  optionValue?: string;
  returnOnlyValue?: boolean;
  clearSelected?: boolean;
  radioOptions?:
    | string[]
    | { value: string; label: string; description?: string }[];
  useDescription?: boolean;
  defaultChecked?: boolean;
  defaultStatus?: boolean;
  controlled?: boolean;
  controlledCheck?: boolean;
  checkedLabel?: string;
  uncheckedLabel?: string;
  componentLabel?: React.ReactNode;
  resetState?: boolean;
  withoutLabel?: boolean;
  icon?: ReactNode;
  className?: string;
  customComponent?: ({ ...props }) => React.ReactNode;
  allowedSize?: number;
  allowedFileTypes?: [AllowedMimeType, ...AllowedMimeType[]];
};

export type TextProps = BaseFormElementProps & {
  type: "text" | "number" | "date" | "password" | "email";
};

export type TextAreaProps = BaseFormElementProps & {
  type: "textarea";
};

export type PhoneProps = BaseFormElementProps & {
  type: "phone";
};

export type SelectProps = BaseFormElementProps & {
  type: "select";
  optionsData: Options<unknown> | string[];
  labelKey?: string;
  valueKey?: string;
  returnOnlyValue?: boolean;
};

export type MultiSelectProps = BaseFormElementProps & {
  type: "multi-select";
  optionsData: Options<unknown>[];
  optionLabel?: string;
  optionValue?: string;
  clearSelected?: boolean;
};

export type SearchSelectProps = BaseFormElementProps & {
  type: "search-select";
  searchOptions: string[] | Options<unknown>;
  labelKey?: string;
  valueKey?: string;
  // getData: AsyncThunk;
  dataSelector: (action: Action) => unknown;
  isMulti?: boolean;
};

export type RadioOptionsProps = BaseFormElementProps & {
  type: "radio-options";
  useDescription?: boolean;
  radioOptions:
    | string[]
    | { value: string; label: string; description?: string }[];
  defaultRadioOption?: string;
  checkedLabel?: string;
  uncheckedLabel?: string;
};

export type ToggleProps = BaseFormElementProps & {
  type: "toggle";
  defaultStatus?: boolean;
  controlled?: boolean;
  controlledCheck?: boolean;
  onChangeFn?: (value: boolean) => void;
  checkedLabel?: string;
  uncheckedLabel?: string;
  withoutLabel?: boolean;
};

export type CheckBoxProps = BaseFormElementProps & {
  type: "checkbox";
  componentLabel?: React.ReactNode;
  onChangeFn?: (value: boolean) => void;
};

export type FileUploadProps = BaseFormElementProps & {
  type: "file-upload";
  allowedSize?: number;
  allowedFileTypes?: [AllowedMimeType, ...AllowedMimeType[]];
  componentLabel?: React.ReactNode;
  onChangeFn?: (value: File) => void;
  defaultValue?: { type: "pdf" | "doc" | "image" | "csv"; name: string };
  resetState?: boolean;
};

export type FormElementProps =
  | TextProps
  | TextAreaProps
  | PhoneProps
  | SelectProps
  | MultiSelectProps
  | SearchSelectProps
  | RadioOptionsProps
  | ToggleProps
  | CheckBoxProps
  | FileUploadProps;

export type GetFieldTypeProps = FormElementProps & {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
};

export type AllowedMimeType =
  | "image/jpeg"
  | "image/png"
  | "image/webp"
  | "image/avif"
  | "image/svg+xml"
  | "text/csv"
  | "application/pdf"
  | "application/msword"
  | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  | "application/vnd.ms-powerpoint"
  | "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  | "application/vnd.ms-excel"
  | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  | "application/zip"
  | "application/vnd.rar";
// Add more allowed MIME types for other office document formats
