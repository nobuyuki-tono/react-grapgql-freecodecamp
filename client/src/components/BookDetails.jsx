import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBookQuery } from "../queries/queries";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: bookId }
  });

  const displayBookDetails = () => {
    const { book } = data;
    // console.log(book);
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>Genre: {book.genre}</p>
          <p>Author: {book.author.name}</p>
          <p>All books by this author</p>
          <ul className="other-books">
            {book.author.books.map(book => {
              return <li key={book.id}>{book.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected</div>;
    }
  };

  if (loading) return <p className="book-details">Loading...</p>;
  // if (error) return <p>Error</p>;

  return <div className="book-details">{displayBookDetails()}</div>;
};

export default BookDetails;
