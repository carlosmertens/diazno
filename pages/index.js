import PageLayout from '../components/PageLayout';
import Description from '../components/Description';
import UpcomingDates from '../components/UpcomingDates';
import PreviousDates from '../components/PreviousDates';
import ShareSocial from '../components/ShareSocial';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <PageLayout>
      <main>
        <h1>Home</h1>

        <Carousel />

        <Description />

        <div className='front-image'>
          <img src='/img/diazno.jpg' alt='Diazno' />
        </div>

        <UpcomingDates />

        <PreviousDates />

        <ShareSocial />
      </main>
    </PageLayout>
  );
}
