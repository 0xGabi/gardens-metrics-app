//providrs
//hooks
//helpers
//utils
//assets
import { useLoaderData } from "@remix-run/react";
import { useTheme, GU } from "@1hive/1hive-ui";
import styled from "styled-components";

import {
  formatDate,
  formatDate_TWO,
  formatAmount,
  formatAddress,
} from "~/utils/format";
import PieChart from "./Charts/PieChart";
import RadialChart from "./Charts/RadialChart";
import NetworkChart from "./Charts/NetworkChart";

const Outflows = ({}) => {
  const { gardensData } = useLoaderData();
  const theme = useTheme();

  //Declare ALL_outflows varibale to work with:
  const outflows_ALL = gardensData[0].outflows.map((garden: any) =>
    Object.values(garden)
  );
  //Declare HONEY_outflows && filter Cancelled Porposals
  const outflows_HNY = outflows_ALL.filter(
    (stable: any) => stable[4] === false && stable[3] !== null
  );

  //TOTAL SUM of FUNDING PROPOSALS in HNY
  const TOTAL_HNY_FUNDING_SUM = outflows_HNY
    .map((amount: any) => formatAmount(amount[1]))
    .reduce((prev: number, curr: number) => prev + curr, 0);

  return (
    <Wrapper>
      <Data>
        <h2>Outflows Data Querie:</h2>
        <h3>TOTAL HNY FUNDING: {TOTAL_HNY_FUNDING_SUM} </h3>
        <br />

        {outflows_HNY.map((outflow: any) => (
          <>
            <p style={{ color: theme.content }}>ID :{outflow[0]}</p>
            <p>AMOUNT: {outflow[1]}</p>
            <div>READABLE-AMOUNT = {formatAmount(outflow[1])} hny</div>
            <p>BENEFICIARY address: {formatAddress(outflow[2])}</p>
            <p style={{ color: outflow[3] === null ? "red" : "" }}>
              DATE:{" "}
              {outflow[3] === null ? "No Date, Status: Cancelled" : outflow[3]}
            </p>
            <div>READABLE-DATE : {formatDate(outflow[3])}</div>
            <div>READABLE-DATE-TWO : {formatDate_TWO(outflow[3])}</div>
            <br></br>
          </>
        ))}
      </Data>
      <DisplayData>
        <h1>Display-Data</h1>
        <NetworkChart />
        <PieChart />
        <RadialChart />
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
