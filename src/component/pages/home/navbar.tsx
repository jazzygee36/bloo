'use client';
import React, { useState } from 'react';
import SearchBar from '@/assets/icons/search';
import User from '@/assets/icons/user';

const Navbar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Missing state for mobile menu

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Pass the search query back to the parent
  };
  const handleFavourite = () => {
    window.location.href = '/favorite-movies';
  };
  return (
    <div className='h-16 bg-black w-full flex justify-between items-center text-white px-4 md:px-8 lg:px-16'>
      {/* Logo and Menu */}
      <div className='flex items-center space-x-4'>
        <h1 className='text-sm md:text-xl font-semibold cursor-pointer'>
          Home
        </h1>
        <h1
          className='text-sm md:text-xl font-semibold cursor-pointer'
          onClick={handleFavourite}
        >
          Favorite Movies
        </h1>
      </div>

      {/* Desktop View - Search and User icons */}
      <div className='hidden md:flex items-center space-x-4'>
        <input
          type='search'
          value={searchQuery}
          onChange={handleSearchChange}
          className='rounded-lg w-full h-8 px-3 outline-none text-black'
          placeholder='Search movies...'
        />
        <SearchBar />
        <User />
      </div>

      {/* Mobile Hamburger Icon */}
      <div
        className='md:hidden flex items-center'
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu visibility
      >
        <div className='flex items-center space-x-4'>
          <SearchBar />
          <User />
        </div>
      </div>

      {/* Mobile Menu - Toggle visibility based on state */}
      <div
        className={`absolute top-16 left-0 w-full bg-black text-black p-4 md:hidden transition-all ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <input
          type='search'
          className='rounded-lg w-full h-8 px-3 outline-none'
          placeholder='Search movies...'
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default Navbar;
