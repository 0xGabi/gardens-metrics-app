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

export const OutflowsData = gql`
  {
    gardens {
      outflows {
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
    beneficiaries {
      requestTokenBalance
      transfers {
        amount
        createdAt
        contributor {
          address
          requestTokenBalance
        }
      }
    }
  }
`;
