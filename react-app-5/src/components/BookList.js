import React, { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/Books";

export default function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);
  // make multiple instances of books with books array
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return (
    <div className='book-list'>
      {count}
      <button className='button' onClick={incrementCount}>
        ++Click++
      </button>
      {renderedBooks}
    </div>
  );
}
