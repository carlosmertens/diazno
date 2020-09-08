import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-black-500 p-6'>
      <div className='block lg:hidden'>
        <button className='flex items-center px-3 py-2 border rounded text-white-200 border-white-400 hover:text-white hover:border-white'>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'>
          <Link href='/'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-teal mr-4'>
              Home
            </a>
          </Link>
          <Link href='/about'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-teal mr-4'>
              About
            </a>
          </Link>
          <Link href='/dates'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-teal mr-4'>
              Dates
            </a>
          </Link>
          <Link href='/gallery'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-teal mr-4'>
              Gallery
            </a>
          </Link>
          <Link href='/contact'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-teal mr-4'>
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
