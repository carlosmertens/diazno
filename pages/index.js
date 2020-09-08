import PageLayout from '../components/PageLayout';
import Description from '../components/Description';

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

        <div className='upcoming-dates'>
          <h2>Upcoming Dates</h2>
          {/* TODO: Fetch data and populate a list */}
        </div>

        <div className='previous-dates'>
          <h2>Previous dates</h2>
          {/* TODO: Fetch data and populate a list */}
        </div>

        <div className='share-social'>
          <p>SHARE THIS:</p>
          <button>Twitter</button>
          <button>Facebook</button>
        </div>
      </main>
    </PageLayout>
  );
}
