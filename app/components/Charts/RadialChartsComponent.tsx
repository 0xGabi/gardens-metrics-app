import { useLoaderData } from "@remix-run/react";
import RadialChart from "./RadialChart";

const MyResponsiveRadialBar = ({ example }) => {
  const { gardensOutflows, gardensBeneficiaries } = useLoaderData();
  const outflows = gardensOutflows;

  const filtereByMonthAndYear = (obj: any, month: any, year: any) => {
    const data1 = [];

    for (let i = 0; i <= month.length; i++) {
      //filter month and year
      const byMonthAndyear = obj.filter((out: any) => {
        return (
          out.transferAt.month === month[i] && out.transferAt.year === year
        );
      });
      if (byMonthAndyear.length !== 0) data1.push(byMonthAndyear);
    }
    //sum total of byMonthAndyear requested amount
    const SUM_byMonthAndyear = data1.map((any) =>
      any.reduce(function (acc: any, v: any) {
        acc[v.transferAt.month] =
          (acc[v.transferAt.month] || 0) + Number(v.requestedAmount);
        return acc;
      }, {})
    );
    //
    const xMonth_yValue = SUM_byMonthAndyear.map((xAndy) => ({
      x: Object.keys(xAndy).toString(),
      y: Number(Object.values(xAndy)),
    }));

    //total del año seleccionado
    const sumTotalYear = SUM_byMonthAndyear.map((year) =>
      Number(Object.values(year))
    ).reduce((prev, curr) => prev + curr, 0);

    const data = [
      {
        id: year,
        data: xMonth_yValue,
      },
    ];

    return { data, sumTotalYear };
  };

  const datafrom2021 = filtereByMonthAndYear(outflows, example, "2021");
  const datafrom2022 = filtereByMonthAndYear(outflows, example, "2022");

  return (
    <>
      <RadialChart
        data={datafrom2021.data}
        totalSum={datafrom2021.sumTotalYear}
      />
      <RadialChart
        data={datafrom2022.data}
        totalSum={datafrom2022.sumTotalYear}
      />
    </>
  );
};

export default MyResponsiveRadialBar;
