// src/pages/BookSearchPage.js
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookSearch from "../components/BookSearch";

const BookSearchPage = () => {
  const navigate = useNavigate();
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem("bookshelf")) || []
  );

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <BookSearch addToBookshelf={addToBookshelf} />
      <Button
        variant="contained"
        color="primary"
        className="mt-4"
        onClick={() => navigate("/bookshelf")}
      >
        Go to My Bookshelf
      </Button>
    </div>
  );
};

export default BookSearchPage;
