import ShareSocial from './ShareSocial';

const Footer = () => {
  return (
    <footer className='flex flex-col leading-3 justify-center items-center'>
      <ShareSocial transparent />
      <br />
      <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
