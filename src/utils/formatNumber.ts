enum Currencies {
  NGN = "NGN",
  USD = "USD",
}

enum Locales {
  NGN = "en-NG",
  USD = "en-US",
}

export const formatCurrency = ({
  number,
  currency,
  noPrefix,
}: {
  number: number;
  currency?: Currencies;
  noPrefix?: boolean;
}) => {
  const formatter = new Intl.NumberFormat(
    currency ? Locales[currency] : Locales[Currencies.NGN],
    {
      currency: currency ? currency : Currencies.NGN,
      style: "currency",
    }
  );

  return noPrefix
    ? formatter.format(number).replace(/[$¢€£¥₦₹₵]/g, "")
    : formatter.format(number);
};

//formats a number
export const formatNumber = (number: number, locale?: string) =>
  new Intl.NumberFormat(locale).format(number);

//either formats a number or reformats an amount
export const formatAmount = (value: string | number) => {
  const numericValue = String(value).replace(/[^\d.]/g, "");
  const [integerPart, fractionalPart] = numericValue.split(".");
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
  const formattedAmount =
    formattedIntegerPart + (fractionalPart ? `.${fractionalPart}` : "");
  return formattedAmount;
};

export const formatPhoneNumberNGN = (number: string = "") =>
  number.replace("+234", "0");

export const convertPhoneNumberToNGN = (number: string = "") =>
  number.replace("0", "+234");

export const formatPhoneNumberReverseNGN = (number: string = "") =>
  number?.charAt(0) === "0" ? number?.replace("0", "+234") : number;

const th: string[] = ["", "thousand", "million", "billion", "trillion"];
const dg: string[] = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const tn: string[] = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tw: string[] = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const currencyNames: { [key: string]: string } = {
  $: "Dollars",
  "€": "Euros",
  "£": "Pounds",
  "¥": "Yen",
  "₦": "Naira",
};

const subunitNames: { [key: string]: string } = {
  $: "Cents",
  "€": "Cents",
  "£": "Pence",
  "¥": "",
  "₦": "Kobo",
};

export const convertNumberToWords = (amount: string | number): string => {
  let s = amount.toString();
  let currencyName = "";
  let subunitName = "";

  for (const symbol in currencyNames) {
    if (s.includes(symbol)) {
      currencyName = currencyNames[symbol];
      subunitName = subunitNames[symbol];
      s = s.replace(symbol, "").trim();
      break;
    }
  }

  s = s.replace(/[, ]/g, "");

  if (isNaN(Number(s))) {
    return "Not a number";
  }

  const [integerPart, fractionalPart] = s.split(".");
  const integerWords = convertIntegerToWords(integerPart);
  let fractionalWords = fractionalPart
    ? convertIntegerToWords(fractionalPart)
    : "";

  let result = integerWords
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  if (currencyName) {
    result += ` ${currencyName}`;
  }

  if (fractionalWords && subunitName) {
    fractionalWords = fractionalWords
      .trim()
      .replace(/\s+/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
    result += `, ${fractionalWords} ${subunitName}`;
  }

  return result;
};

const convertIntegerToWords = (integerPart: string): string => {
  if (integerPart === "0") {
    return "zero";
  }

  const n: string[] = integerPart.split("");
  let str: string = "";
  let sk: number = 0;

  for (let i = 0; i < n.length; i++) {
    if ((n.length - i) % 3 === 2) {
      if (n[i] === "1") {
        str += tn[Number(n[i + 1])] + " ";
        i++;
        sk = 1;
      } else if (n[i] !== "0") {
        str += tw[Number(n[i]) - 2] + " ";
        sk = 1;
      }
    } else if (n[i] !== "0") {
      str += dg[Number(n[i])] + " ";
      if ((n.length - i) % 3 === 0) {
        str += "hundred ";
      }
      sk = 1;
    }

    if ((n.length - i) % 3 === 1) {
      if (sk) {
        str += th[(n.length - i - 1) / 3] + " ";
      }
      sk = 0;
    }
  }

  return str;
};
