import { useEffect } from "react";
import apiMovie from "../../api/apiMovie";
import { useState } from "react";

function CastDetail({ id }) {
  const [credits, setCredits] = useState();




  
  useEffect(
    () => apiMovie.get(`/movie/${id}`).then((res) => setCredits(res.data)),
    [id]
  );



  return (
    <div className="my-5">
      <h4 className="text-green-400 font-bold text-2xl">Cast</h4>
    </div>
  );
}

export default CastDetail;
