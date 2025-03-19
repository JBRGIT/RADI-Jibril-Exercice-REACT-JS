import { HeartIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavoriteReducer } from "../../redux/favoritesSlice";

function PosterDetail({ movie }) {
  const favorites = useSelector((state) => state.favorite.favorites);

  const isFavorite = favorites.some(
    (favoritesMovie) => favoritesMovie.id === movie.id
  );
  const dispatch = useDispatch();

  const [img, setImg] = useState(
    `https://image.tmdb.org/t/p/original${movie.poster_path}`
  );

  return (
    <div className="relative w-[60%] h-auto basis-1/3 ">
      <img
        src={img}
        alt="img"
        className="rounded-lg w-full h-full object-cover "
        onError={() => setImg("https://placehold.co/200@2x.png")}
      />

      <button
        className="absolute cursor-pointer top-3 left-3"
        onClick={() => dispatch(toggleFavoriteReducer(movie))}
      >
        <HeartIcon
          className={`h-6 w-6 ${isFavorite ? "text-red-600" : "text-white"}`}
        />
      </button>
    </div>
  );
}

export default PosterDetail;
