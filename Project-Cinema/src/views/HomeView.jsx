import CardMovie from "../components/CardMovie";

function HomeView({ movies, onClick,favorites }) {
 

  return (
    <div className=" min-h-screen p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7  gap-6 bg-gray-800 ">
      {movies.map((movie) => (
        <CardMovie favorites={favorites} key={movie.id} onClick={onClick} movie={movie} />
      ))}
    </div>
  );
}

export default HomeView;
