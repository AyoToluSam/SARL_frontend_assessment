const suffixes = ["", "k", "M", "B", "T"];

export const toShortHandAmount = (num: number, decimal = 0): string => {
  if (!num) {
    return "";
  }

  const suffixIndex = Math.floor(Math.log10(Math.abs(num)) / 3);

  const formattedNum =
    (num / Math.pow(1000, suffixIndex)).toFixed(decimal) +
    suffixes[suffixIndex];

  return formattedNum;
};
