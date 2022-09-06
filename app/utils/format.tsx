import { formatTokenAmount as formatUnits } from "@1hive/1hive-ui";

//TO DO
export const formatDate = (date: any) => {
  const newDate = new Date(date * 1000).toDateString().substring(3);

  return newDate;
};
export const formatDate_TWO = (date: any) => {
  const newDate = new Date(date * 1000).toLocaleDateString();

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

//Same func from above, returns STRING
export const formatAmount_STRING = (
  value: string,
  { decimals = 18, commas = true, precision = 3, displaySign = false } = {}
) => {
  const formatedAmount = formatUnits(value, decimals, {
    digits: precision,
    displaySign,
  });

  return commas ? formatedAmount : formatedAmount.replace(",", "");
};

export function formatAddress(address: string, charsLength = 4) {
  const prefixLength = 2; // "0x"
  if (!address) {
    return "";
  }
  if (address.length < charsLength * 2 + prefixLength) {
    return address;
  }
  return (
    address.slice(0, charsLength + prefixLength) +
    "…" +
    address.slice(-charsLength)
  );
}
