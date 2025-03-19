import { useState } from "react";

function BackDetail({ movie }) {
  const [img, setImg] = useState(
    `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
  );

  return (
    <img
      src={img}
      alt="backdrop_path"
      className="rounded-lg"
      onError={() => setImg("https://placehold.co/900x400")}
    />
  );
}

export default BackDetail;
