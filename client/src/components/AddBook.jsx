import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const getAuhtorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuhtorsQuery);

  return (
    <form id="add-book">
      <div className="field">
        <label htmlFor="">Book name: </label>
        <input type="text" />
      </div>
      <div className="field">
        <label htmlFor="">Genre: </label>
        <input type="text" />
      </div>
      <div className="field">
        <label htmlFor="">Author: </label>
        <select name="" id="">
          <option value="">Select author</option>
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
