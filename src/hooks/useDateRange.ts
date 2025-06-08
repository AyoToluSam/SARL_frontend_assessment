import moment from "moment";
import { useCallback, useMemo, useState } from "react";

export const useDateRange = () => {
  const [startDate, selectStartDate] = useState<Date | null>(null);
  const [endDate, selectEndDate] = useState<Date | null>(null);

  const castDate = (date: Date) => {
    if (date) {
      const dateCast = moment(date).toArray();
      const year = dateCast[0];
      const month = dateCast[1] + 1;
      const day = dateCast[2];

      return {
        year,
        month,
        day,
      };
    } else {
      return null;
    }
  };

  const getRange = useCallback(() => {
    if (startDate && endDate) {
      const from = castDate(startDate);
      const to = castDate(endDate);
      return {
        fromYear: from?.year,
        fromMonth: from?.month,
        fromDay: from?.day,
        toYear: to?.year,
        toMonth: to?.month,
        toDay: to?.day,
      };
    } else {
      return {};
    }
  }, [startDate, endDate]);

  const range = useMemo(() => getRange(), [getRange]);

  return {
    startDate,
    selectStartDate,
    endDate,
    selectEndDate,
    range,
  };
};

export const interpreteDateRange = ({
  option,
  callback,
}: {
  option: string;
  callback: ({ start, end }: { start: Date; end: Date }) => void;
}) => {
  const now = new Date();
  const start = new Date();
  const end = new Date();

  switch (option) {
    case "Last 7 days":
      start.setDate(now.getDate() - 7);
      break;
    case "Last Month":
      start.setMonth(now.getMonth() - 1);
      break;
    case "Last 3 Months":
      start.setMonth(now.getMonth() - 3);
      break;
    case "Last 6 Months":
      start.setMonth(now.getMonth() - 6);
      break;
    case "Last Year":
      start.setFullYear(now.getFullYear() - 1);
      break;
    default:
      return;
  }

  callback({ start, end });
};
