import { useState } from "react";
import { BookEdit } from "../bookEdit/BookEdit";

export const BookShow = ({ id, book, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(false);

  const handleEditClick = () => {
    setEdit(!edit);
  };

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditorClose = (id, newTitle) => {
    onEdit(id, newTitle);
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
