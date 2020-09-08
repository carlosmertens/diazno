import PageLayout from '../components/PageLayout';
import UpcomingDates from '../components/UpcomingDates';
import PreviousDates from '../components/PreviousDates';
import LeaveMessage from '../components/LeaveMessage';

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

        <LeaveMessage />
      </main>
    </PageLayout>
  );
};
export default Dates;
