import React, { useState } from "react";

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    // to stop the default behaviosr of form which combine all data and send in URL
    event.preventDefault();
    onCreate(title);
    // when book is created, no need to have old data
    setTitle("");
  };

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button' type='submit'>
          Create!
        </button>
      </form>
    </div>
  );
}
