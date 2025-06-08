import { startCase } from "lodash";
import styles from "./_styles.module.scss";
import { FieldValues, UseFormRegister } from "react-hook-form";

type TextAreaProps = {
  register: UseFormRegister<FieldValues>;
  fieldName: string;
  fieldLabel?: string;
  required?: boolean;
  isValidated?: boolean;
  defaultValue?: string;
  validateFn?: (value: string, prop?: unknown) => boolean | string | undefined;
  handleKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  placeholder?: string | boolean;
  isDisabled?: boolean;
};

const TextArea = ({
  register,
  fieldName,
  fieldLabel,
  required = true,
  // isValidated,
  validateFn,
  handleKeyDown,
  defaultValue,
  placeholder = true,
  isDisabled,
}: TextAreaProps) => {
  return (
    <textarea
      id={fieldName}
      rows={3}
      className={styles.textarea_container}
      placeholder={
        placeholder
          ? typeof placeholder === "string"
            ? placeholder
            : `Enter ${
                fieldLabel?.toLowerCase() || startCase(fieldName).toLowerCase()
              }...`
          : ""
      }
      {...register(fieldName, {
        required: required ? "This field is required." : false,
        validate: validateFn,
      })}
      defaultValue={defaultValue}
      onKeyDown={handleKeyDown}
      autoComplete="on"
      disabled={isDisabled}
    />
  );
};

export default TextArea;
