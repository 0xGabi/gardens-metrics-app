import { DataContext } from "~/providers/DataProvider";
import { useContext } from "react";
import RadialChart from "./RadialChart";

const MyResponsiveRadialBar = () => {
  const { dataFrom2021, dataFrom2022 } = useContext(DataContext);
  return (
    <>
      <RadialChart
        data={dataFrom2021.data}
        totalSum={dataFrom2021.sumTotalYear}
      />

      <RadialChart
        data={dataFrom2022.data}
        totalSum={dataFrom2022.sumTotalYear}
      />
    </>
  );
};

export default MyResponsiveRadialBar;
