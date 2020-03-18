import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import BookList from "./components/BookList";

import "./App.css";

// Apollo Client setup
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Book List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
