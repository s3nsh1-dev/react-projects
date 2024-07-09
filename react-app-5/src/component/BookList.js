import React from "react";
import BookShow from "./BookShow";

export default function BookList({ books, onDelete, onEdit }) {
  // make multiple instances of books with books array
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return <div className='book-list'>{renderedBooks}</div>;
}
