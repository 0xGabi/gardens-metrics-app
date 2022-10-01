const gql = String.raw;

export const GardensData = gql`
  {
    gardens {
      id
      address
      createdAt
      requestToken {
        id
        name
      }
    }
  }
`;

//       outflows (where: {stable:false},and: {transferAt: Int}){

export const OutflowsData = gql`
  {
    gardens {
      outflows(where: { stable: false, transferAt_not: null }) {
        id
        requestedAmount
        beneficiary
        transferAt
        stable
      }
    }
  }
`;

export const BeneficiariesData = gql`
  {
    gardens {
      beneficiaries {
        address
        transfers {
          amount
          createdAt
          contributor {
            address
          }
        }
      }
    }
  }
`;
