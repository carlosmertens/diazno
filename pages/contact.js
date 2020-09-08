// import styles from '../styles/Home.module.css';
import PageLayout from '../components/PageLayout';
import ShareSocial from '../components/ShareSocial';
import LeaveMessage from '../components/LeaveMessage';

const Contact = () => {
  return (
    <PageLayout>
      <main className='{styles.main}'>
        <h1 className='{styles.title}'>Contact</h1>
        <ShareSocial />
        <LeaveMessage />
      </main>
    </PageLayout>
  );
};
export default Contact;
