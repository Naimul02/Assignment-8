import { Link } from "react-router-dom";
import Books from "../../components/Books/Books";
const Home = () => {
  return (
    <div className="mb-10">
      {/* Banner Section */}
      <div className="rounded-xl bg-base-200 flex justify-around items-center py-10 mt-4">
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen <br /> up your bookshelf
          </h1>
          <Link to="/listedbooks">
            {" "}
            <button className="btn bg-green-400 px-6 mt-4 font-semibold hover:bg-blue-400 hover:text-white">
              View The List
            </button>
          </Link>
        </div>
        <div>
          <img src="https://i.ibb.co/zf9QR07/pngwing-1.png" alt="" />
        </div>
      </div>
      {/* Books section */}
      <Books></Books>
    </div>
  );
};

export default Home;
