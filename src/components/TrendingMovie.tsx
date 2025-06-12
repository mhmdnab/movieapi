// components/TrendingMovies.tsx
import Link from "next/link";
import Image from "next/image";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export default function TrendingMovies({ movies }: { movies: Movie[] }) {
  return (
    <section className="px-6 py-12">
      <h2 className="md:text-3xl text-2xl font-bold text-white mb-6">
        🔥 Trending Now
      </h2>

      <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`/movies/${movie.id}`}
            className="min-w-[160px] hover:scale-105 transition-transform duration-300"
          >
            <div className="relative h-[240px] w-[160px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-sm text-white mt-2 line-clamp-1">
              {movie.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
