const gql = String.raw;

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
    }
    outflows {
      requestedAmount
      transferAt
      beneficiary
    }
    beneficiaries {
      id
      transfers {
        amount
        createdAt
        contributor {
          address
        }
      }
    }
  }
`;

// export const AllQueries = gql`
//   {
//     gardens { #LA DAO que se crea en el garden, empezaremos solo por filtrar 1hive
//       id # Identificador
//       address # Address del contrato 1hive
//       createdAt # TimeStamp que tenemeos que parsear
//       requestToken {
//         id #
//         name # Honey
//       }
//     }
//     outflows {
//         transferAt # TimeStamp que tenemeos que parsear, cuando se ejecuta la proposal
//         beneficiary # El address que recibe el funding de dicha propuesta
//         requestedAmount # Cantidad que pidio, expresa con 18 decimales, parsear esta data
//         # stable # No le damos importancia aun
//       }

//       beneficiaries {# todas las address que fueron beneficiadas en 1hive a lo largo de la history{
//         # requestTokenBalance # ??? TO DO: CHEQUEAR ESTE EN EL SUBGRAPH
//         transfers {
//           amount # cantidad de la transfer que hizo esa address
//           createdAt # TimeStamp que tenemeos que parsear, cuando mando el amount
//           contributor {
//             address # que recibio el amount transfer del beneficiary
//             # requestTokenBalance # ???
//           }
//         }
//       }
//     }
//   }
// `;
