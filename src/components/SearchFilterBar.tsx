type SearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  maxPrice: number;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
};

const categories = [
  { value: "all", label: "All Categories" },
  { value: "jewelery", label: "Jewelery" },
  { value: "electronics", label: "Electronics" },
  { value: "men's clothing", label: "Men's Clothing" },
  { value: "women's clothing", label: "Women's Clothing" },
];

const MAX = 1000;

function SearchFilterBar({
  search,
  setSearch,
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
}: SearchProps) {
  return (
    <div className="bg-[#130615] flex flex-wrap justify-center items-center gap-3 py-4 px-6">

      {/* Search Input */}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="18" height="18"
          viewBox="0 0 24 24"
          fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          className="pl-10 pr-5 py-2.5 rounded-lg text-sm text-white bg-[#241227] border border-[#3b1a42] outline-none focus:border-violet-500 transition-colors duration-200 w-64 placeholder:text-gray-500 tracking-wide"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* Divider */}
      <div className="w-px h-8 bg-[#3b1a42]" />

      {/* Category Select */}
      <div className="relative">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="appearance-none pl-4 pr-10 py-2.5 rounded-lg bg-[#241227] text-sm text-white border border-[#3b1a42] outline-none focus:border-violet-500 transition-colors duration-200 tracking-wide cursor-pointer"
        >
          {categories.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          width="14" height="14"
          viewBox="0 0 24 24"
          fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>

      {/* Divider */}
      <div className="w-px h-8 bg-[#3b1a42]" />

      {/* Price Range Slider */}
      <div className="flex items-center gap-3">
        <span className="text-gray-400 text-sm tracking-wide whitespace-nowrap">
          Price
        </span>

        <div className="relative w-36">
          <input
            type="range"
            min={0}
            max={MAX}
            step={10}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #7c3aed ${(maxPrice / MAX) * 100}%, #3b1a42 ${(maxPrice / MAX) * 100}%)`,
            }}
          />
        </div>

        <span className="text-violet-400 text-sm font-medium w-16 text-right">
          ${maxPrice === MAX ? "All" : maxPrice}
        </span>

        {maxPrice < MAX && (
          <button
            onClick={() => setMaxPrice(MAX)}
            className="text-gray-500 hover:text-white text-xs transition-colors"
          >
            ✕
          </button>
        )}
      </div>

    </div>
  );
}

export default SearchFilterBar;