import styles from '../styles/Home.module.css';
import PageLayout from '../components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <main className={styles.main}>
        <h1 className={styles.title}>Home</h1>
        <img src='/img/diazno1.jpg' alt='Diazno' />
      </main>
    </PageLayout>
  );
}
