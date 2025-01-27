import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/listedbooks">Listed Books</NavLink>
            </li>

            <li>
              <NavLink to="/pagestoread">Pages to Read</NavLink>
            </li>
            <li>
              <NavLink to="/bookstore">Our Book Store</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-2xl font-bold text-green-500"
        >
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/listedbooks">Listed Books</NavLink>
          </li>

          <li>
            <NavLink to="/pagestoread">Pages to Read</NavLink>
          </li>
          <li>
            <NavLink to="/bookstore">Our Book Store</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:block lg:ml-16 ">
        <a className="btn px-8 bg-slate-300 font-bold">Sign In</a>
        <a className="btn px-8 bg-slate-300 font-bold ml-4">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
