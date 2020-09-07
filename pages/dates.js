import styles from '../styles/Home.module.css';
import PageLayout from '../components/PageLayout';

const Dates = () => {
  return (
    <PageLayout>
      <main className={styles.main}>
        <h1 className={styles.title}>Dates</h1>
        <img src='/img/diazno.jpg' alt='Diazno' />
      </main>
    </PageLayout>
  );
};
export default Dates;
