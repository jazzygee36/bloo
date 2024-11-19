'use client';

import { fetchTopRatedMovies } from '@/api';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

const Genres = () => {
  const { data } = useQuery({
    queryKey: ['topRatedMovies'],
    queryFn: fetchTopRatedMovies,
  });

  const TopRated = data?.results;

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1; // Pixels to scroll each frame
    const scrollDelay = 20; // Milliseconds between frames

    const autoScroll = () => {
      if (!scrollContainer) return;

      scrollAmount += scrollStep;
      if (
        scrollAmount >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollAmount = 0; // Reset scroll to the beginning
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const scrollInterval = setInterval(autoScroll, scrollDelay);

    return () => clearInterval(scrollInterval); // Cleanup on component unmount
  }, []);

  return (
    <div className='py-16 px-2 md:px-24 bg-[#000000]'>
      <h1 className='text-white text-md md:text-[25px] mb-5'>
        Top Rated Movies
      </h1>
      <div
        ref={scrollContainerRef}
        className='flex gap-4 overflow-x-auto whitespace-nowrap hide-scrollbar'
      >
        {TopRated?.map((topRated, index) => (
          <div key={index} className='w-44'>
            <div
              className='w-44 h-36 bg-white flex-shrink-0 rounded-md bg-cover bg-center'
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${topRated.poster_path})`,
              }}
            ></div>
            <p className='text-white  overflow-hidden text-ellipsis whitespace-nowrap'>
              {topRated.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
