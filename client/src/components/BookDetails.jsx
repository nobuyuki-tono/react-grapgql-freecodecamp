import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBookQuery } from "../queries/queries";

const BookDetails = () => {
  const { loading, error, data } = useQuery(getBookQuery);

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error</p>;

  return (
    <div id="book-details">
      <p>Output book details here</p>
    </div>
  );
};

export default BookDetails;
