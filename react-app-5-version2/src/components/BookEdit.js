import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
import BookShow from "./BookShow";

function BookEdit({ book, onSubmit }) {
  // book array is received from BookShow->BookList->BookEdit
  // onSubmit is a callback function to be called when form is submitted
  // and it will trigger the handleSubmit in BookList which closes the Edit window
  const [title, setTitle] = useState(book.title);
  // directly imported
  const { editBookById } = useBooksContext();

  // LIVE recording of user Input
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // form Submittiton
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className='book-edit'>
      <label>Title</label>
      <input className='input' value={title} onChange={handleChange} />
      <button type='submit' className='button is-primary'>
        Save
      </button>
    </form>
  );
}

export default BookEdit;
