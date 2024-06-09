// src/pages/BookshelfPage.js
import React, { useEffect, useState } from "react";
import Bookshelf from "./BookShelf";

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    setBookshelf(JSON.parse(localStorage.getItem("bookshelf")) || []);
  }, []);

  return (
    <div>
      <Bookshelf books={bookshelf} />
    </div>
  );
};

export default BookshelfPage;
