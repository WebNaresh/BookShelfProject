import React from "react";
import { Route, Routes } from "react-router-dom";
import BookSearchPage from "./components/BookSearchPage";
import BookshelfPage from "./components/BookshelfPage";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<BookSearchPage />} />
      <Route path="/bookshelf" element={<BookshelfPage />} />
    </Routes>
  );
};
export default App;
