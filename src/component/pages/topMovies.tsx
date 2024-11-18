'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPopularMovies, MoviesResponse } from '@/api';
import Loading from '../common/loading/loading';

const TopMovies = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['popularMovies'],
    queryFn: fetchPopularMovies,
  });

  //   if (isLoading) {
  //     return (
  //       <div className='text-center p-4'>
  //         <Loading />
  //       </div>
  //     );
  //   }

  //   if (error) {
  //     return (
  //       <div className='text-center p-4 text-red-500'>
  //         Error fetching movies: {String(error)}
  //       </div>
  //     );
  //   }

  const movies = data?.results;

  console.log(movies);
  return (
    <div className='bg-[rgb(34,34,34)] w-full h-full py-12 px-12 md:px-24'>
      <h1 className='mb-5 text-[25px]'>Movies To Watch</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'></div>
    </div>
  );
};

export default TopMovies;
