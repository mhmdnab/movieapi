import Link from "next/link";
import { fetchMovies } from "../app/utils/api";
import HeroSection from "@/components/Hero";
import TrendingMovies from "@/components/TrendingMovie";
import { fetchGenres } from "./utils/fetchGenres";
import GenresSection from "@/components/GenresSection";
import TopRatedMovies from "@/components/TopRatedMovies";
import UpcomingMovies from "@/components/UpcomingMovies";
import NowPlayingMovies from "@/components/NowPlayingMovies";

export default async function Home() {
  const popularData = await fetchMovies("movie/popular");
  const trendingData = await fetchMovies("trending/movie/day");

  const featuredMovie = popularData.results[0];
  const trendingMovies = trendingData.results.slice(0, 10);

  const topRatedData = await fetchMovies("movie/top_rated");
  const topRatedMovies = topRatedData.results.slice(0, 15);

  const upcomingData = await fetchMovies("movie/upcoming");
  const upcomingMovies = upcomingData.results.slice(0, 15);

  const nowPlayingData = await fetchMovies("movie/now_playing");
  const nowPlayingMovies = nowPlayingData.results.slice(0, 10);

  const [popular, trending, genres] = await Promise.all([
    fetchMovies("movie/popular"),
    fetchMovies("trending/movie/day"),
    fetchGenres(),
  ]);

  return (
    <>
      <HeroSection movie={featuredMovie} />
      <TrendingMovies movies={trendingMovies} />
      <GenresSection genres={genres} />
      <TopRatedMovies movies={topRatedMovies} />
      <UpcomingMovies movies={upcomingMovies} />
      <NowPlayingMovies movies={nowPlayingMovies} />
    </>
  );
}
