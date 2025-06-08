import { validateEmail } from "../../../../constants/validations";
import CheckBox from "../CheckBox";
import FileUpload from "../FileUpload";
import PhoneNumberInput from "../PhoneNumberInput";
import RadioInput from "../RadioInput";
import SelectInput from "../SelectInput";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import ToggleInput from "../ToggleInput";
import type { GetFieldTypeProps } from "./types";

export const getFieldType = ({
  register,
  control,
  fieldName,
  fieldLabel,
  type,
  allowTogglePassword,
  required,
  isValidated,
  validateFn,
  onChangeFn,
  handleKeyDown,
  defaultValue,
  defaultRadioOption,
  maxLength,
  minDate,
  maxDate,
  placeholder,
  isDisabled,
  optionsData,
  formatOptionLabel,
  formatOptionValue,
  isOptionDisabledFn,
  optionLabel,
  optionValue,
  radioOptions,
  withoutLabel,
  useDescription,
  defaultChecked,
  componentLabel,
  defaultStatus,
  controlled,
  controlledCheck,
  checkedLabel,
  uncheckedLabel,
  icon,
  customComponent,
  allowedFileTypes,
  allowedSize,
}: GetFieldTypeProps) => {
  let content: React.ReactNode = null;

  switch (type) {
    case "text":
    case "number":
    case "date":
    case "password":
    case "email":
      content = (
        <TextInput
          type={type}
          fieldName={fieldName}
          fieldLabel={fieldLabel}
          register={register}
          required={required}
          isValidated={isValidated}
          validateFn={
            validateFn ?? (type === "email" ? validateEmail : undefined)
          }
          handleKeyDown={handleKeyDown}
          placeholder={placeholder as boolean}
          onChangeFn={onChangeFn}
          allowTogglePassword={allowTogglePassword}
          isDisabled={isDisabled}
          icon={icon}
          minDate={minDate}
          maxDate={maxDate}
        />
      );
      break;

    case "textarea":
      content = (
        <TextArea
          register={register}
          fieldName={fieldName}
          fieldLabel={fieldLabel}
          defaultValue={defaultValue as string}
          required={required}
          isValidated={isValidated}
          validateFn={validateFn}
          handleKeyDown={handleKeyDown}
          isDisabled={isDisabled}
        />
      );
      break;

    case "phone":
      content = (
        <PhoneNumberInput
          control={control}
          fieldName={fieldName}
          validateFn={validateFn}
          maxLength={maxLength}
          required={required}
          isDisabled={isDisabled}
          defaultValue={defaultValue as string}
        />
      );
      break;

    case "select":
      content = (
        <SelectInput
          control={control}
          fieldName={fieldName}
          fieldLabel={fieldLabel}
          required={required}
          optionsData={optionsData}
          formatOptionLabel={formatOptionLabel}
          formatOptionValue={formatOptionValue}
          isOptionDisabledFn={isOptionDisabledFn}
          optionLabel={optionLabel}
          optionValue={optionValue}
          placeholder={placeholder as boolean}
          defaultOption={defaultValue}
          isDisabled={isDisabled}
          onChangeFn={onChangeFn}
          validateFn={validateFn}
        />
      );
      break;

    case "radio-options":
      content = (
        <RadioInput
          control={control}
          fieldName={fieldName}
          required={required}
          options={radioOptions}
          useDescription={useDescription}
          defaultChecked={defaultRadioOption}
          onChangeFn={onChangeFn}
          validateFn={validateFn}
          isDisabled={isDisabled}
        />
      );
      break;

    case "toggle":
      content = (
        <ToggleInput
          control={control}
          fieldName={fieldName}
          defaultStatus={defaultStatus}
          controlled={controlled}
          controlledCheck={controlledCheck}
          checkedLabel={checkedLabel}
          uncheckedLabel={uncheckedLabel}
          withoutLabel={withoutLabel}
          onChangeFn={onChangeFn}
          isDisabled={isDisabled}
        />
      );
      break;

    case "checkbox":
      content = (
        <CheckBox
          register={register}
          fieldName={fieldName}
          fieldLabel={fieldLabel}
          componentLabel={componentLabel}
          defaultChecked={defaultChecked}
          onChangeFn={onChangeFn}
          required={required}
        />
      );
      break;

    case "file-upload":
      content = (
        <FileUpload
          type={type}
          fieldName={fieldName}
          register={register}
          onChangeFn={onChangeFn}
          required={required}
          isValidated={isValidated}
          validateFn={validateFn}
          customComponent={customComponent}
          allowedFileTypes={allowedFileTypes}
          allowedSize={allowedSize}
          defaultValue={defaultValue}
        />
      );
      break;

    default:
      break;
  }

  return { content, type };
};
