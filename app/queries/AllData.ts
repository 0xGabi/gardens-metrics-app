const gql = String.raw;

export const AllData = gql`
  {
    gardens {
      id
      address
      createdAt
      requestToken {
        id
        name
      }
      outflows {
        transferAt
        beneficiary
        requestedAmount
        stable
      }
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
  }
`;

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
