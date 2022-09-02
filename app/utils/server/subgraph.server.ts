import { AllQueries } from "~/queries/AllQueries";
import { GardensData } from "~/queries/Queries";
import { GardenResult, QueryGardensResult } from "~/types";

const gql = String.raw;

//
const fetchFromGraphQL = async (query: string) => {
  if (!process.env.SUBGRAPH_URI) {
    throw new Error("SUBGRAPH_URI is required");
  }

  const body: any = { query };

  return fetch(process.env.SUBGRAPH_URI, {
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
};

const parseGardenResult = (gardenResult: GardenResult): GardenResult => {
  return gardenResult;
};

export const fetchGardensEntries = async (): Promise<GardenResult[]> => {
  try {
    const rawResponse = await fetchFromGraphQL(GardensData);

    const result = (await rawResponse.json()) as QueryGardensResult;

    if (result.errors?.length) {
      const err = result.errors[0];
      console.error(err);
      throw new Error(err.message);
    }

    if (!result.data.gardens) {
      return [];
    }

    return result.data.gardens.map(parseGardenResult);
  } catch (err) {
    throw new Response(
      "There was an error fetching the contract's function descriptions",
      { status: 500, statusText: "Subgraph Error" }
    );
  }
};
