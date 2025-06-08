import Toggle from "../../../global/Toggle";
import { Control, Controller } from "react-hook-form";
import styles from "./_styles.module.scss";

type ToggleInputProps = {
  control: Control;
  fieldName: string;
  onChangeFn?: (value: boolean) => void;
  defaultStatus?: boolean;
  controlled?: boolean;
  controlledCheck?: boolean;
  checkedLabel?: string;
  uncheckedLabel?: string;
  withoutLabel?: boolean;
  isDisabled?: boolean;
};

const ToggleInput = ({
  control,
  fieldName,
  defaultStatus = false,
  controlled = false,
  controlledCheck,
  checkedLabel = "Active",
  uncheckedLabel = "Inactive",
  withoutLabel,
  onChangeFn,
  isDisabled = false,
}: ToggleInputProps) => {
  return (
    <Controller
      name={fieldName || "status"}
      control={control}
      defaultValue={controlled ? controlledCheck : defaultStatus}
      render={({ field }) => (
        <div className={withoutLabel ? styles.no_border : styles.status_field}>
          <Toggle
            isDisabled={isDisabled}
            id={`toggle-${fieldName}`}
            checked={controlled ? controlledCheck : field.value}
            onChange={(value) => {
              if (controlled) {
                onChangeFn?.(value);
              } else {
                field.onChange(value);
                onChangeFn?.(value);
              }
            }}
          />
          {!withoutLabel && (
            <p>
              {controlled
                ? controlledCheck
                  ? checkedLabel
                  : uncheckedLabel
                : field.value
                  ? checkedLabel
                  : uncheckedLabel}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default ToggleInput;
