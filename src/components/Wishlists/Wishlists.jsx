import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredFromLocalStorageWish } from "../../localStorage/localStorage";
import ListedBook from "../ListedBook/ListedBook";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Wishlists = () => {
  const books = useLoaderData();
  const selectedWishId = getStoredFromLocalStorageWish("wish");
  // console.log(books, selectedWishId);

  const [wishes, setWish] = useState([]);
  const [sortBooks, setSortBooks] = useState([]);
  useEffect(() => {
    const wishBooks = books.filter((book) => selectedWishId.includes(book.id));
    setWish(wishBooks);
    setSortBooks(wishBooks);
  }, []);

  // wish
  const handleSort = (sort) => {
    console.log(sort);
    if (sort === "rating") {
      setSortBooks(
        wishes.sort(function (a, b) {
          return b.rating - a.rating;
        })
      );
    } else if (sort === "numberOfPages") {
      setSortBooks(
        wishes.sort(function (a, b) {
          return b.totalPages - a.totalPages;
        })
      );
    } else if (sort === "publishedYear") {
      setSortBooks(
        wishes.sort(function (a, b) {
          return b.yearOfPublishing - a.yearOfPublishing;
        })
      );
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-6">
        <details className="dropdown">
          <summary className="m-1 btn bg-green-500 px-16 text-xl font-semibold text-white hover:text-black flex items-center">
            Sort By
            <IoIosArrowDown className="text-2xl" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1]  bg-green-500 rounded-box w-60 text-center text-xl font-semibold hover:cursor-pointer">
            <Link to="/listedBooks">
              <li
                className=" btn border-none text-white hover:text-black bg-green-500 text-lg w-full"
                onClick={() => handleSort("rating")}
              >
                Rating
              </li>
            </Link>
            <Link to="/listedBooks">
              <li
                className="btn border-none text-white hover:text-black bg-green-500 text-lg mt-2 w-full"
                onClick={() => handleSort("numberOfPages")}
              >
                Number of Pages
              </li>
            </Link>
            <Link to="/listedBooks">
              <li
                onClick={() => handleSort("publishedYear")}
                className="btn border-none text-white hover:text-black bg-green-500 text-lg mt-2 w-full"
              >
                Published Year
              </li>
            </Link>
          </ul>
        </details>
      </div>
      <div>
        {sortBooks.map((readBook) => (
          <ListedBook key={readBook.id} readBook={readBook}></ListedBook>
        ))}
      </div>
    </div>
  );
};

export default Wishlists;
