function Loader() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-16 h-16 border-[6px] border-violet-200 border-t-violet-600 rounded-full animate-spin">
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  );
}

export default Loader;
