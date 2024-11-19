'use client';
import { Movie } from '@/api';
import BackIcon from '@/assets/images/backIcon';
import Button from '@/component/common/button';
import Loading from '@/component/common/loading/loading';
import { useEffect, useState } from 'react';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const savedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setFavorites(savedFavorites);
    setLoading(false);
  }, []);

  const removeFavorite = (movie: Movie) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className='bg-[#161616] text-white p-12 min-h-screen w-full'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <BackIcon />
          <h1 className='text-center text-[30px] mb-8'>Favorite Movies</h1>

          {favorites.length === 0 ? (
            <div className='text-center text-gray-400 mt-12'>
              No favorite movies added yet.
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {favorites.map((movie) => (
                <div
                  className='flex gap-3 items-center bg-[#222222] p-4 rounded-md'
                  key={movie.id}
                >
                  <div
                    className='w-44 h-36 bg-white flex-shrink-0 rounded-md bg-cover bg-center'
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                    }}
                  ></div>
                  <div className='flex flex-col gap-2'>
                    <div className='font-semibold text-lg'>{movie.title}</div>
                    <Button
                      title={'Remove from Favorites'}
                      className={'bg-red-500 p-3 rounded-lg text-white'}
                      onClick={() => removeFavorite(movie)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FavoritesPage;
