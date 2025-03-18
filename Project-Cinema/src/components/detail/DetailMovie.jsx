function DetailMovie({ movie }) {
 

  return (
    <div className="flex flex-col  gap-3 basis-2/3   pt-5   ">
      <p className="text-green-400 font-bold text-3xl mb-3">{movie.title}</p>

      <div className="whitespace-nowrap text-white md:flex  ">
        <div>
          <span className="text-green-600 text-md font-bold mr-3">
            Release Date:
          </span>
          {movie.release_date}
        </div>
        <div>
          <span className="text-green-600 text-md font-bold md:mx-3 mr-3">
            Runtime:
          </span>
          {movie.runtime === 0 ? "Non spécifié" : `${movie.runtime} minutes`}
        </div>

        <div>
          <span className="text-green-600 text-md font-bold mr-3 md:mx-3">
            Rating:
          </span>
          {Math.ceil(movie.vote_average * 10) === 0
            ? "Non spécifié"
            : `${Math.ceil(movie.vote_average * 10)}%`}
        </div>
      </div>

      <div className="text-white whitespace-nowrap flex flex-col md:flex-row  ">
        <div>
          <span className="text-green-600 text-md font-bold mr-3">Genres:</span>
          {movie.genres?.length
            ? movie.genres.map((genre) => genre.name).join(", ")
            : "Non spécifié"}
        </div>
        <div>
          <span className="text-green-600 text-md font-bold md:ml-3 mr-3">
            Status:
          </span>
          {movie.status}
        </div>
      </div>

      <div className="text-white flex flex-col md:flex-row ">
        <div>
          <span className="text-green-600 text-md font-bold mr-3">Budget:</span>
          {movie.budget === 0 ? "Non spécifié" : `${movie.budget} $`}
        </div>
        <div>
          <span className="text-green-600 text-md font-bold mr-3 md:ml-3">
            Revenue:
          </span>
          {movie.revenue === 0 ? "Non spécifié" : `${movie.revenue} $`}
        </div>
      </div>

      <div className="text-white">
        <span className="text-green-600 text-lg font-bold mr-3">Tagline:</span>
        {movie.tagline ? movie.tagline : "Non spécifié"}
      </div>

      <div className="text-white inline-flex">
        <span className="text-green-600 text-md font-bold mr-3 ">
          Overview:
        </span>
        {movie.overview}
      </div>
    </div>
  );
}

export default DetailMovie;
