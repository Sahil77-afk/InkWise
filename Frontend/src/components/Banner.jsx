import MainImage from "../../public/Banner.jpeg";

function Banner() {
  return (
    <div className="order-2 md:order-1 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center my-5">
      <div className="w-full md:w-1/2 md:order-1 order-2">
        <h1 className="text-4xl font-bold mt-0">
          Hello, welcome here to learn something{" "}
          <span className="text-purple-300">new everyday!!!</span>
        </h1>

        <div className="space-y-6 mt-6">
          <p className="text-xl">
            Welcome to InkWise. Discover timeless tales and new adventures in
            our curated collection of books. From classics to contemporary
            bestsellers, immerse yourself in stories that inspire and entertain.
          </p>

          <label className="input input-bordered flex items-center dark:text-black gap-2">
            Email
            <input type="text" className="grow" placeholder="daisy@site.com" />
          </label>

          <button className="btn mt-6  dark:text-white bg-purple-300 text-white hover:bg-purple-400 px-3">
            secondary
          </button>
        </div>
      </div>

      <div className="order-1 w-full md:order-2 md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src={MainImage}
          alt="Main"
          style={{
            width: "80%",
            height: "auto",
            display: "block",
            marginBottom: "20px",
          }}
        />
      </div>
    </div>
  );
}

export default Banner;
