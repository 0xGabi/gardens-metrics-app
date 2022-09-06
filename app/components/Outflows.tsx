import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";

import { useTheme } from "@1hive/1hive-ui";
import { fetchGardensEntries } from "~/utils/server/subgraph.server";
import { formatDate, formatAmount } from "~/utils/format";

export const loader: LoaderFunction = async () => {
  const gardensData = await fetchGardensEntries();

  return json({ gardensData });
};

const Outflows = ({}) => {
  const { gardensData } = useLoaderData();

  const theme = useTheme();

  const entries = gardensData[0].outflows.map((garden: any) =>
    Object.values(garden)
  );

  // const sum = entries.map((amount) => console.log(formatAmount(amount[1])));

  return (
    <>
      <h1>Data Fetch Example</h1>
      <h2>Outflows Data Querie:</h2>
      <div>{formatDate(1622812220)}</div>
      <br />

      {entries.map((entry: any) => (
        <>
          <p style={{ color: theme.content }}>ID :{entry[0]}</p>
          <p>AMOUNT: {entry[1]}</p>
          <div>READABLE-AMOUNT {formatAmount(entry[1])}</div>
          <p>ADDRESS: {entry[2]}</p>
          <p style={{ color: entry[3] === null ? "red" : "" }}>
            DATE: {entry[3] === null ? "NO DATE" : entry[3]}
          </p>
          <div>READABLE-DATE:{formatDate(entry[3])}</div>
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
