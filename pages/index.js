import PageLayout from '../components/PageLayout';
import Description from '../components/Description';
import UpcomingDates from '../components/UpcomingDates';
import PreviousDates from '../components/PreviousDates';

export default function Home() {
  return (
    <PageLayout>
      <main>
        <h1>Home</h1>
        <div className='carousel'>
          <img src='/img/diazno3.jpg' alt='Diazno' />
        </div>

        <Description />

        <div className='front-image'>
          <img src='/img/diazno.jpg' alt='Diazno' />
        </div>

        <UpcomingDates />

        <PreviousDates />

        <div className='share-social'>
          <p>SHARE THIS:</p>
          <button>Twitter</button>
          <button>Facebook</button>
        </div>
      </main>
    </PageLayout>
  );
}
