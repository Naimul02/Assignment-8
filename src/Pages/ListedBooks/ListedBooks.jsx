import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ListedBook from "../../components/ListedBook/ListedBook";
import {
  getStoredFromLocalStorageRead,
  getStoredFromLocalStorageWish,
} from "../../localStorage/localStorage";
import { IoIosArrowDown } from "react-icons/io";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Wishlists from "../../components/Wishlists/Wishlists";

const ListedBooks = () => {
  const books = useLoaderData();
  const selectedbooksId = getStoredFromLocalStorageRead("read");

  const [readBooks, setReadBooks] = useState([]);
  const [sortBooks, setSortBooks] = useState([]);

  // read

  useEffect(() => {
    if (books.length > 0) {
      const selectedBooks = books.filter((book) =>
        selectedbooksId.includes(book.id)
      );
      // console.log(selectedBooks);
      setReadBooks(selectedBooks);
      setSortBooks(selectedBooks);
    }
  }, []);

  // sort event handler
  const handleSort = (sort) => {
    console.log(sort);
    if (sort === "rating") {
      setSortBooks(
        readBooks.sort(function (a, b) {
          return b.rating - a.rating;
        })
      );
    } else if (sort === "numberOfPages") {
      setSortBooks(
        readBooks.sort(function (a, b) {
          return b.totalPages - a.totalPages;
        })
      );
    } else if (sort === "publishedYear") {
      setSortBooks(
        readBooks.sort(function (a, b) {
          return b.yearOfPublishing - a.yearOfPublishing;
        })
      );
    }
  };

  const handleWish = () => {
    console.log("hello");
    const element = document.getElementById("read-books");
    console.log(element);
    element.classList.add("hidden");
  };
  const handleRead = () => {
    document.getElementById("read-books").classList.remove("hidden");
  };

  return (
    <div>
      <div className="bg-slate-300 mb-6">
        <h1 className="text-center py-5 text-4xl font-bold">Books</h1>
      </div>

      <Tabs>
        <TabList>
          <Tab onClick={handleRead}>Read Books</Tab>
          <Tab onClick={handleWish}>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="flex justify-center mt-6" id="read-books">
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
        </TabPanel>
        <TabPanel>
          <Wishlists></Wishlists>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
