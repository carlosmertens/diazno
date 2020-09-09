import PageLayout from '../components/PageLayout';
import Description from '../components/Description';
import Carousel from '../components/Carousel';
import { ContentContainer } from '../components/ContentContainer';
import { PageHeader } from '../components/PageHeader';

export default function Home() {
  return (
    <PageLayout>
      <PageHeader>Home</PageHeader>
      <ContentContainer>
        <Carousel />
        <Description />
      </ContentContainer>
    </PageLayout>
  );
}
