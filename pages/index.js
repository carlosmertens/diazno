import PageLayout from '../components/PageLayout';
import Description from '../components/Description';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <PageLayout>
      <h1 className='flex items-center justify-center text-2xl'>Home</h1>
      <div className='container mx-auto grid gap-8 text-center'>
        <Carousel />
        <Description />
      </div>
    </PageLayout>
  );
}
