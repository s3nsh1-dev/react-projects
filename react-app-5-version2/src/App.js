// New App.js
import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
  // will fetchbooks to show the previous list of books entry
  const { fetchBooks } = useContext(BooksContext);

  // first render + everyfetchBook change
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  // no need to pass down the functions to children
  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
