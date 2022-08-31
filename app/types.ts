export type { Chain } from "wagmi";

export type ValueOrArray<T> = T | ValueOrArray<T>[];

export enum FnDescriptionStatus {
  Available = "available",
  Added = "added",
}

export type FnEntrySubgraphData = {
  id: string;
  cid: string;
  contract: string;
  sigHash: string;
  status: FnDescriptionStatus;
  submitter: string;
  upsertAt: number;
};
