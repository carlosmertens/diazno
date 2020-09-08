// import styles from '../styles/Home.module.css';
import PageLayout from '../components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <main className='{styles.main}'>
        <h1 className='{styles.title}'>Home</h1>
        <img src='/img/diazno3.jpg' alt='Diazno' />
        <p>
          Born and raised in the city of Lagos, which is famous for gifting the world
          the musical genius of Fela Kuti, Diazno would come to discover his love for
          music and a fondness for the guitar in his early teens. What seemed to be a
          teenage fling quite dramatically morphed into raw passion which saw him
          abandon all other thoughts and firmly set his sights on a career in music.
        </p>
        <p>
          Demonstrating his brilliant work ethic, Diazno graduated top of his class at
          the prestigious school of music, Musical Society of Nigeria (MUSON). His
          academic success was swiftly met with incredible opportunities, including
          working as music director for various acts at the Lagos Theatre Festival and
          the Lagos International Jazz Festival. Not to mention, receiving a teaching
          position at MUSON.
        </p>
        <p>
          Following a move to Berlin in the summer of 2016, other aspects of his
          musicianship would begin to unravel. The classically-trained musician
          developed his craft into a singer/songwriter whose vocals have drawn strong
          comparisons to John Legend. An artist not afraid of boundaries, Diazno’s music
          is a daring mix of afro-influenced Pop/Rock with a hint of soul and reggae.
        </p>
        <img src='/img/diazno1.jpg' alt='Diazno' />
        <h2>Upcoming Dates</h2>
        {/* TODO: Fetch data and populate a list */}
        <h2>Previous Dates</h2>
        {/* TODO: Fetch data and populate a list */}
        <p>SHARE THIS:</p>
        <button>Twitter</button>
        <button>Facebook</button>
      </main>
    </PageLayout>
  );
}
