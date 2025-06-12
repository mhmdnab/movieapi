// components/TopRatedMovies.tsx
import Link from "next/link";
import Image from "next/image";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

export default function TopRatedMovies({ movies }: { movies: Movie[] }) {
  return (
    <section className="py-12" id="top-rated">
      <h2 className="md:text-3xl text-2xl font-bold text-white mb-6 px-10">
        👑 Top Rated Movies
      </h2>

      <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-12 px-10">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`/movies/${movie.id}`}
            className="min-w-[180px] transition-all duration-300"
          >
            <div className="group relative h-[270px] w-[180px] overflow-hidden rounded-xl border border-[#D6AD60] shadow-md hover:shadow-[#D6AD60] hover:shadow-2xl hover:border-[#ffd17d] transition-all duration-300">
              <Image
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                fill
                className="rounded-xl object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black/70 text-yellow-400 px-2 py-1 text-xs font-bold rounded-tr">
                ⭐ {movie.vote_average.toFixed(1)}
              </div>
            </div>
            <p className="text-sm text-white mt-2 text-center line-clamp-1">
              {movie.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
