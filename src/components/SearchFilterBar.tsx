type SearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

function SearchFilterBar({
  search,
  setSearch,
  category,
  setCategory,
}: SearchProps) {
  return (
    <div className="bg-[#130615] flex justify-center items-center gap-4 py-4">

      <input
        className="outline-none focus:ring-0 px-6 py-3 rounded-xl text-white bg-[#241227]"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-3 rounded-xl bg-[#241227] text-white outline-none"
      >
        <option value="all">All Categories</option>
        <option value="jewelery">jewelery</option>
        <option value="electronics">electronics</option>
        <option value="Men's clothing">Men's clothing</option>
        <option value="Women's clothing">Women's clothing</option>
      </select>
    </div>
  );
}

export default SearchFilterBar;