// import styles from '../styles/Home.module.css';
import PageLayout from '../components/PageLayout';
import Carousel from '../components/Carousel';
import ShareSocial from '../components/ShareSocial';

const Gallery = () => {
  return (
    <PageLayout>
      <main className='{styles.main}'>
        <h1 className='{styles.title}'>Gallery</h1>
        <Carousel />
        <ShareSocial />
      </main>
    </PageLayout>
  );
};
export default Gallery;
