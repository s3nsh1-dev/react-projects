import React, { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/Books";

export default function BookList({ books, onDelete, onEdit }) {
  // make multiple instances of books with books array
  const { count, incrementCount } = useContext(BooksContext);
  const renderedBooks = books.map((book) => {
    return (
      <>
        <div>
          {count}
          <button onClick={incrementCount}>Increase Count</button>
        </div>
        <BookShow
          key={book.id}
          book={book}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </>
    );
  });
  return <div className='book-list'>{renderedBooks}</div>;
}
