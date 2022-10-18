import { useLoaderData } from "@remix-run/react";
import { useTheme, GU, useViewport } from "@1hive/1hive-ui";
import styled from "styled-components";
import CardDashboard from "../components/Card";
import DisplayChart from "../components/DisplayChart";
import Test from "../components/Test";

const Outflows = () => {
  const { gardensOutflows, gardensBeneficiaries } = useLoaderData();
  const theme = useTheme();
  const outflows = gardensOutflows;

  console.log(gardensOutflows);

  const { below, within, above } = useViewport();

  // const beneficiaries = gardensBeneficiaries;

  // TOTAL SUM of FUNDING PROPOSALS in HNY --- OK
  const TOTAL_HNY_FUNDING_SUM = outflows
    .map((amount: any) => Number(amount.requestedAmount))
    .reduce((prev: number, curr: number) => prev + curr, 0);

  //TOTAL --- FIX
  // const TOTAL_HNY_FUNDING_SUM_fromBeneficiaries = beneficiaries.map(
  //   (elem) => elem
  //   // .transfers.map((elem) => elem)
  // );

  //Func that loop all beneficary(ADDRESSES) and sum the HNY for each one --- OK
  const filterMonth_Year = (outflows: any) => {
    outflows.reduce(function (acc: any, v: any) {
      acc[v.beneficiary] =
        (acc[v.beneficiary] || 0) + Number(v.requestedAmount);
      return acc;
    }, {});
  };

  //Var that loop all beneficary(ADDRESSES) and return the sum of  all HNY recieved for each one ---OK
  const Beneficary_SUM = outflows.reduce(function (acc: any, v: any) {
    acc[v.address] = (acc[v.address] || 0) + Number(v.requestedAmount);
    return acc;
  }, {});

  // //Contributors ADDRESS
  // const contAddress = beneficiaries.map((contributor) =>
  //   contributor.transfers.map((transfer) => transfer.contributor.address)
  // );

  // //TESTING contributors sum for each address -- TO FIX
  // const contAddress_SUM = beneficiaries.reduce(function (acc: any, v: any) {
  //   acc[v.transfers.map((transfer) => transfer.contributor.address)] =
  //     (acc[v.transfers.map((transfer) => transfer.contributor.address)] || 0) +
  //     Number(v.transfers.map((transfer) => transfer.amount));
  //   return acc;
  // }, {});

  //Func filters month and year an return total Funding for each month in the year
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const filtereByMonthAndYearTEST_2021 = (obj: any, month: any, year: any) => {
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

    const data = [
      {
        id: year,
        data: xMonth_yValue,
      },
    ];

    return data;
  };

  const datafrom2021 = filtereByMonthAndYearTEST_2021(outflows, months, "2021");
  const datafrom2022 = filtereByMonthAndYearTEST_2021(outflows, months, "2022");

  //
  const filtereByMonthAndYear = (obj: any, month: any, year: string) => {
    //filter month and year
    const byMonthAndyear = obj.filter((out: any) => {
      return out.transferAt.month === month && out.transferAt.year === year;
    });
    //sum total of byMonthAndyear requested amount
    const SUM_byMonthAndyear = byMonthAndyear.reduce(
      function (acc: any, v: any) {
        acc[v.transferAt.month] =
          (acc[v.transferAt.month] || 0) + Number(v.requestedAmount);
        return acc;
      },
      //return object with month and total requ amou od that month
      {}
    );

    return SUM_byMonthAndyear;
  };

  // const my = filtereByMonthAndYear(outflows, "Jun", "2021")

  // console.log(filtereByMonthAndYear(outflows, "Jun", "2021"));
  return (
    <Wrapper compactMode={below("medium")}>
      {/* <Test /> */}
      {below("medium") && <div>small</div>}
      {within("medium", "large") && <div>medium</div>}
      {above("large") && <div>large</div>}
      <CardDashboard />
      <DisplayChart
        total={TOTAL_HNY_FUNDING_SUM}
        data={datafrom2021}
        data2={datafrom2022}
        data3={Beneficary_SUM}
      />
    </Wrapper>
  );
};

export default Outflows;

const Wrapper = styled.div<{ compactMode: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 1444px;
  margin: auto;
  padding: ${4 * GU}px;
  padding-top: ${({ compactMode }) => (compactMode ? 7 * GU : 16 * GU)}px;

  & h1,
  h2,
  h3 {
    text-align: center;
    color: ${({ theme }) => theme.surface};
  }

  & > div:not(:first-child) {
    width: 100%;
    margin: auto;
    margin-top: ${({ compactMode }) => (compactMode ? 2 * GU : 4 * GU)}px;
  }
`;

const DisplayData = styled.div`
  width: 100vw;
`;
