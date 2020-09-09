import Nuka from 'nuka-carousel';

const Carousel = () => {
  return (
    <div className='flex items-center justify-center'>
      <Nuka
        wrapAround
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: 'white',
            r: 12,
          },
        }}>
        <img width='100' src='/img/diazno.jpg' alt='Diazno' />
        <img width='100' src='/img/diazno1.jpg' alt='Diazno' />
        <img width='100' src='/img/diazno2.jpg' alt='Diazno' />
        <img width='100' src='/img/diazno3.jpg' alt='Diazno' />
      </Nuka>
    </div>
  );
};

export default Carousel;
