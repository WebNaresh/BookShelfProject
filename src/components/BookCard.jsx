// src/components/BookCard.js
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const BookCard = ({ book, addToBookshelf }) => (
  <Card className="m-4">
    <CardContent>
      <Typography variant="h5" component="div">
        {book.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => addToBookshelf(book)}>
        Add to Bookshelf
      </Button>
    </CardActions>
  </Card>
);

export default BookCard;
