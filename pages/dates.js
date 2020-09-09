import PageLayout from '../components/PageLayout';
import UpcomingDates from '../components/UpcomingDates';
import PreviousDates from '../components/PreviousDates';
import LeaveMessage from '../components/LeaveMessage';
import PhotoDates from '../components/PhotoDates';

const Dates = () => {
  return (
    <PageLayout>
      <main>
        <h1>Dates</h1>

        <PhotoDates />

        <UpcomingDates />

        <PreviousDates />

        <LeaveMessage />
      </main>
    </PageLayout>
  );
};
export default Dates;
