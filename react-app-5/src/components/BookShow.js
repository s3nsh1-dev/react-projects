import React, { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book, onDelete, onEdit }) {
  // state to toggle edit window in and out
  const [showEdit, setShowEdit] = useState(false);

  // delete book
  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  // fetch newTitle from BookEdit.js, when done closes the Edit window
  const handleEdit = (id, newTitle) => {
    /* when handleEdit is called showEdit is changed but while its
    inside the function the value of showedit remains false/true it
    changes when exist the function all because of JS asynchronus nature */
    setShowEdit(false);
    // contain reference of function from App.js to replace title
    onEdit(id, newTitle);
  };

  let displayBookTitles = <h3>{book.title}</h3>;

  // TRUE when clicked on pencil icon
  if (showEdit) {
    displayBookTitles = <BookEdit book={book} submitEdit={handleEdit} />;
  }

  return (
    <div className='book-show'>
      {displayBookTitles}

      {/* this way to writing URL with unique id, fetches unique images everytime */}
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books' />

      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
