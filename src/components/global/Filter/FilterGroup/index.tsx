import { Fragment } from "react/jsx-runtime";
import { FilterGroupProps } from "../types";
import styles from "../_styles.module.scss";
import Checkbox from "../../Checkbox";

const FilterGroup = ({
  filters,
  title,
  selectedGroup,
  toggle,
  isDefault,
}: FilterGroupProps) => {
  return (
    <Fragment key={title}>
      {!isDefault && <h4 className={styles.dropdown_filter}>{title}</h4>}
      <ul>
        {filters.map((filter, index) => {
          const isChecked = !!selectedGroup.find(
            (selected) =>
              selected.id === filter.id && selected.value === filter.value
          );

          return (
            <li key={index}>
              <Checkbox
                fieldName={filter.label}
                checked={isChecked}
                label={filter.label}
                onToggle={(e) => toggle(filter, e.target.checked)}
              />
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default FilterGroup;
