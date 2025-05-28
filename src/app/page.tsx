import Link from "next/link";
import { fetchMovies } from "../app/utils/api";

export default async function Home() {
  const movies = await fetchMovies("movie/popular");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.results.map((movie: any) => (
          <Link
            key={movie.id}
            href={`/movies/${movie.id}`}
            className="group block transition-transform transform hover:scale-105"
          >
            <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-xl h-full flex flex-col transition duration-200 group-hover:shadow-2xl">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-80 object-cover object-top"
                loading="lazy"
              />
              <div className="flex-1 flex flex-col justify-between p-4">
                <h2 className="text-lg font-semibold text-white truncate">
                  {movie.title}
                </h2>
                <p className="text-gray-400 mt-2">{movie.release_date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
