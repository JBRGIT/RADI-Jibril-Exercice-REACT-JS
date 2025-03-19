import { useEffect } from "react";
import apiMovie from "../../api/apiMovie";
import { useState } from "react";
import ProfilePath from "./ProfilePath";

function CastDetail({ id }) {
  const [casts, setCasts] = useState([]);

  console.log(casts);

  useEffect(() => {
    apiMovie.get(`/movie/${id}/credits`).then((res) => setCasts(res.data.cast));
  }, [id]);

  return (
    <div className="my-5">
      <h4 className="text-green-400 font-bold text-2xl">Cast</h4>

      <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 ">
        {casts.map((cast) => (
          <ProfilePath cast={cast} key={cast.id} />
        ))}
      </div>
    </div>
  );
}

export default CastDetail;
