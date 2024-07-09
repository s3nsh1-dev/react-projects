import React, { useState } from "react";

export default function BookEdit({ book, submitEdit }) {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    submitEdit(book.id, newTitle);
    console.log("New Title:", newTitle);
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
