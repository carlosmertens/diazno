import { FaSpotify, FaFacebookSquare, FaYoutube, FaInstagram } from 'react-icons/fa';

const ShareSocial = ({ transparent }) => {
  return (
    <div
      className={`share-social text-xl ${
        transparent ? '' : 'bg-gray-600'
      } text-white flex items-center justify-center`}>
      <button className='px-2'>
        <FaFacebookSquare />
      </button>
      <button className='px-2'>
        <FaYoutube />
      </button>
      <button className='px-2'>
        <FaInstagram />
      </button>
      <button className='px-2'>
        <FaSpotify />
      </button>
    </div>
  );
};

export default ShareSocial;
