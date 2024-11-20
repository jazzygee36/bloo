'use client';

import Loading from '../common/loading/loading';
import Image from 'next/image';
import Rating from '../../assets/images/rating.svg';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const TopMovies = ({
  searchQuery,
  data,
}: {
  searchQuery: string;
  data?: { results: Movie[] };
}) => {
  const movies = data?.results;

  const filteredMovies = movies?.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!movies) {
    return (
      <div className='text-center p-4'>
        <Loading />
      </div>
    );
  }

  if (filteredMovies?.length === 0) {
    return <div className='text-white'>No movies found.</div>;
  }

  const handleMovieDetails = (movie: Movie) => {
    const url = `/movie-details?title=${encodeURIComponent(
      movie.title
    )}&poster_path=${encodeURIComponent(
      movie.poster_path
    )}&release_date=${encodeURIComponent(
      movie.release_date
    )}&vote_average=${encodeURIComponent(movie.vote_average)}
    &overview=${encodeURIComponent(movie.overview)}`;
    window.location.href = url;
  };

  return (
    <div className='bg-[rgb(34,34,34)] w-full h-full py-12 px-5 md:px-20'>
      <h1 className='mb-5 text-md md:text-[25px] text-white'>
        Movies To Watch
      </h1>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {filteredMovies?.map((movie) => (
          <div key={movie.id}>
            <div
              onClick={() => handleMovieDetails(movie)}
              className='rounded-t-lg h-64 bg-cover bg-center text-white flex items-end p-4 cursor-pointer movie-card'
              style={{
                backgroundImage: `url(${
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : '/placeholder-image.jpg'
                })`,
              }}
              role='button'
              aria-label={`View details for ${movie.title}`}
            >
              <span className='bg-black bg-opacity-50 px-2 py-1 rounded'>
                {movie.title}
              </span>
            </div>
            <div className='bg-[#1E1E1E] py-2 px-2 '>
              <p className='text-white text-[12px]'>
                <span className=''>Release date: </span>
                <span className='text-[#808080]'>{movie.release_date}</span>
              </p>
              <div className='text-[12px] mt-2 flex items-center gap-1'>
                <div className='text-[#808080]'>
                  Rating: {movie.vote_average}
                </div>
                <div>
                  <Image
                    src={Rating}
                    alt='rating'
                    width={16}
                    height={16}
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMovies;
