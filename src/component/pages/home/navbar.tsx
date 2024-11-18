import React from 'react';
import SearchBar from '@/assets/icons/search';
import User from '@/assets/icons/user';

const Navbar = () => {
  return (
    <div className='h-16 bg-black w-full flex justify-between items-center'>
      <div className='flex'>
        <div className='flex items-center'>
          <h1>Home</h1>
          <h1>Feature</h1>
        </div>
      </div>
      <div className='flex items-center'>
        <SearchBar />
        <User />
      </div>
    </div>
  );
};

export default Navbar;
