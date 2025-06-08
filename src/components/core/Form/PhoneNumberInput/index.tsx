import PhoneInput from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import { Control } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import styles from "./_styles.module.scss";

type PhoneNumberInputProps = {
  control: Control;
  fieldName?: string;
  required?: boolean;
  maxLength?: number;
  isDisabled?: boolean;
  validateFn?: (value: string, prop?: unknown) => boolean | string | undefined;
  defaultValue?: string;
};

const PhoneNumberInput = ({
  control,
  fieldName,
  required = true,
  maxLength,
  isDisabled,
  validateFn,
  defaultValue,
}: PhoneNumberInputProps) => {
  return (
    <div className={styles.phoneNumber_container}>
      <PhoneInput
        name={fieldName || "phoneNumber"}
        control={control}
        defaultValue={defaultValue}
        rules={{
          required: required ? "This field is required." : false,
          maxLength: {
            value: maxLength,
            message: "Please enter a valid phone number",
          },
          minLength: {
            value: maxLength,
            message: "Please enter a valid phone number",
          },
          validate: (value: string) => {
            if (!required && !value) {
              return true;
            }
            if (isValidPhoneNumber(value, "NG")) {
              if (validateFn) {
                return validateFn(value);
              } else {
                return true;
              }
            } else {
              return "Please enter a valid phone number.";
            }
          },
        }}
        international={true}
        defaultCountry="NG"
        countries={["NG"]}
        countrySelectProps={{ disabled: true }}
        countryCallingCodeEditable={false}
        disabled={isDisabled}
        // className={styles.phone}
      />
    </div>
  );
};

export default PhoneNumberInput;
