import { useLoaderData } from "@remix-run/react";
import { createContext } from "react";
import { useState } from "react";
import { filtereByMonthAndYear, MONTHS } from "~/lib/funcs";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { gardensOutflows, gardensBeneficiaries } = useLoaderData();
  const outflows = gardensOutflows;

  //valores y funcs para el Slider
  const [values, setValues] = useState([0, 11]);
  const sliceFunc = (array, start, end) => {
    const newArr = array.slice(start, end);
    return newArr;
  };
  const sliceame = sliceFunc(MONTHS, values[0], values[1]);
  //

  //total en HNY de todas las fundings proposals:
  const TOTAL_HNY_FUNDING_SUM = outflows
    .map((amount) => Number(amount.requestedAmount))
    .reduce((prev, curr) => prev + curr, 0)
    .toFixed(0);

  //cantidad de propuestas:
  const ProposalsCount = outflows.length;

  const dataFrom2021 = filtereByMonthAndYear(outflows, sliceame, "2021");
  const dataFrom2022 = filtereByMonthAndYear(outflows, sliceame, "2022");

  return (
    <DataContext.Provider
      value={{
        outflows,
        TOTAL_HNY_FUNDING_SUM,
        ProposalsCount,
        dataFrom2021,
        dataFrom2022,
        values,
        setValues,
        MONTHS,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
