import styled from 'styled-components';

export const PrimitiveInput = styled.input`
  background: none;
  height: 100%;
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.default};
  color: ${({ theme }) => theme.colors.neutral.main};
  outline: none;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.strong};
  }
`;
