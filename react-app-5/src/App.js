import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  // our main storage where books details are filled and fetched
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  /*DO NOT DO THIS: it will make the program run in endless loop as
  when fetchBooks is called it updates the state, when state is updated
  the App.js is re-CanvasRenderingContext2D, then again fetchBooks is
  called and this causes endless loop of requests*/
  // fetchBooks();

  useEffect(() => {
    fetchBooks();
    // cleanup function to prevent unnecessary fetch request
    return () => {
      // do nothing
    };
  }, []);

  // fetch title from BookCreate.js
  const createBook = async (title) => {
    // send POST request to server to add title. ID is generated automatically
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  // this function is passed till BookShow.js and fetch new book title to replace existing one
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  // delete book from the books Array indentifing with unique ID
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

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
