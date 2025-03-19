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

  const [inputValue, setInputValue] = useState("");

  // ----   useEffect :
  // /discover/movie?include_adult=false
  useEffect(() => {
    if (!inputValue) {
      apiMovie.get("/trending/movie/week").then((res) => {
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

  //---------- FUNCTIONS :

  return (
    <BrowserRouter>
      <Navbar setInputValue={setInputValue} inputValue={inputValue} />
      <Routes>
        <Route path="/" element={<HomeView movies={movies} />} />
        <Route path="/favorite" element={<FavoriteView />} />
        <Route path="/detail/:id" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
