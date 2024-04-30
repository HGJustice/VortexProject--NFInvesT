import styled, { css } from 'styled-components';

type HeadingProps = {
  size?: 'h1' | 'h2' | 'h3';
};

export const Heading = styled.p.attrs<HeadingProps>(({ size = 'h1' }) => ({
  as: size,
}))<HeadingProps>`
  ${({ theme, size = 'h1' }) => css`
    margin: 0;
    color: ${theme.colors.neutral.main};
    font-size: ${theme.headings[size].fontSize};
    line-height: ${theme.headings[size].lineHeight};
    font-weight: ${theme.headings[size].fontWeight};
  `}
`;
