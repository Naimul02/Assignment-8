import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/booksInfo.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold text-center">Books </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mx-2 lg:mx-0">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
