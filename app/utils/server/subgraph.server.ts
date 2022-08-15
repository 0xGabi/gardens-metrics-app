import type { FnEntrySubgraphData } from "~/types";
import { FnDescriptionStatus } from "~/types";

type FunctionResult = {
  id: string;
  cid: string;
  contract: {
    scope: string;
  };
  sigHash: string;
  submitter: string;
  upsertAt: number;
};

type QueryFnsResult = {
  data: {
    functions: FunctionResult[];
  };
  errors?: { message: string }[];
};

type QueryFnResult = {
  data: {
    function: FunctionResult;
  };
  errors?: { message: string }[];
};

const gql = String.raw;

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

const parseFnResult = (fnResult: FunctionResult): FnEntrySubgraphData => {
  const { id, cid, contract, sigHash, submitter, upsertAt } = fnResult;

  return {
    id,
    cid,
    contract: contract.scope,
    sigHash,
    status: FnDescriptionStatus.Added,
    submitter,
    upsertAt,
  };
};

export const fetchFnEntries = async (): Promise<FnEntrySubgraphData[]> => {
  try {
    const rawResponse = await fetchFromGraphQL(
      gql`
        {
          functions {
            id
            contract {
              scope
            }
            cid
            sigHash
            submitter
            upsertAt
          }
        }
      `
    );

    const result = (await rawResponse.json()) as QueryFnsResult;

    if (result.errors?.length) {
      const err = result.errors[0];
      console.error(err);
      throw new Error(err.message);
    }

    if (!result.data.functions) {
      return [];
    }

    return result.data.functions.map(parseFnResult);
  } catch (err) {
    throw new Response(
      "There was an error fetching the contract's function descriptions",
      { status: 500, statusText: "Subgraph Error" }
    );
  }
};
