import { useState, useContext } from "react";
import "./BookCreateStyles.css";
import BookContext from "../../context/books";

export const BookCreate = () => {
  const [bookTitle, setBookTitle] = useState("");
  const { handleCreateBook } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateBook(bookTitle);
    setBookTitle("");
  };

  return (
    <div>
      <h2>Add a Book</h2>
      <label htmlFor="book-entry">Title</label>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="book-entry"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <button>Create Book</button>
      </form>
    </div>
  );
};
