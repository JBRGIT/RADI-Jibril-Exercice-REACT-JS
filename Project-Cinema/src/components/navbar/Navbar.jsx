import { Link, NavLink } from "react-router";
import SearchBar from "./SearchBar";

function Navbar({
  setInputValue,
  inputValue,
  handleSearchMovies,
  handleSearchFavorites,
}) {
  return (
    <nav className="bg-blue-950 px-16 py-7 flex flex-col md:flex-row items-center justify-around">
      <Link to="/">
        <h1 className="text-green-500 uppercase font-black text-2xl">
          favflicks
        </h1>
      </Link>
      <SearchBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSearchMovies={handleSearchMovies}
        handleSearchFavorites={handleSearchFavorites}
      />
      <NavLink
        className={({ isActive }) =>
          `text-lg ${isActive ? "text-green-500" : "text-gray-300"}`
        }
        to="/favorite"
      >
        Favorites
      </NavLink>
    </nav>
  );
}

export default Navbar;
