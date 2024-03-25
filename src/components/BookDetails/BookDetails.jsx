import { useLoaderData, useParams } from "react-router-dom";
const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  console.log(books, idInt);

  const book = books.find((book) => book.id === idInt);
  console.log(book);
  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row">
        <img
          src={book.book_img}
          className="w-[500px] h-[600px] rounded-lg bg-base-200 px-10 py-10"
        />
        <div>
          <h1 className="text-5xl font-bold">{book.bookName}</h1>
          <h3>
            By : <span className="text-lg font-bold">{book.author}</span>
          </h3>
          <h2 className="text-2xl font-bold my-4">book.category</h2>
          <p className="py-6">
            <span className="text-lg font-bold">Review : </span>
            {book.review}
          </p>
          <div className="flex gap-3">
            <h2 className="text-xl font-bold">Tags : </h2>
            <span className="font-semibold text-xl text-green-600 bg-base-200 rounded-full px-4 py-1 mr-2">
              {book.tags[2]}
            </span>
            <span className="font-semibold text-xl text-green-600 bg-base-200 rounded-full px-4 py-1 mr-2">
              {book.tags[1]}
            </span>
          </div>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
