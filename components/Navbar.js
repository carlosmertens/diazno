import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className='text-center text-xs flex items-center justify-center'>
      <Link href='/'>
        <a className='px-2 md:px-4'>HOME</a>
      </Link>
      <Link href='/about'>
        <a className='px-2 md:px-4'>ABOUT</a>
      </Link>
      <Link href='/dates'>
        <a className='px-2 md:px-4'>DATES</a>
      </Link>
      <Link href='/gallery'>
        <a className='px-2 md:px-4'>GALLERY</a>
      </Link>
      <a href='mailto:contact@diazno.com' className='px-2 md:px-4'>
        CONTACT
      </a>
    </nav>
  );
};
