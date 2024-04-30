import { Carousel } from '@/components';

export const Dashboard = () => {
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Carousel slides={SLIDES} options={{ loop: true }} />
    </>
  );
};
