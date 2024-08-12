// use books context makes the imports of useContext
// and the BooksContext available to any component replacing with one component
import { useContext } from "react";
import BooksContext from "../context/books";

function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext;
