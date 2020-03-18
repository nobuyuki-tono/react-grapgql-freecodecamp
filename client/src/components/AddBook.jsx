import React from "react";
import { getAuhtorsQuery } from "../queries/queries";
import { useQuery } from "@apollo/react-hooks";

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuhtorsQuery);

  const displayAuthor = () => {
    const myData = data;

    if (loading) {
      return <option disabled>Loading authors...</option>;
    } else {
      return myData.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

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
          {displayAuthor()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
