import PageLayout from '../components/PageLayout';
import UpcomingDates from '../components/UpcomingDates';
import PreviousDates from '../components/PreviousDates';

const Dates = () => {
  return (
    <PageLayout>
      <main>
        <h1>Dates</h1>

        <div className='front-image'>
          <img src='/img/diazno.jpg' alt='Diazno' />
        </div>

        <UpcomingDates />

        <PreviousDates />
      </main>
    </PageLayout>
  );
};
export default Dates;
