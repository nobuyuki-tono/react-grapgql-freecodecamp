import React, { useState } from "react";
import { getAuthorsQuery, addBookMutation } from "../queries/queries";
import { useQuery } from "@apollo/react-hooks";
import { useMutation } from "@apollo/react-hooks";

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBook, { mutationError }] = useMutation(addBookMutation);

  const [formName, setFormName] = useState("");
  const [formGenre, setFormGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const displayAuthor = () => {
    const myData = data;

    if (error) {
      console.log(mutationError);
    }

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
    addBook({
      variables: { name: formName, genre: formGenre, authorId: authorId }
    });

    setFormName("");
    setFormGenre("");
    setAuthorId("");
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
