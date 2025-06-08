import { startCase } from "lodash";
import { FormElementProps } from "./types";
import { get, useFormContext } from "react-hook-form";
import { getFieldType } from "./data";
import styles from "./_styles.module.scss";

const FormElement = (props: FormElementProps) => {
  const {
    type,
    fieldName,
    fieldLabel,
    required = true,
    showRequiredFlag = true,
    errorMessage,
    withoutLabel = false,
    componentLabel,
    className,
  } = props;

  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const { content } = getFieldType({ register, control, ...props });

  const fieldErrorMessage =
    errorMessage ||
    errors[fieldName]?.message ||
    get(errors, `${fieldName}.message`);

  return (
    <div className={`${styles.form_element} ${className}`}>
      <div className={styles.form__input}>
        {!withoutLabel &&
          type !== "file-upload" &&
          (componentLabel ?? (
            <label htmlFor={fieldName}>
              {fieldLabel || startCase(fieldName)}
              {required && showRequiredFlag && <span>*</span>}
            </label>
          ))}

        {content}
      </div>

      {fieldErrorMessage && <p className="error">{fieldErrorMessage}</p>}
    </div>
  );
};

export default FormElement;
