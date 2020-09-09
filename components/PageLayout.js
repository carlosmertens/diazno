import Head from 'next/head';

import { Navbar } from './Navbar';
import Footer from './Footer';
import ShareSocial from './ShareSocial';

const PageLayout = ({ children }) => {
  return (
    <div className='bg-black min-h-screen text-gray-600 grid grid-rows-basic-page text-center gap-2'>
      <Head>
        <title>Diazno</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ShareSocial />
      <Navbar />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default PageLayout;
