import { useState } from "react";
import "./BookCreateStyles.css";

export const BookCreate = ({ onCreate }) => {
  const [bookTitle, setBookTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(bookTitle);
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
