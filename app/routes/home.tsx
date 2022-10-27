import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  fetchGardensOutflows,
  fetchGardensBeneficiaries,
} from "~/utils/server/subgraph.server";
import { useCatch } from "@remix-run/react";
import { AppScreen } from "~/components/AppLayout/AppScreen";
import { SmoothDisplayContainer } from "~/components/Styled/SmoothDisplayContainer";
import Outflows from "~/components/Outflows";

export const loader: LoaderFunction = async () => {
  const gardensOutflows = await fetchGardensOutflows();
  return json({ gardensOutflows });
};

export default function Home() {
  return (
    <AppScreen>
      <SmoothDisplayContainer>
        <Outflows />
      </SmoothDisplayContainer>
    </AppScreen>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
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
