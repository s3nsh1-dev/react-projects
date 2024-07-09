import { useState } from "react";
import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList";

function App() {
  // our main storage where books details are filled and fetched
  const [books, setBooks] = useState([]);

  // fetch title from BookCreate.js add it to our main storage
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  // this function is passed till BookShow.js and fetch new book title to replace existing one
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  // delete book from the books Array indentifing with unique ID
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
