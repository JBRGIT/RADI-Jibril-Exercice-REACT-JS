import { StarIcon } from "@heroicons/react/16/solid";
import { HeartIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

import { Link } from "react-router";

function CardMovie({ onClick, movie, favorites }) {
  const isFavorite = favorites.some(
    (favoritesMovie) => favoritesMovie.id === movie.id
  );

  const [img, setImg] = useState(
    `https://image.tmdb.org/t/p/w200${movie.poster_path}`
  );

  return (
    <div className=" relative group  w-[200px] h-[300px] sm:w-[150px] sm:h-[250px] md:w-[180px] md:h-[280px]">
      <Link to={`/detail/${movie.id}`}>
        <img
          src={img}
          alt="img"
          className="rounded-lg  w-full h-full object-cover opacity-75 "
          onError={() => setImg("https://placehold.co/200@2x.png")}
        />

        <div
          className="ease-in absolute inset-0  px-4 py-3 rounded-lg opacity-0 group-hover:bg-black group-hover:border-6 group-hover:border-transparent 
        group-hover:opacity-70 duration-300
      "
        >
          <h2 className="text-white font-bold">{movie.title}</h2>
          <p className="text-white font-bold my-1">{movie.release_date}</p>
          <p className="text-white opacity-100 text-xs">
            {movie.overview.length > 150
              ? `${movie.overview.slice(0, 150)}...`
              : movie.overview}
          </p>
          {Math.ceil(movie.vote_average * 10) === 0 ? null : (
            <div className=" inline-flex items-center gap-1 absolute text-white font-bold bottom-1 ">
              <StarIcon className="text-amber-300 h-3" />
              {Math.ceil(movie.vote_average * 10)}%
            </div>
          )}
        </div>
      </Link>

      <button
        className=" absolute cursor-pointer bottom-2  right-2 "
        onClick={() => onClick(movie)}
      >
        <HeartIcon
          className={`h-6 w-6 ${isFavorite ? "text-red-600" : "text-white"}`}
        />
      </button>
    </div>
  );
}

export default CardMovie;
