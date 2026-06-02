import hero1 from "../assest/hero1.jpg";

function Hero() {
  return (
    <div className="relative h-[90vh] overflow-hidden">
      <img src={hero1} className="absolute w-full h-full object-cover" />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 text-white">

        <h1
          className="text-5xl font-bold max-w-xl tracking-wider"
          style={{ animation: "slideUp 0.7s ease both" }}
        >
          Find Amazing Products
        </h1>

        <span
          className="text-7xl text-violet-400 font-bold max-w-xl tracking-wider"
          style={{ animation: "slideUp 0.7s ease 0.2s both" }}
        >
          Easily
        </span>

        <p
          className="mt-4 text-lg text-gray-200 max-w-lg"
          style={{ animation: "slideUp 0.7s ease 0.4s both" }}
        >
          Discover, search and explore products in a smart way
        </p>

        <button
          className="mt-6 text-xl px-6 py-3 rounded-xl w-fit font-medium transition-all duration-300"
          style={{
            animation: "slideUp 0.7s ease 0.6s both",
            backgroundColor: "white",
            color: "black",
            border: "2px solid transparent",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "white";
            e.currentTarget.style.border = "2px solid white";
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.letterSpacing = "0.05em";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.color = "black";
            e.currentTarget.style.border = "2px solid transparent";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.letterSpacing = "normal";
          }}
          onClick={() => {
            document
              .getElementById("products")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Shop now
        </button>
      </div>
    </div>
  );
}

export default Hero;