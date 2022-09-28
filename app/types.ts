export type ValueOrArray<T> = T | ValueOrArray<T>[];

export type GardenResult = {
  id: string;
  address: string;
  createdAt: number;
  requestToken: {
    id: string;
    name: string;
  };
  outflows: {
    id: any;
    transferAt: string;
    beneficiary: string;
    requestedAmount: number;
    stable: boolean;
  };
  beneficiaries: {
    address: string;
    transfers: {
      amount: number;
      createdAt: number;
      contributor: {
        address: string;
        requestTokenBalance: number;
      };
    };
  };
};

export type QueryGardensResult = {
  data: {
    gardens: GardenResult[];
  };
  errors?: { message: string }[];
};
