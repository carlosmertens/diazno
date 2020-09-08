import PageLayout from '../components/PageLayout';
import Description from '../components/Description';
import UpcomingDates from '../components/UpcomingDates';
import PreviousDates from '../components/PreviousDates';
import ShareSocial from '../components/ShareSocial';
import Carousel from '../components/Carousel';
import PhotoDates from '../components/PhotoDates';

export default function Home() {
  return (
    <PageLayout>
      <main>
        <h1>Home</h1>

        <Carousel />

        <Description />

        <PhotoDates />

        <UpcomingDates />

        <PreviousDates />

        <ShareSocial />
      </main>
    </PageLayout>
  );
}
