// components/GenresSection.tsx
import GenreCard from "./GenreCard";

type Genre = {
  id: number;
  name: string;
};

export default function GenresSection({ genres }: { genres: Genre[] }) {
  return (
    <section className="px-10 py-12" id="genres">
      <h2 className="md:text-3xl text-2xl font-bold text-white mb-6">
        🎭 Browse by Genre
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {genres.map((genre) => (
          <GenreCard key={genre.id} genre={genre} />
        ))}
      </div>
    </section>
  );
}
