import styled from 'styled-components';

export const IconContainer = styled.div`
  svg {
    height: ${({ theme }) => theme.icon.default};
    width: auto;
  }
`;
