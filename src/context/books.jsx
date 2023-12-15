import { createContext, useState, useRef, useEffect } from "react";
import axios from "axios";

const BookContext = createContext();

export function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const isMounted = useRef(true);

  useEffect(() => {
    const getBooks = async () => {
      const response = await axios.get("http://localhost:3001/books");
      setBooks([...response.data]);
    };
    if (isMounted.current) {
      getBooks();
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleEditTitle = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: title,
    });

    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks([...updatedBook]);
  };

  const handleDeleteBook = async (target) => {
    // eslint-disable-next-line no-unused-vars
    const response = await axios.delete(
      `http://localhost:3001/books/${target}`
    );
    const updatedBooks = books.filter((b) => {
      return b.id !== target;
    });
    setBooks(updatedBooks);
  };

  const handleCreateBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    setBooks([...books, response.data]);
  };

  const valueToShare = {
    books: books,
    handleCreateBook: handleCreateBook,
    handleEditTitle: handleEditTitle,
    handleDeleteBook: handleDeleteBook,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export default BookContext;
