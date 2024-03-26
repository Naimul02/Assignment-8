import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredFromLocalStorageWish } from "../../localStorage/localStorage";
import ListedBook from "../ListedBook/ListedBook";
import { Link, NavLink } from "react-router-dom";

const Wishlists = () => {
  const books = useLoaderData();
  const selectedWishId = getStoredFromLocalStorageWish("wish");
  // console.log(books, selectedWishId);

  const [wishes, setWish] = useState([]);
  useEffect(() => {
    const wishBooks = books.filter((book) => selectedWishId.includes(book.id));
    setWish(wishBooks);
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

        <NavLink to="/wishlists">
          <button>Wish Book</button>
        </NavLink>
      </div>
      <div>
        {wishes.map((readBook) => (
          <ListedBook key={readBook.id} readBook={readBook}></ListedBook>
        ))}
      </div>
    </div>
  );
};

export default Wishlists;
