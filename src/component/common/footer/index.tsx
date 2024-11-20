import React from 'react';

const QuickLink = [{ name: 'About Us' }, { name: 'Blog' }, { name: 'FAQ' }];

const Movies = [
  { name: 'Top Trending' },
  { name: 'Recommended' },
  { name: 'Popular' },
];

const Company = [
  { name: 'Contact Us' },
  { name: 'Private Policy' },
  { name: 'Terms of Use' },
];

const Footer = () => {
  return (
    <div className='bg-[#222222] w-full h-full'>
      <div className=' grid grid-cols-2 md:grid-cols-4 text-white justify-center items-center text-center gap-10 md:gap-0 py-10 px-3'>
        <div>Logo</div>

        <div className='flex flex-col gap-5'>
          <h1 className='font-semibold text-[20px]'>QuickLink</h1>
          {QuickLink.map((link) => (
            <div key={link.name}>
              <p className='cursor-pointer'>{link.name}</p>
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-5'>
          <h1 className='font-semibold text-[20px]'>Movies To Watch</h1>
          {Movies.map((link) => (
            <div key={link.name}>
              <p className='cursor-pointer'>{link.name}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='font-semibold text-[20px]'>About Company</h1>

          {Company.map((link) => (
            <div key={link.name}>
              <p className='cursor-pointer'>{link.name}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className='py-10 mx-10' />
    </div>
  );
};

export default Footer;
