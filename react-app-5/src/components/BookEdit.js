import React, { useState } from "react";

export default function BookEdit({ book, submitEdit }) {
  const [newTitle, setNewTitle] = useState(book.title);

  // record title value
  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  // handle form submission
  const handleEditSubmit = (event) => {
    event.preventDefault();
    // reference of func. in BookShow.js, sends data for onEdit func.
    submitEdit(book.id, newTitle);
  };

  return (
    <div>
      <form className='book-edit' onSubmit={handleEditSubmit}>
        <label>Title</label>
        <input
          className='input'
          value={newTitle}
          onChange={handleTitleChange}
        />
        <button type='submit' className='button is-primary'>
          Save
        </button>
      </form>
    </div>
  );
}
