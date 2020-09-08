import PageLayout from '../components/PageLayout';
import Description from '../components/Description';
import ShareSocial from '../components/ShareSocial';

const About = () => {
  return (
    <PageLayout>
      <main>
        <h1>About</h1>
        <img src='/img/diazno2.jpg' alt='Diazno' />
        <Description />
        <ShareSocial />
      </main>
    </PageLayout>
  );
};
export default About;
