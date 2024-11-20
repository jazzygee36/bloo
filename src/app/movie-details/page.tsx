'use client';

import { Movie } from '@/api';
import BackIcon from '@/assets/images/backIcon';
import Button from '@/component/common/button';
import Footer from '@/component/common/footer';
import Loading from '@/component/common/loading/loading';
import { useEffect, useState } from 'react';

interface MovieDetails {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>({
    id: 0,
    title: '',
    poster_path: '',
    release_date: '',
    vote_average: 0,
    overview: '',
  });
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = Number(searchParams.get('id')) || 0;
    const title = searchParams.get('title') || '';
    const poster_path = searchParams.get('poster_path') || '';
    const release_date = searchParams.get('release_date') || '';
    const vote_average = parseFloat(searchParams.get('vote_average') || '0');
    const overview = searchParams.get('overview') || '';

    setMovieDetails({
      id,
      title,
      poster_path,
      release_date,
      vote_average,
      overview,
    });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const isFavorite = favorites.some((fav) => fav.id === movieDetails.id);

  const toggleFavorite = (movie: Movie) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === movie.id)) {
        return prevFavorites.filter((fav) => fav.id !== movie.id);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  const mapToMovie = (details: MovieDetails): Movie => ({
    id: details.id,
    title: details.title,
    poster_path: details.poster_path,
    release_date: details.release_date,
    vote_average: details.vote_average,
    overview: details.overview, // Ensure overview is included
  });

  return (
    <>
      <div className='px-3 md:px-12 py-8 bg-[#1E1E1E]'>
        <BackIcon />
        <div className='grid grid-cols-1 md:grid-cols-2 mt-4 items-center'>
          <div>
            <img
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                  : '/placeholder.jpg'
              }
              alt={movieDetails.title || 'Movie Poster'}
              className='w-full max-w-sm rounded-3xl'
            />
          </div>
          <div className='flex flex-col'>
            <div className='flex gap-4 items-center'>
              <h1 className='text-[26px] md:text-[32px] mt-4 font-bold text-white'>
                {movieDetails.title}
              </h1>
            </div>
            <div className='mt-10'>
              <p className='text-[#808080] text-[20px]'>Overview:</p>
              <div className='text-white'>{movieDetails.overview}</div>
            </div>
            <div className='flex gap-10 mt-10'>
              <p className='text-[#808080]'>Release Date:</p>
              <div className='text-white'>{movieDetails.release_date}</div>
            </div>
            <div className='flex gap-24 mt-10'>
              <p className='text-[#808080]'>Rating:</p>
              <div className='text-white'>{movieDetails.vote_average}</div>
            </div>
            <Button
              onClick={() => toggleFavorite(mapToMovie(movieDetails))}
              title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              className={`text-white ${
                isFavorite ? 'bg-red-500' : 'bg-blue-500'
              } p-4 rounded-md flex justify-center mt-8 w-full md:w-1/2 px-8`}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetails;
