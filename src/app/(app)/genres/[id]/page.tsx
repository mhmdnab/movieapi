import Image from "next/image";
import Link from "next/link";

export default async function GenrePage({
  params,
}: {
  params: { id: string };
}) {
  const genreId = params.id;
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const moviesRes = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
  );
  const moviesData = await moviesRes.json();

  const genreRes = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
  );
  const genreData = await genreRes.json();

  const genre = genreData.genres.find((g: any) => g.id.toString() === genreId);

  return (
    <main className="px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-6">
        {genre ? genre.name : "Unknown Genre"}
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {moviesData.results.map((movie: any) => (
          <Link
            href={`/movies/${movie.id}`}
            key={movie.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <div className="relative h-[240px] w-full">
              <Image
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <h2 className="text-sm font-semibold">{movie.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
