import Link from "next/link";
import { fetchMovies } from "../app/utils/api";

export default async function Home() {
  const movies = await fetchMovies("movie/popular");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Popular Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.results.map((movie: any) => (
          <Link href={`/movies/${movie.id}`}>
            <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{movie.title}</h2>
                <p className="text-gray-600">{movie.release_date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
