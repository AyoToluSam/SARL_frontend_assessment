import { useState } from "react";
import { startCase } from "lodash";
import styles from "./_styles.module.scss";
import { Eye, EyeOff } from "lucide-react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type TextInputProps = {
  register: UseFormRegister<FieldValues>;
  fieldName: string;
  fieldLabel?: string;
  type: "text" | "number" | "date" | "email" | "password";
  allowTogglePassword?: boolean;
  required?: boolean;
  isValidated?: boolean;
  validateFn?: (
    value: string | number,
    prop?: unknown
  ) => boolean | string | undefined;
  handleKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChangeFn?: (value: string) => void;
  placeholder?: string | boolean;
  isDisabled?: boolean;
  icon?: React.ReactNode;
  minDate?: string;
  maxDate?: string;
};

const TextInput = ({
  register,
  fieldName,
  fieldLabel,
  type,
  allowTogglePassword,
  required = true,
  // isValidated,
  validateFn,
  handleKeyDown,
  onChangeFn,
  placeholder = true,
  isDisabled,
  icon,
  minDate,
  maxDate,
}: TextInputProps) => {
  const [password, setPassword] = useState("password");
  return (
    <div className={`${styles.text_input}`}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <input
        id={fieldName}
        type={type === "password" ? password : type}
        min={type === "date" ? minDate : undefined}
        max={type === "date" ? maxDate : undefined}
        placeholder={
          placeholder
            ? typeof placeholder === "string"
              ? placeholder
              : `Enter ${
                  fieldLabel?.toLowerCase() ||
                  startCase(fieldName).toLowerCase()
                }...`
            : ""
        }
        {...register(fieldName, {
          required: required ? "This field is required." : false,
          validate: validateFn,
          onChange: onChangeFn ? (e) => onChangeFn(e.target.value) : undefined,
        })}
        onKeyDown={handleKeyDown}
        disabled={isDisabled}
        autoComplete="on"
      />
      {type === "password" && allowTogglePassword && (
        <span
          className="password"
          onClick={() =>
            setPassword((prev) => (prev === "password" ? "text" : "password"))
          }
        >
          {password === "password" ? <Eye size={18} /> : <EyeOff size={18} />}
        </span>
      )}
    </div>
  );
};

export default TextInput;
