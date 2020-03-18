import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  const displayBooks = () => {
    const myData = data;
    if (loading) {
      return <div>Loading books...</div>;
    } else {
      return myData.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  };

  // if (error) return <h1>Error!!</h1>;
  // if (loading) return <h1>Loading....</h1>;

  return (
    <div>
      <ul id="book-list">
        {/* {data.books.map(book => {
          return <li key={book.id}>{book.name}</li>;
        })} */}
        {displayBooks()}
      </ul>
    </div>
  );
};

export default BookList;
