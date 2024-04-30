import Image from 'next/image';
import styled from 'styled-components';

export const CarouselViewPort = styled.div`
  overflow: hidden;
`;

export const CarouselContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
`;

export const CarouselSlide = styled.div`
  border-radius: 30px;
  flex: 0 0 600px;
  min-width: 0;
  padding-left: 1rem;
`;

export const CarouselSlideNumber = styled.div`
  border-radius: 1.8rem;
  font-size: 4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 400px;
`;

export const CarouselControls = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xsm};
`;

export const CarouselButton = styled.button`
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  box-shadow: inset 0 0 0 0.2rem rgb(234, 234, 234);
  width: 3.6rem;
  height: 3.6rem;
  z-index: 1;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 35%;
    height: 35%;
  }
`;

export const CarouselSlideImage = styled(Image)`
  display: block;
  height: 400px;
  width: 100%;
  object-fit: cover;
  border-radius: 30px;
`;

export const CarouselDots = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const CarouselDotButton = styled.button<{ $isActive: boolean }>`
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${({ theme, $isActive }) => ($isActive ? theme.colors.success.main : 'none')};
    border: 2px solid ${({ theme, $isActive }) =>
      $isActive ? theme.colors.success.main : theme.colors.primary.gentle};
}
`;
