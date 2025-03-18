import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

function SearchBar({ setInputValue }) {
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex">
      <input
        className=" rounded-l-lg px-4 py-2 w-64 bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-1 ring-blue-500 "
        type="text"
        placeholder="Search movies..."
        onChange={handleChange}
      ></input>
      <button className="bg-green-600 rounded-r-lg px-4 py-2 hover:bg-green-700 cursor-pointer">
        <MagnifyingGlassIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}

export default SearchBar;
