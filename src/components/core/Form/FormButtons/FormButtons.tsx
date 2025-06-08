import Button from "../../Button";
import styles from "./_FormButtons.module.scss";

type FormButtonProps = {
  submitText?: string;
  cancelText?: string;
  nextText?: string;
  backText?: string;
  submitAction?: () => void;
  cancelAction?: () => void;
  isLoading?: boolean;
  isValid?: boolean;
  isMultiStep?: boolean;
  isFirstStep?: boolean;
  isLastStep?: boolean;
  next?: () => void;
  back?: () => void;
  classname?: string;
};

const FormButtons = ({
  submitText = "Submit",
  cancelText = "Cancel",
  nextText = "Next",
  backText = "Back",
  submitAction,
  cancelAction,
  isLoading,
  isValid,
  isMultiStep,
  isFirstStep,
  isLastStep,
  next,
  back,
  classname,
}: FormButtonProps) => {
  return (
    <div className={`${styles.form_buttons} ${classname}`}>
      <Button
        type="button"
        variant="grey"
        width={"full"}
        text={isMultiStep ? (isFirstStep ? cancelText : backText) : cancelText}
        onClick={
          isMultiStep
            ? isFirstStep
              ? cancelAction
              : (e) => {
                  e?.preventDefault();
                  back?.();
                }
            : cancelAction
        }
      />
      <Button
        type={isMultiStep ? (isLastStep ? "submit" : "button") : "submit"}
        variant="main"
        width={"full"}
        text={isMultiStep ? (isLastStep ? submitText : nextText) : submitText}
        onClick={
          isMultiStep
            ? isLastStep
              ? submitAction
              : (e) => {
                  e?.preventDefault();
                  next?.();
                }
            : submitAction
        }
        isLoading={isLoading}
        isDisabled={typeof isValid === "boolean" ? !isValid : undefined}
      />
    </div>
  );
};
export default FormButtons;
