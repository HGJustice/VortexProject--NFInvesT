import type { EmblaCarouselType } from 'embla-carousel';
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { CarouselDotButton } from './Carousel.styles';

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback(({ scrollSnapList }: EmblaCarouselType) => {
    setScrollSnaps(scrollSnapList());
  }, []);

  const onSelect = useCallback(({ selectedScrollSnap }: EmblaCarouselType) => {
    setSelectedIndex(selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type DotButtonProps = PropsWithChildren<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> & { isActive: boolean };

export const DotButton = ({ isActive, children, ...props }: DotButtonProps) => {
  return (
    <CarouselDotButton $isActive={isActive} type="button" {...props}>
      {children}
    </CarouselDotButton>
  );
};
