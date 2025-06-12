// components/HeroSection.tsx
import Link from "next/link";

type Movie = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
};

export default function HeroSection({ movie }: { movie: Movie }) {
  const backgroundImage = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <section
      className="w-full h-[80vh] bg-cover bg-center relative flex items-center justify-start"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 max-w-4xl px-8 text-white space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">{movie.title}</h1>
        <p className="text-sm md:text-base text-gray-300 line-clamp-3">
          {movie.overview}
        </p>
        <Link
          href={`/movies/${movie.id}`}
          className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded shadow"
        >
          View Details
        </Link>
      </div>
    </section>
  );
}
