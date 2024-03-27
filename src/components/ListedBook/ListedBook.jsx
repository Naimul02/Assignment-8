import { MdOutlineLocationOn } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { MdFindInPage } from "react-icons/md";
import { Link } from "react-router-dom";

const ListedBook = ({ readBook }) => {
  // console.log(readBook);
  return (
    <>
      <div className="lg:h-[270px] border rounded-xl my-4 flex flex-col lg:flex-row">
        <div className="p-4">
          <img
            src={readBook.book_img}
            alt=""
            className="bg-base-200 p-6 rounded-xl lg:w-[200px] w-full h-[300px]  lg:h-[240px] object-contain"
          />
        </div>
        <div className="ml-2 p-4 space-y-3">
          <h1 className="text-2xl lg:text-xl font-bold">{readBook.bookName}</h1>
          <p>
            By : <span className="text-lg font-bold">{readBook.author}</span>
          </p>
          <div className="flex lg:items-center flex-col lg:flex-row">
            <span className="text-lg font-bold mr-6 mb-3 lg:mb-0">Tags : </span>
            <div className="flex lg:items-center flex-col lg:flex-row">
              <div className="flex flex-col lg:flex-row lg:items-center">
                <p className="font-semibold text-lg text-green-600 bg-base-200 rounded-full px-4 py-1 mr-2 mb-3 lg:mb-0">
                  #{readBook.tags[2]}
                </p>
                <p className="font-semibold text-lg text-green-600  bg-base-200 rounded-full px-4 py-1">
                  #{readBook.tags[0]}
                </p>
              </div>
              <p className="flex lg:items-center lg:ml-4 mt-3 lg:mt-0">
                <MdOutlineLocationOn className="text-2xl font-semibold" />
                <span className="text-lg">
                  Year of Publishing : {readBook.yearOfPublishing}
                </span>
              </p>
            </div>
          </div>
          <div className="flex lg:items-center flex-col lg:flex-row border-b-2 pb-3">
            <p className="flex lg:items-center">
              <LuUsers className="text-3xl font-semibold mr-1" />
              <span className="text-lg">Publisher : {readBook.publisher}</span>
            </p>
            <p className="flex lg:items-center lg:ml-5 mt-3 lg:mt-0">
              <MdFindInPage className="text-3xl font-semibold mr-1" />
              <span className="text-lg">Page : {readBook.totalPages}</span>
            </p>
          </div>

          <div className="flex gap-4 flex-col lg:flex-row">
            <p className="font-semibold text-lg text-blue-600 bg-blue-200 rounded-full px-4 py-1 mr-2">
              Category : {readBook.category}
            </p>
            <p className="font-semibold text-lg text-orange-600 bg-orange-200 rounded-full px-4 py-1 mr-2">
              Rating : {readBook.rating}
            </p>

            <Link to={`/bookdetails/${readBook.id}`}>
              <button className="rounded-full  h-10 lg:h-full w-full bg-green-600 text-white font-bold px-10">
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
