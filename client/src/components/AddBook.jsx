import React, { useState } from "react";
import { getAuhtorsQuery } from "../queries/queries";
import { useQuery } from "@apollo/react-hooks";

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuhtorsQuery);
  const [formName, setFormName] = useState("");
  const [formGenre, setFormGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

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

  const handleNameCahnge = e => {
    setFormName(e.target.value);
  };

  const handleGenreChange = e => {
    setFormGenre(e.target.value);
  };

  const handleSelectChange = e => {
    setAuthorId(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formName);
    console.log(formGenre);
    console.log(authorId);
  };

  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="">Book name: </label>
        <input onChange={handleNameCahnge} value={formName} type="text" />
      </div>
      <div className="field">
        <label htmlFor="">Genre: </label>
        <input onChange={handleGenreChange} value={formGenre} type="text" />
      </div>
      <div className="field">
        <label htmlFor="">Author: </label>
        <select name="" id="" onChange={handleSelectChange}>
          <option value="">Select author</option>
          {displayAuthor()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
