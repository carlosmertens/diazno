import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Diazno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Home
        </h1>
      </main>

      <footer className={styles.footer}>
        {/* TODO: Create an icon component */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://spotify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </a>
        <p>All rights reserved.</p>
      </footer>
    </div>
  )
}
