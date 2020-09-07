import styles from '../styles/Home.module.css'


const Footer = () => {
    return (
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
    )
}

export default Footer;