import React from "react";
import { gql } from "apollo-boost";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  return (
    <div>
      <ui id="book-list">
        <li>Book name</li>
      </ui>
    </div>
  );
};

export default BookList;
