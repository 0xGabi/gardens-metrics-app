import { useLoaderData } from "@remix-run/react";
import { createContext, useEffect } from "react";
import { useState } from "react";
import { filtereByMonthAndYear, MONTHS } from "~/lib/funcs";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { gardensOutflows, gardensBeneficiaries } = useLoaderData();
  const outflows = gardensOutflows;

  //valores y funcs para el Slider
  const [values, setValues] = useState([0, 12]);

  const sliceFunc = (array, start, end) => {
    const newArr = array.slice(start, end);
    return newArr;
  };
  //filtra los meses de acuerdo al Slider
  const sliceame = sliceFunc(MONTHS, values[0], values[1]);
  //

  //total en HNY de todas las fundings proposals:
  const TOTAL_HNY_FUNDING_SUM = outflows
    .map((amount) => Number(amount.requestedAmount))
    .reduce((prev, curr) => prev + curr, 0)
    .toFixed(0);

  //cantidad de propuestas:
  const ProposalsCount = outflows.length;

  //data filtrada para RadialChart, año 2021, 2022
  const dataFrom2021 = filtereByMonthAndYear(outflows, sliceame, "2021");
  const dataFrom2022 = filtereByMonthAndYear(outflows, sliceame, "2022");

  //total  beneficiaries
  const Beneficaries_SUM = outflows.reduce(function (acc, v) {
    acc[v.address] = (acc[v.address] || 0) + Number(v.requestedAmount);
    return acc;
  }, {});
  const SumTotalBeneficiaries = Object.values(Beneficaries_SUM).length;
  //

  //get the last 3 fundings proposals from top to bottom date
  const LastProposals = outflows.slice(-3).reverse();

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
        SumTotalBeneficiaries,
        LastProposals,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
