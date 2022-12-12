import React from "react";
import { DataContext } from "~/providers/DataProvider";
import { useContext } from "react";
import PieChart from "./PieChart";

const PieChartComponent = () => {
  const { dataFrom2021, dataFrom2022 } = useContext(DataContext);

  console.log(dataFrom2022.DataValuesForPieChart);

  return (
    <>
      <PieChart
        data={dataFrom2021.DataValuesForPieChart}
        totalSum={dataFrom2021.sumTotalYear}
      />

      <PieChart
        data={dataFrom2022.DataValuesForPieChart}
        totalSum={dataFrom2022.sumTotalYear}
      />
    </>
  );
};

export default PieChartComponent;
