import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/Home.module.css';

const PageLayout = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Diazno</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default PageLayout;
