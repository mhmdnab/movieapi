import { fetchMovies } from "../../utils/api";

export default async function MovieDetails({ params }: any) {
  const movie = await fetchMovies(`movie/${params.id}`);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg"
        />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-gray-600">{movie.release_date}</p>
          <p className="mt-4">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
