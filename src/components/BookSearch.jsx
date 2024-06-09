// src/components/BookSearch.js
import { TextField } from "@mui/material";
import React from "react";
import useFetchBooks from "../hooks/useFetchBooks";
import BookCard from "./BookCard";
import SkeletonBookCard from "./SkeletonBookCard";

const BookSearch = ({ addToBookshelf }) => {
  const { results, setQuery, isLoading, query, isError } = useFetchBooks();
  return (
    <div className="p-4">
      <TextField
        label="Search for books"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading && [1, 2, 3, 4].map((key) => <SkeletonBookCard key={key} />)}
        {isError && [1, 2, 3, 4].map((key) => <SkeletonBookCard key={key} />)}
        {results.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            addToBookshelf={addToBookshelf}
          />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
