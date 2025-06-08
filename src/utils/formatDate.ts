export const formatTimestamptoDateTime = (timestamp: string = "") => {
  // 01 Jan 2024, 12:00 AM

  const date = new Date(timestamp);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

  const [monthDay, year, time] = formattedDate.split(", ");

  const [month, day] = monthDay.split(" ");

  const formatted = `${day} ${month} ${year}, ${time}`;

  return formatted;
};

export const formatTimestamptoDate = (timestamp: string = "") => {
  // 01 Jan 2024, 12:00 AM

  const date = new Date(timestamp);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

  const [monthDay, year] = formattedDate.split(", ");

  const [month, day] = monthDay.split(" ");

  const formatted = `${day} ${month} ${year}`;

  return formatted;
};

export function formatToMonthYear(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "";

  return date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export const formatDateForInput = (timestamp: string = ""): string => {
  if (!timestamp) return "";

  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

type GetYearOptions = {
  underlap?: number;
  overlap?: number;
};

export const getYearOptions = ({
  underlap = 3,
  overlap = 0,
}: GetYearOptions = {}) => {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - underlap;
  const endYear = currentYear + overlap;
  return Array.from({ length: endYear - startYear + 1 }, (_, index) => {
    const year = startYear + index;
    return { label: year.toString(), value: year };
  });
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getMonthOptions = ({ useShortNames = false } = {}) =>
  Array.from({ length: 12 }, (_, index) => {
    const month = months[index];
    return {
      label: useShortNames ? month.slice(0, 3) : months[index],
      value: index, // January is 0 and December is 11, to match getMonth from new Date()
    };
  });
