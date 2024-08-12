import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  // this the place where the CRUD operation happends
  // this component transfers the books array to its child
  // which is BookShow (BookEdit is child of BookShow)
  const { books } = useBooksContext();

  // shows individual Books
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className='book-list'>{renderedBooks}</div>;
}

export default BookList;
