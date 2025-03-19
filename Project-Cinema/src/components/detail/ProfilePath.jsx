import { useState } from "react";

function ProfilePath({ cast }) {
  const [img, setImg] = useState(
    `https://image.tmdb.org/t/p/w185${cast.profile_path}`
  );

  return (
    <div className="flex flex-col items-center">
      <img
        src={img}
        alt="img"
        className="rounded-full object-cover w-full h-full objet-cover"
        onError={() => setImg("../src/assets/img-Placeholder.avif")}
      />
      <div>
        <h3 className=" text-white text-lg font-bold">{cast.original_name}</h3>
        <p className="text-sm text-gray-500">{cast.name}</p>
      </div>
    </div>
  );
}

export default ProfilePath;
