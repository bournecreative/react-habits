import { useState } from "react";

export const BookEdit = ({ book, handleEditorClose }) => {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleOnSubmit = (e) => {
    e.preventDefault();
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
