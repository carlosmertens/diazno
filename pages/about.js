import PageLayout from '../components/PageLayout';
import Description from '../components/Description';
import { ContentContainer } from '../components/ContentContainer';
import { PageHeader } from '../components/PageHeader';

const About = () => {
  return (
    <PageLayout>
      <PageHeader>About</PageHeader>
      <ContentContainer>
        <img src='/img/diazno2.jpg' className='mx-auto' alt='Diazno' />
        <Description />
      </ContentContainer>
    </PageLayout>
  );
};
export default About;
