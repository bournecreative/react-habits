import { BookCreate } from "./components/bookCreate/BookCreate";
import { BookList } from "./components/bookList/BookList";

function App() {
  return (
    <>
      <BookList />
      <BookCreate />
    </>
  );
}

export default App;
