import { BookShow } from "../bookShow/BookShow";

export const BookList = ({ books, onDelete, onEdit }) => {
  const bookListContent = books.map((b) => (
    <BookShow key={b.id} onDelete={onDelete} onEdit={onEdit} book={b} />
  ));

  return <div>{bookListContent}</div>;
};
