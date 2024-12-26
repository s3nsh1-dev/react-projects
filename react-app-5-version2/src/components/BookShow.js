import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  // showEdit opens up the window to edit existing titles
  const [showEdit, setShowEdit] = useState(false);
  // when delete icon is clicked then the individial book
  // that's been clicked is recorded and its id is sent to below function
  const { deleteBookById } = useBooksContext();

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  // toogle Edit window
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  // when submited the toogle is set to off == false
  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className='book-show'>
      <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {/* when showEdit is true show BookEdit else existing book title */}
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
