import { BookShow } from "../bookShow/BookShow";
import { useContext } from "react";
import BookContext from "../../context/books";

export const BookList = () => {
  const { books } = useContext(BookContext);

  const bookListContent = books.map((b) => <BookShow book={b} key={b.id} />);

  return (
    <>
      <div>{books && bookListContent}</div>
    </>
  );
};
