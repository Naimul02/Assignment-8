import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ListedBook from "../../components/ListedBook/ListedBook";
import { getStoredFromLocalStorageRead } from "../../localStorage/localStorage";


const ListedBooks = () => {
  const books = useLoaderData();
  const selectedbooksId = getStoredFromLocalStorageRead("read");

  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    if (books.length > 0) {
      const selectedBooks = books.filter((book) =>
        selectedbooksId.includes(book.id)
      );
      console.log(selectedBooks);
      setReadBooks(selectedBooks);
    }
  }, []);

  return (
    <div>
      <div className="bg-slate-300">
        <h1 className="text-center py-5 text-4xl font-bold">Books</h1>
      </div>

      <div>
        <Link to="/listedbooks">
          <button className="mr-4">Read Books</button>
        </Link>

        <Link to="/wishlists">
          <button>Wish Book</button>
        </Link>
      </div>
      <div>
        {readBooks.map((readBook) => (
          <ListedBook key={readBook.id} readBook={readBook}></ListedBook>
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
