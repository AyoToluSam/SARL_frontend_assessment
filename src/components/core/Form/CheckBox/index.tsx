import { FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./_styles.module.scss";
import { startCase } from "lodash";

type CheckBoxProps = {
  fieldName: string;
  fieldLabel?: string;
  componentLabel?: React.ReactNode;
  register: UseFormRegister<FieldValues>;
  controlChecked?: boolean;
  defaultChecked?: boolean;
  onChangeFn?: (value: boolean) => void;
  required?: boolean;
};

const CheckBox = ({
  fieldName,
  fieldLabel,
  componentLabel,
  register,
  controlChecked,
  defaultChecked,
  onChangeFn,
  required,
}: CheckBoxProps) => {
  return (
    <div className={`${styles.checkbox}`}>
      <input
        id={fieldName}
        type="checkbox"
        defaultChecked={defaultChecked}
        checked={controlChecked}
        {...register(fieldName, {
          required: required ? "This field is required." : false,
        })}
        onChange={({ target: { checked } }) =>
          onChangeFn && onChangeFn(checked)
        }
      />
      {(componentLabel || fieldLabel) && (
        <label htmlFor={fieldName}>
          {componentLabel || fieldLabel || startCase(fieldName)}
        </label>
      )}
    </div>
  );
};

export default CheckBox;
