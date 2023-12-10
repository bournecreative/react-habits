import { useState } from "react";
import { BookCreate } from "./components/bookCreate/BookCreate";
import { BookList } from "./components/bookList/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const handleEditTitle = (id, title) => {
    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: title };
      }
      return book;
    });
    setBooks([...updatedBook]);
  };

  const handleDeleteBook = (target) => {
    const updatedBooks = books.filter((b) => {
      return b.id !== target;
    });
    setBooks(updatedBooks);
  };

  const handleCreateBook = (newBook) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: newBook },
    ];
    setBooks(updatedBooks);
  };

  return (
    <>
      <BookList
        onDelete={handleDeleteBook}
        onEdit={handleEditTitle}
        books={books}
      />
      <BookCreate onCreate={handleCreateBook} />
    </>
  );
}

export default App;
