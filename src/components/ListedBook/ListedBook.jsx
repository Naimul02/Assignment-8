import { MdOutlineLocationOn } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { MdFindInPage } from "react-icons/md";
import { Link } from "react-router-dom";

const ListedBook = ({ readBook }) => {
  console.log(readBook);
  return (
    <>
      <div className="h-[270px] border rounded-xl my-4 flex">
        <div className="p-4">
          <img
            src={readBook.book_img}
            alt=""
            className="bg-base-200 p-6 rounded-xl w-[200px]  h-[240px]"
          />
        </div>
        <div className="ml-2 p-4 space-y-3">
          <h1 className="text-xl font-bold">{readBook.bookName}</h1>
          <p>
            By : <span className="text-lg font-bold">{readBook.author}</span>
          </p>
          <div className="flex items-center">
            <span className="text-lg font-bold mr-6">Tags : </span>
            <div className="flex items-center">
              <p className="font-semibold text-lg text-green-600 bg-base-200 rounded-full px-4 py-1 mr-2">
                #{readBook.tags[2]}
              </p>
              <p className="font-semibold text-lg text-green-600  bg-base-200 rounded-full px-4 py-1">
                #{readBook.tags[0]}
              </p>
              <p className="flex items-center ml-4">
                <MdOutlineLocationOn className="text-2xl font-semibold" />
                <span className="text-lg">
                  Year of Publishing : {readBook.yearOfPublishing}
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center  border-b-2 pb-3">
            <p className="flex items-center">
              <LuUsers className="text-3xl font-semibold mr-1" />
              <span className="text-lg">Publisher : {readBook.publisher}</span>
            </p>
            <p className="flex items-center ml-5">
              <MdFindInPage className="text-3xl font-semibold mr-1" />
              <span className="text-lg">Page : {readBook.totalPages}</span>
            </p>
          </div>

          <div className="flex gap-4">
            <p className="font-semibold text-lg text-blue-600 bg-blue-200 rounded-full px-4 py-1 mr-2">
              Category : {readBook.category}
            </p>
            <p className="font-semibold text-lg text-orange-600 bg-orange-200 rounded-full px-4 py-1 mr-2">
              Rating : {readBook.rating}
            </p>

            <Link to={`/bookdetails/${readBook.id}`}>
              <button className="rounded-full h-full bg-green-600 text-white font-bold px-10">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListedBook;
