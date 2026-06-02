import hero1 from "../assest/hero1.jpg";
function Hero() {
  return (
    <div className="relative h-[90vh]  overflow-hidden ">
      <img src={hero1} className="absolute w-full h-full object-cover" />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 text-white">
        <h1 className="text-5xl font-bold max-w-xl tracking-wider">
          Find Amazing Products 

        </h1>
        <span className="text-7xl text-violet-900 font-bold max-w-xl tracking-wider">Easily</span>

        <p className="mt-4 text-lg text-gray-200 max-w-lg">
          Discover, search and explore products in a smart way
        </p>

        <button
          className="mt-6 bg-white  text-xl text-black px-6 py-3 hover:bg-violet-900 hover:text-white rounded-xl w-fit"
          onClick={() => {
            document
              .getElementById("products")
              ?.scrollIntoView({ behavior: "smooth" });
          }}>
          Shop now
        </button>
      </div>
    </div>
  );
}
export default Hero;
