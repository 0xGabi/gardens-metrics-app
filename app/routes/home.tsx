import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { fetchGardensEntries } from "~/utils/server/subgraph.server";
import { useViewport, GU } from "@1hive/1hive-ui";
import { useCatch } from "@remix-run/react";
import { useSigner } from "wagmi";
import styled from "styled-components";
import { AppScreen } from "~/components/AppLayout/AppScreen";
import { SmoothDisplayContainer } from "~/components/SmoothDisplayContainer";
import Outflows from "~/components/Outflows";

export const loader: LoaderFunction = async () => {
  const gardensData = await fetchGardensEntries();
  return json({ gardensData });
};

export default function Home() {
  const { below } = useViewport();
  const [{ data }] = useSigner();

  return (
    <AppScreen>
      <SmoothDisplayContainer>
        <Outflows />
      </SmoothDisplayContainer>
    </AppScreen>
  );
}

const MainContainer = styled.div<{ compactMode: boolean }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: ${({ compactMode }) => (compactMode ? 7 * GU : 23 * GU)}px;
  width: 100%;
  height: 100%;
`;

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
