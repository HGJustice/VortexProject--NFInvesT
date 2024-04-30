import type { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';

import {
  CarouselContainer,
  CarouselControls,
  CarouselDots,
  CarouselSlide,
  CarouselSlideImage,
  CarouselSlideNumber,
  CarouselViewPort,
} from './Carousel.styles';
import { DotButton, useDotButton } from './CarouselDotButton';

type CarouselProps = {
  slides: number[];
  options?: EmblaOptionsType;
};

export const Carousel = ({ slides, options }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <>
      <CarouselViewPort ref={emblaRef}>
        <CarouselContainer>
          {slides.map((value, index) => (
            <CarouselSlide key={index}>
              <CarouselSlideNumber>
                <CarouselSlideImage
                  src={`https://picsum.photos/600/350?v=${index}`}
                  alt=""
                  width={600}
                  height={400}
                />
              </CarouselSlideNumber>
            </CarouselSlide>
          ))}
        </CarouselContainer>
      </CarouselViewPort>

      <CarouselControls>
        <CarouselDots>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              isActive={selectedIndex === index}
              onClick={() => onDotButtonClick(index)}
            />
          ))}
        </CarouselDots>
      </CarouselControls>
    </>
  );
};
