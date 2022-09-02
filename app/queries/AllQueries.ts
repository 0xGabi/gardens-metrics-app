const gql = String.raw;

//TO DO: Insert a comment description for each item in the queires to undersantd what Im fetching

export const AllQueries = gql`
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
