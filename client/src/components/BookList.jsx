import React, { useState } from "react";
import { getBooksQuery } from "../queries/queries";
import { useQuery } from "@apollo/react-hooks";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState(null);

  const displayBooks = () => {
    const myData = data;
    if (loading) {
      return <div>Loading books...</div>;
    } else {
      return myData.books.map(book => {
        return (
          <li onClick={e => setSelected(book.id)} key={book.id}>
            {book.name}
          </li>
        );
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
      <BookDetails bookId={selected} />
    </div>
  );
};

export default BookList;
