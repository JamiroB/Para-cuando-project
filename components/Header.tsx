import React from 'react';
/* import ImageComponent from './images/ImageComponent'; */
import Image from 'next/image';

const Header = () => {
  /* const imageUrl = '/screenshot-4.XtTX2'; */

  return (
    <div className="flex justify-center bg-black h-16">
      <div className="container flex flex-row justify-between items-center pl-5 pr-5">
        <Image src={"/pc.png"} alt={'remote image pc?'} width={50} height={50}/>
        <div className='flex flex-row items-center text-white text-sm'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
          <p className='text-blue-600'>
            Crear publicación</p>
          <p className='px-5'>Log In</p>
          <p>Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
