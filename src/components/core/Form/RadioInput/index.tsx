import { Control, Controller } from "react-hook-form";
import { startCase } from "lodash";
import styles from "./_styles.module.scss";

type RadioInputProps = {
  fieldName: string;
  control: Control;
  options: string[] | { value: string; label: string; description?: string }[];
  defaultChecked?: string;
  useDescription?: boolean;
  onChangeFn?: (value: string, index: number) => void;
  validateFn?: (value: string, prop?: unknown) => boolean | string | undefined;
  required?: boolean;
  isDisabled?: boolean;
  className?: string;
};

const RadioInput = ({
  fieldName,
  control,
  options,
  defaultChecked,
  useDescription,
  onChangeFn,
  validateFn,
  required = true,
  isDisabled,
}: RadioInputProps) => {
  return (
    <Controller
      name={fieldName}
      control={control}
      rules={{
        required: required ? "This field is required." : false,
        validate: validateFn,
      }}
      defaultValue={defaultChecked}
      disabled={isDisabled}
      render={({ field }) => (
        <div className={styles.radio_options}>
          {options.map((option, index) => {
            const radio = typeof option === "object" ? option.value : option;
            const description =
              typeof option === "object" && useDescription
                ? option.description
                : null;
            return (
              <div
                className={`${styles.radio} ${
                  typeof option === "object" ? styles.desc : ""
                }`}
                key={index}
              >
                <input
                  type="radio"
                  id={radio}
                  value={radio}
                  checked={radio === field.value}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    onChangeFn?.(e.target.value, index);
                  }}
                  disabled={isDisabled}
                />
                <label htmlFor={radio}>
                  <span>
                    {typeof option === "object" && option.label
                      ? option.label
                      : startCase(radio)}
                  </span>

                  {description && <span>{description}</span>}
                </label>
              </div>
            );
          })}
        </div>
      )}
    />
  );
};

export default RadioInput;
