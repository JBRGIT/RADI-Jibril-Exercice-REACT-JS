import { useEffect } from "react";
import apiMovie from "./api/apiMovie";
import { BrowserRouter, Route, Routes } from "react-router";
import HomeView from "./views/HomeView";
import FavoriteView from "./views/FavoriteView";
import DetailView from "./views/DetailView";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";


function App() {
  // STATE :

  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const [inputValue, setInputValue] = useState("");

  // ----   useEffect :

  useEffect(() => {
    if (!inputValue) {
      apiMovie.get("/discover/movie").then((res) => {
        setMovies(res.data.results);
      });
    } else {
      apiMovie
        .get(`/search/movie?query=${inputValue}&include_adult=false`)
        .then((res) => {
          setMovies(res.data.results);
        });
    }
  }, [inputValue]);




  //------- LOCAL STORAGE :

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  //---------- FUNCTIONS :

  const toggleFavorite = (movie) => {
    if (favorites.findIndex((element) => element.id === movie.id) === -1) {
      setFavorites([...favorites, movie]);
    } else {
      setFavorites(favorites.filter((element) => movie.id !== element.id));
    }
  };

  return (
    <BrowserRouter>
      <Navbar setInputValue={setInputValue} inputValue={inputValue} />
      <Routes>
        <Route
          path="/"
          element={
            <HomeView
              onClick={toggleFavorite}
              movies={movies}
              favorites={favorites}
            />
          }
        />
        <Route
          path="/favorite"
          element={
            <FavoriteView favorites={favorites} onClick={toggleFavorite} />
          }
        />
        <Route
          path="/detail/:id"
          element={
            <DetailView favorites={favorites} onClick={toggleFavorite} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
