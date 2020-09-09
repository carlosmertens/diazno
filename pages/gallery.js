import PageLayout from '../components/PageLayout';
import Carousel from '../components/Carousel';
import { ContentContainer } from '../components/ContentContainer';
import { PageHeader } from '../components/PageHeader';

const Gallery = () => {
  return (
    <PageLayout>
      <PageHeader>Gallery</PageHeader>
      <ContentContainer>
        <Carousel />
      </ContentContainer>
    </PageLayout>
  );
};
export default Gallery;
