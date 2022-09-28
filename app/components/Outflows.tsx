import { useLoaderData } from "@remix-run/react";
import { useTheme, GU } from "@1hive/1hive-ui";
import styled from "styled-components";

import { useState } from "react";

import PieChart from "./Charts/PieChart";
import RadialChart from "./Charts/RadialChart";
import NetworkChart from "./Charts/NetworkChart";
import Test from "../components/Test";

const Outflows = () => {
  const { gardensOutflows, gardensBeneficiaries } = useLoaderData();
  const theme = useTheme();
  const outflows = gardensOutflows;
  const beneficiaries = gardensBeneficiaries;

  // console.log(beneficiaries);

  // TOTAL SUM of FUNDING PROPOSALS in HNY --- OK
  const TOTAL_HNY_FUNDING_SUM = outflows
    .map((amount: any) => Number(amount.requestedAmount))
    .reduce((prev: number, curr: number) => prev + curr, 0);

  const TOTAL_HNY_FUNDING_SUM_fromBeneficiaries = beneficiaries.map((elem) =>
    elem.transfers.map((elem) => elem.amount)
  );

  console.log(TOTAL_HNY_FUNDING_SUM_fromBeneficiaries);

  //Func that loop all beneficary(ADDRESSES) and sum the HNY for each one
  const filterMonth_Year = (outflows: any) => {
    outflows.reduce(function (acc: any, v: any) {
      acc[v.beneficiary] =
        (acc[v.beneficiary] || 0) + Number(v.requestedAmount);
      return acc;
    }, {});
  };

  //Func that loop all beneficary(ADDRESSES) and return the sum of  all HNY each one
  const result = outflows.reduce(function (acc: any, v: any) {
    acc[v.beneficiary] = (acc[v.beneficiary] || 0) + Number(v.requestedAmount);
    return acc;
  }, {});

  //Func filters month and year as return total Funding for each month in the year
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
  const year = ["2021", "2022"];
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

  const datafrom2021 = filtereByMonthAndYearTEST_2021(outflows, months, "2022");

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
    <Wrapper>
      <Data>
        <h2>Outflows Data Querie:</h2>
        <h3>TOTAL HNY FUNDING: {TOTAL_HNY_FUNDING_SUM} </h3>
        <Test />
        <br />

        {outflows.map((outflow: any) => (
          <>
            <p style={{ color: theme.content }}>ID :{outflow.id}</p>
            <p>
              AMOUNT: {outflow.requestedAmount},{typeof outflow.requestedAmount}
            </p>
            <p>BENEFICIARY address: {outflow.beneficiary}</p>
            <div>
              DATA : month: {outflow.transferAt.month}, year:{" "}
              {outflow.transferAt.year}
            </div>
            <br></br>
          </>
        ))}
      </Data>
      <DisplayData>
        <h1>Display-Data</h1>

        {/* <NetworkChart /> */}
        <RadialChart datishun={datafrom2021} />
        {/* <PieChart /> */}
      </DisplayData>
    </Wrapper>
  );
};

export default Outflows;

const Wrapper = styled.div`
  border: 3px solid red;
  display: flex;
  padding: ${1 * GU}px;

  & h1,
  h2,
  h3 {
    text-align: center;
    color: ${({ theme }) => theme.content};
  }
`;

const Data = styled.div`
  border-right: 3px solid yellow;
  flex: 1;
  padding: ${1.5 * GU}px;
`;

const DisplayData = styled.div`
  flex: 2;
  padding: ${1.5 * GU}px;
`;
