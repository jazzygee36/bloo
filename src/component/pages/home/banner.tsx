import React from 'react';
import Image from 'next/image';
import BannerImg from '../../../assets/images/horrobanner.jpg';

const Banner = () => {
  return (
    <div className='w-full'>
      <Image src={BannerImg} alt='banner' />
    </div>
  );
};

export default Banner;
