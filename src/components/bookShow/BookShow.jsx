import { useState, useContext } from "react";
import BookContext from "../../context/books";
import { BookEdit } from "../bookEdit/BookEdit";

export const BookShow = ({ id, book }) => {
  const [edit, setEdit] = useState(false);
  const { handleEditTitle, handleDeleteBook } = useContext(BookContext);
  const handleEditClick = () => {
    setEdit(!edit);
  };

  const handleDeleteClick = () => {
    handleDeleteBook(book.id);
  };

  const handleEditorClose = (id, newTitle) => {
    handleEditTitle(id, newTitle);
    setEdit(false);
  };

  const renderedContent = edit ? (
    <BookEdit book={book} handleEditorClose={handleEditorClose} />
  ) : (
    <span>{book.title}</span>
  );
  return (
    <div key={id}>
      <div>
        <span onClick={handleEditClick}>Edit</span>
        <span onClick={handleDeleteClick}>Delete</span>
      </div>
      <div>
        <img
          src={`https://picsum.photos/seed/${book.id}/100/100`}
          alt="books"
        />
      </div>
      <div>{renderedContent}</div>
    </div>
  );
};
