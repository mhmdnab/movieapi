import { fetchMovies } from "../../../utils/api";

export default async function MovieDetails({ params }: any) {
  const movie = await fetchMovies(`movie/${params.id}`);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-start gap-8 bg-gray-800 rounded-2xl shadow-lg p-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-80 h-[28rem] object-cover rounded-xl shadow-md border border-gray-700"
        />
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-white mb-3">
            {movie.title}
          </h1>
          <p className="text-gray-400 text-lg mb-1">{movie.release_date}</p>
          {/* Add rating and genres if you want */}
          {movie.vote_average && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 font-semibold">
                ★ {movie.vote_average.toFixed(1)}
              </span>
              <span className="text-gray-500 text-sm">(Avg. rating)</span>
            </div>
          )}
          <p className="mt-2 text-gray-200 leading-relaxed">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
