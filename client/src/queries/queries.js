import { gql } from "apollo-boost";

const getAuhtorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

export { getAuhtorsQuery, getBooksQuery };
