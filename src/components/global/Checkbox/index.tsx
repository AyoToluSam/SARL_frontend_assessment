import { Check } from "lucide-react";
import styles from "./_styles.module.scss";
import { ChangeEventHandler } from "react";

type CheckboxProps = {
  fieldName: string;
  checked?: boolean;
  onToggle?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  disabled?: boolean;
};

const Checkbox = ({
  fieldName,
  checked = false,
  onToggle,
  label,
  disabled = false,
}: CheckboxProps) => {
  return (
    <div className={styles.checkbox}>
      <input
        id={fieldName}
        type="checkbox"
        onChange={onToggle}
        checked={checked}
        disabled={disabled}
        style={{ display: "none" }}
      />
      <label
        htmlFor={fieldName}
        className={`${styles.input} ${checked && styles.checked} ${disabled && styles.disabled}`}
      >
        {checked && <Check size={18} className={styles.check} />}
      </label>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};

export default Checkbox;
