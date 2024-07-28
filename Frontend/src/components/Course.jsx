import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Welcome to Our Book{" "}
            <span className="text-purple-300">Courses! :D</span>
          </h1>
          <p className="mt-8">
            Explore a world of knowledge and adventure through our curated book
            courses. Whether you're looking to delve into the classics, discover
            new authors, or expand your understanding of various genres, we've
            got something for everyone.
          </p>
          <Link to="/">
            <button className=" mt-6 bg-purple-300 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
