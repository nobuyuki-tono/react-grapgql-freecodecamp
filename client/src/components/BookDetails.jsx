import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBookQuery } from "../queries/queries";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: bookId }
  });

  const displayBookDetails = () => {
    const { book } = data;

    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author</p>
          <ul className="other-books">
            {book.auhtor.books.map(book => {
              return <li key={book.id}>{book.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected</div>;
    }
  };

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error</p>;

  return <div id="book-details">{displayBookDetails()}</div>;
};

export default BookDetails;
