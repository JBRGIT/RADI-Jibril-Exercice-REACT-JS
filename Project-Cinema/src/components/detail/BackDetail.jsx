function BackDetail({ movie }) {
  return (
    <img
      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      alt="backdrop_path"
      className="rounded-lg"
    />
  );
}

export default BackDetail;
