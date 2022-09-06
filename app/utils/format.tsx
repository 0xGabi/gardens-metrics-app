import { formatTokenAmount as formatUnits } from "@1hive/1hive-ui";

//Seems it works: the data time is transform = from transferAt => Human Readable Date: mm dd yyyy
//TO DO: fix when transferAt == null, it returns 31 dic 1969 by defect
export const formatDate = (date: any) => {
  const newDate = new Date(date * 1000).toDateString().substring(3);

  return newDate;
};

export const formatAmount = (
  value: string,
  { decimals = 18, commas = true, precision = 3, displaySign = false } = {}
) => {
  const formatedAmount = formatUnits(value, decimals, {
    digits: precision,
    displaySign,
  });

  //Added the Number method to convert to a number, just in case it needed to be a number not a string
  return Number(commas ? formatedAmount : formatedAmount.replace(",", ""));
};
