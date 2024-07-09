// import { useState } from "react";
import BookCreate from "./component/BookCreate";

function App() {
  // const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("New Book Title:", title);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
