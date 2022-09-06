import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";

import { useTheme } from "@1hive/1hive-ui";
import { fetchGardensEntries } from "~/utils/server/subgraph.server";
import { formatDate, formatAmount, formatAddress } from "~/utils/format";
import { BigNumber } from "ethers";

// export const loader: LoaderFunction = async () => {
//   const gardensData = await fetchGardensEntries();

//   return json({ gardensData });
// };

const Outflows = ({}) => {
  const { gardensData } = useLoaderData();
  const theme = useTheme();

  //Declare outflows varibale to work with:
  const outflows = gardensData[0].outflows.map((garden: any) =>
    Object.values(garden)
  );

  //FUNDING PROPOSALS in HNY (79 of 91)
  const TOTAL_HNY_FUNDING_PROPOSALS = outflows
    .filter((stable: any) => stable[4] === false)
    .map((amount: any) => formatAmount(amount[1]))
    .reduce(
      (previousValue: number, currentValue: number) =>
        previousValue + currentValue,
      0
    );
  //FUNDING PROPOSALS STABLE (12 of 91) ==> ????
  // const STABLE_FUNDING_PROPOSALS = outflows
  //   .filter((stable: any) => stable[4] === true)
  //   .map((amount: any) => formatAmount_STRING(amount[1]));
  // console.log(Number(STABLE_FUNDING_PROPOSALS);

  return (
    <>
      <h2>Outflows Data Querie:</h2>
      <div>TOTAL HNY FUNDING: {TOTAL_HNY_FUNDING_PROPOSALS} </div>
      <br />

      {outflows.map((entry: any) => (
        <>
          <p style={{ color: theme.content }}>ID :{entry[0]}</p>
          <p>AMOUNT: {entry[1]}</p>
          <div>READABLE-AMOUNT = {formatAmount(entry[1])} hny</div>
          <p>BENEFICIARY address: {formatAddress(entry[2])}</p>
          <p style={{ color: entry[3] === null ? "red" : "" }}>
            DATE: {entry[3] === null ? "NO DATE" : entry[3]}
          </p>
          <div>READABLE-DATE : {formatDate(entry[3])}</div>
          <br></br>
        </>
      ))}
    </>
  );
};

export function CatchBoundary() {
  const caught = useCatch();

  let message;

  switch (caught.status) {
    case 400:
      message = caught.data;
    case 500:
      message = caught.data;
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <div>
      <div>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </div>
    </div>
  );
}

export default Outflows;
