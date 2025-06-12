// components/NowPlayingMovies.tsx
import Link from "next/link";
import Image from "next/image";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

export default function NowPlayingMovies({ movies }: { movies: Movie[] }) {
  return (
    <section className="py-12" id="now-playing">
      <h2 className="text-3xl font-bold text-white mb-6 px-10">
        🍿 Now Playing
      </h2>

      <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-12 px-10">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`/movies/${movie.id}`}
            className="min-w-[180px] transition-all duration-300"
          >
            <div className="group relative h-[270px] w-[180px] overflow-hidden rounded-xl border border-purple-500 shadow-md hover:shadow-purple-500/50 hover:shadow-2xl transition-all duration-300">
              <Image
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                fill
                className="rounded-xl object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black/80 text-white px-2 py-1 text-xs font-semibold rounded-tr">
                🎬 {new Date(movie.release_date).toLocaleDateString()}
              </div>
            </div>
            <p className="text-sm text-white mt-2 text-center">{movie.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
