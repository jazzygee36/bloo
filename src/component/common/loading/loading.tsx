import React from 'react';

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <div className='spinner border-t-4 border-b-4 border-blue-500 w-12 h-12 rounded-full animate-spin'></div>
      <p> Loading...</p>
    </div>
  );
};

export default Loading;
