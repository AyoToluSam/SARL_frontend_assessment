export const inBetweenTwoLetter =
  /^[a-zA-Z0-9]+([ &()'_-][a-zA-Z0-9]+)*[a-zA-Z0-9]$/; //Only when there's a minimum of 2 letters.

export const inBetweenOneLetter = /^[a-zA-Z0-9]+([ &()'_-]?[a-zA-Z0-9.])*$/;

export const allowFullStop =
  /^[a-zA-Z0-9]+([ &'().,-][a-zA-Z0-9. ]+)*[a-zA-Z0-9.]$/;

export const correctEmail =
  /^[a-zA-Z0-9]+([._'\-+&][a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

export const correctPhoneNumber = /^\d{11}$/;

export const correctSixDigitNumber = /^\d{6}$/;

export const correctTenDigitNumber = /^\d{10}$/;

export const correctElevenDigitNumber = /^\d{11}$/;

export const correctTIN = /^\d{8}-\d{4}$/;

export const correctPassword = /^(?=.*\d)(?=.*\W).{8,100}$/;

export const correctWebsite =
  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\/[^\s]*)?$/;

export const validateEmail = (value: unknown) => {
  if (value) {
    const valid = String(value).match(correctEmail);
    if (!valid) {
      return "Email address must be a valid email";
    }
  }
  return true;
};

export const validatePhoneNumber = (value: string) => {
  if (value) {
    const valid = value.match(correctPhoneNumber);
    if (!valid) {
      return "Phone Number must be 11 digits";
    }
  }
  return true;
};

export const validateName = (value: string) => {
  if (value) {
    const hasTwoWords = value.match(inBetweenOneLetter);
    if (!hasTwoWords) {
      return "Spaces and special characters must not start or end a name.";
    }
  }
  return true;
};

export const validateNoFutureDate = (value: string | Date) => {
  if (value) {
    const currentDate = new Date();
    const selectedDate = new Date(value);

    return (
      selectedDate <= currentDate || "Future dates are invalid for this field."
    );
  }
};

export const validateNoPastDate = (value: string) => {
  if (value) {
    const currentDate = new Date();
    const selectedDate = new Date(value);

    return (
      selectedDate >= currentDate || "Selected date cannot be in the past."
    );
  }
};

export const handleKeyDown = (
  event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  if (!/^[a-zA-Z0-9-' ]+$/.test(event.key)) {
    event.preventDefault();
  }
};

export const handleKeyDownNoNumbers = (
  event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  if (!/^[a-zA-Z-' ]+$/.test(event.key)) {
    event.preventDefault();
  }
};

export const handleKeyDownNoSpace = (
  event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  if (!/^[a-zA-Z0-9-']+$/.test(event.key)) {
    event.preventDefault();
  }
};

export const handleKeyDownAlt = (
  event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  if (!/^[a-zA-Z0-9-_'/()&., ]+$/.test(event.key)) {
    event.preventDefault();
  }
};

export const handleKeyDownNumbers = (
  event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const isNumber = /^[0-9]$/.test(event.key);
  const isArrowKey = /^Arrow(Left|Right)$/.test(event.key);
  const isBackspace = event.key === "Backspace";

  const isAllowedAction =
    (event.key === "v" && event.ctrlKey === true && !event.metaKey) ||
    (event.key === "c" && event.ctrlKey === true && !event.metaKey) ||
    (event.key === "x" && event.ctrlKey === true && !event.metaKey) ||
    (event.key === "z" && event.ctrlKey === true && !event.metaKey);

  if (!(isNumber || isBackspace || isArrowKey || isAllowedAction)) {
    event.preventDefault();
  }
};
