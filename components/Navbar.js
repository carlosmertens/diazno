import React from 'react';
import Link from 'next/link';
// import styles from '../styles/Home.module.css';

const Navbar = () => {
  return (
    <nav>
      <Link href='/'>
        <a>HOME</a>
      </Link>
      <Link href='/about'>
        <a>ABOUT</a>
      </Link>
      <Link href='/dates'>
        <a>DATES</a>
      </Link>
      <Link href='/gallery'>
        <a>GALLERY</a>
      </Link>
      <Link href='/contact'>
        <a>CONTACT</a>
      </Link>
    </nav>
  );
};
export default Navbar;
