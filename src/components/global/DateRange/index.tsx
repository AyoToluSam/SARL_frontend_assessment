import styles from "./_styles.module.scss";
import Button from "../../core/Button";
import FormElement from "../../core/Form/FormElement";
import { Send } from "lucide-react";
import { useEffect } from "react";
import { FieldValues, useFormContext } from "react-hook-form";

export type DateRangeType = {
  startDate: string | null;
  endDate: string | null;
};

type DateRangeProps = {
  setDateRange: (dateRange: DateRangeType) => void;
  useSubmit: boolean;
};

const DateRange = ({ setDateRange, useSubmit }: DateRangeProps) => {
  const { watch, handleSubmit } = useFormContext();

  const onSubmit = (data: FieldValues) => {
    setDateRange(data as DateRangeType);
  };

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  useEffect(() => {
    if (!useSubmit && startDate) {
      setDateRange({ startDate, endDate });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useSubmit, startDate, endDate]);

  return (
    <div className={styles.date_range_form}>
      <FormElement
        type={"date"}
        fieldName={"startDate"}
        required={false}
        withoutLabel
      />
      <h3>to</h3>
      <FormElement
        type={"date"}
        fieldName={"endDate"}
        minDate={startDate || undefined}
        required={false}
        withoutLabel
      />
      {useSubmit && (
        <Button
          type="button"
          variant="children"
          className={styles.submit_button}
          onClick={handleSubmit(onSubmit)}
        >
          <Send size={18} />
        </Button>
      )}
    </div>
  );
};

export default DateRange;
