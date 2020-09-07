import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/dates'>
        <a>Dates</a>
      </Link>
      <Link href='/gallery'>
        <a>Gallery</a>
      </Link>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>
    </nav>
  );
};
export default Navbar;
