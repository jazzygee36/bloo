'use client';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPopularMovies } from '@/api';
import Footer from '@/component/common/footer';
import Loading from '@/component/common/loading/loading';
import Banner from '@/component/pages/home/banner';
import Genres from '@/component/pages/home/genres';
import Navbar from '@/component/pages/home/navbar';
import TopMovies from '@/component/pages/topMovies';

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['popularMovies'],
    queryFn: fetchPopularMovies,
  });

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search query change
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (isLoading) {
    return (
      <div className='text-center p-4'>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Banner />
      <TopMovies searchQuery={searchQuery} data={data} />
      <Genres />
      <Footer />
    </div>
  );
}
