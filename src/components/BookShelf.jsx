// src/components/Bookshelf.js
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Bookshelf = ({ books }) => (
  <div className="p-4">
    {books.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <Card key={book.key} className="m-4">
            <CardContent>
              <Typography variant="h5" component="div">
                {book.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {book.author_name
                  ? book.author_name.join(", ")
                  : "Unknown Author"}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    ) : (
      <Typography variant="body1" className="text-center mt-4">
        No books in your bookshelf.
      </Typography>
    )}
  </div>
);

export default Bookshelf;
