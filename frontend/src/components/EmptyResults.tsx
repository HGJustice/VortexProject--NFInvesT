import styled from 'styled-components';

import { EmptySearchIcon } from './Icons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary.subtle};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    height: 36px;
    width: auto;
    color: ${({ theme }) => theme.colors.primary.subtle};
  }
`;

export const EmptyResults = () => {
  return (
    <Wrapper>
      <EmptySearchIcon />
      <h3>No results found.</h3>
      <span>Please try again using different keywords.</span>
    </Wrapper>
  );
};
