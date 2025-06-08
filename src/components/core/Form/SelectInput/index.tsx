import { Control, Controller } from "react-hook-form";
import Select, { GetOptionLabel, GetOptionValue, Options } from "react-select";
import { capitalize, startCase } from "lodash";
import styles from "./_styles.module.scss";
import { formatReactSelectStyles } from "./data";
import { useMemo } from "react";

type SelectInputProps = {
  control: Control;
  fieldName: string;
  fieldLabel?: string;
  optionsData: string[] | Options<unknown>;
  optionValue?: string;
  optionLabel?: string;
  formatOptionValue?: GetOptionValue<unknown>;
  formatOptionLabel?: GetOptionLabel<unknown>;
  isOptionDisabledFn?: (
    option: unknown,
    selectValue: Options<unknown>
  ) => boolean;
  placeholder?: string | boolean;
  required?: boolean;
  isDisabled?: boolean;
  validateFn?: (
    value: string | number | object,
    prop?: unknown
  ) => boolean | string | undefined;
  onChangeFn?: (value: unknown) => void;
  defaultOption?: string | number | object;
};

const SelectInput = ({
  optionsData,
  optionValue,
  optionLabel,
  formatOptionLabel,
  formatOptionValue,
  isOptionDisabledFn,
  fieldName,
  fieldLabel,
  placeholder = true,
  control,
  required = true,
  isDisabled,
  validateFn,
  onChangeFn,
  defaultOption,
}: SelectInputProps) => {
  const options = useMemo(
    () =>
      typeof optionsData.find((o) => o) === "string"
        ? optionsData.map((o) => ({ label: capitalize(o as string), value: o }))
        : optionsData,
    [optionsData]
  );

  return (
    <div className={styles.select_input}>
      <Controller
        name={fieldName}
        control={control}
        defaultValue={defaultOption}
        rules={{
          required: required ? "This field is required." : false,
          validate: validateFn,
        }}
        render={({ field }) => (
          <Select
            {...field}
            inputId={fieldName}
            options={options}
            getOptionLabel={
              formatOptionLabel ??
              (optionLabel
                ? (x) => (x as Record<string, string>)[optionLabel]
                : undefined)
            }
            getOptionValue={
              formatOptionValue ??
              (optionValue
                ? (x) => (x as Record<string, string>)[optionValue]
                : undefined)
            }
            isOptionDisabled={isOptionDisabledFn}
            value={field.value || defaultOption}
            placeholder={
              placeholder
                ? typeof placeholder === "string"
                  ? placeholder
                  : `Select ${
                      fieldLabel?.toLowerCase() || startCase(fieldName)
                    }...`
                : null
            }
            onChange={(value) => {
              field.onChange(value);
              onChangeFn?.(value);
            }}
            isSearchable
            isClearable
            closeMenuOnSelect
            blurInputOnSelect
            className={styles.select_container}
            classNamePrefix={"selected"}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: "#667085",
                primary: "#fff",
              },
            })}
            styles={formatReactSelectStyles}
            isDisabled={isDisabled}
          />
        )}
      />
    </div>
  );
};

export default SelectInput;
