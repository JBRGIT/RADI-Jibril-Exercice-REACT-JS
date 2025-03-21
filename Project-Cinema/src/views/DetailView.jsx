import { useParams } from "react-router";
import PosterDetail from "../components/detail/PosterDetail";
import DetailMovie from "../components/detail/DetailMovie";
import CastDetail from "./../components/detail/CastDetail";
import BackDetail from "./../components/detail/BackDetail";
import { useState } from "react";
import { useEffect } from "react";
import apiMovie from "../api/apiMovie";

function DetailView() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    apiMovie.get(`/movie/${id}`).then((res) => {
      setMovie(res.data);
    });
  }, [id]);

  if (!movie)
    return (
      <div className="min-h-screen  text-white">
        movie en cours de chargement
      </div>
    );

  return (
    <div className="bg-gray-800 min-h-screen p-5 lg:w-[75%] px-7 lg:px-0  mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start ">
        <PosterDetail movie={movie} />
        <DetailMovie movie={movie} />
      </div>

      <CastDetail id={id} />
      <div className=" flex justify-center">
        <BackDetail  movie={movie} />
      </div>
    </div>
  );
}

export default DetailView;
