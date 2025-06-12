// utils/fetchGenres.ts
export async function fetchGenres() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch genres");

  const data = await res.json();
  return data.genres;
}
