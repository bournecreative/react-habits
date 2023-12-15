import { useContext, useState } from "react";
import BookContext from "../../context/books";

export const BookEdit = ({ book, handleEditorClose }) => {
  const [newTitle, setNewTitle] = useState(book.title);
  const { handleEditTitle } = useContext(BookContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleEditTitle(book.id, newTitle);
    handleEditorClose(book.id, newTitle);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
      />
      <button>Update Title</button>
    </form>
  );
};
