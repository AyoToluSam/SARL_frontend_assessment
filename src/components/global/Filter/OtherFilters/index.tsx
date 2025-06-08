import FormElement from "@/components/core/Form/FormElement";
import { IOtherFilters } from "@/components/global/Filter/types";
import { isEqual, startCase } from "lodash";
import { useEffect, useRef } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import styles from "../_styles.module.scss";

export type OtherFiltersProps = {
  filters: IOtherFilters[];
  setFilterValues: (filterValues: FieldValues) => void;
};

const OtherFilters = ({ filters, setFilterValues }: OtherFiltersProps) => {
  const { watch } = useFormContext();

  const watchedValues = filters.reduce<FieldValues>((acc, curr) => {
    acc[curr.fieldName] = watch(curr.fieldName)?.value || null;

    return acc;
  }, {});

  const valuesRef = useRef<FieldValues | null>(null);

  useEffect(() => {
    if (!isEqual(watchedValues, valuesRef.current)) {
      setFilterValues(watchedValues);

      valuesRef.current = watchedValues;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedValues]);

  if (!filters.length) return null;

  return (
    <>
      {filters.map(({ fieldName, fieldLabel, options }, index) => (
        <div key={fieldName + index} className={styles.other_filters}>
          <h4>{fieldLabel || startCase(fieldName)}</h4>
          <FormElement
            type="select"
            fieldName={fieldName}
            required={false}
            optionsData={options}
            withoutLabel
          />
        </div>
      ))}
    </>
  );
};

export default OtherFilters;
