'use client';

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  overview: string;
}

export interface MoviesResponse {
  results: Movie[];
}

export interface TopRatedMovie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

export interface TopRatedMoviesResponse {
  results: TopRatedMovie[];
}

export const fetchPopularMovies = async (): Promise<{ results: Movie[] }> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
};

export const fetchTopRatedMovies =
  async (): Promise<TopRatedMoviesResponse> => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    return response.json();
  };
