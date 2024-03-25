import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { id, bookName, author, book_img, review, rating, category, tags } =
    book;

  return (
    <Link to={`/bookdetails/${id}`} className="card border rounded-xl p-3">
      <figure className="bg-base-200 rounded-xl py-8">
        <img src={book_img} alt="Shoes" />
      </figure>
      <div className="space-y-3">
        <div className="flex mt-3">
          <p className="font-semibold text-xl text-green-600 bg-base-200 rounded-full px-4 py-1 mr-2">
            {tags[2]}
          </p>
          <p className="font-semibold text-xl text-green-600  bg-base-200 rounded-full px-4 py-1">
            {tags[0]}
          </p>
        </div>
        <h2 className="card-title ">{bookName}</h2>
        <h2 className="text-base font-bold  border-b  pb-2">
          <span className="text-base-400">By :</span> {author}
        </h2>

        <div className="flex justify-between">
          <p>{category}</p>
          <div className="flex items-center">
            <p>{rating}</p>
            <FaRegStar className="text-xl ml-2" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
