import PageLayout from '../components/PageLayout';
import Description from '../components/Description';
import ShareSocial from '../components/ShareSocial';
import LeaveMessage from '../components/LeaveMessage';

const About = () => {
  return (
    <PageLayout>
      <main>
        <h1>About</h1>
        <img src='/img/diazno2.jpg' alt='Diazno' />
        <Description />
        <ShareSocial />
        <LeaveMessage />
      </main>
    </PageLayout>
  );
};
export default About;
