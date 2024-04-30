import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loader = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => `${theme.colors.primary.gentle}7F`};
  border-left-color: ${({ theme }) => theme.colors.primary.subtle};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const Spinner = () => (
  <Wrapper>
    <Loader />
  </Wrapper>
);
