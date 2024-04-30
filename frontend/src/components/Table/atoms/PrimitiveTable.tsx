import styled from 'styled-components';

export const PrimitiveTable = styled.table`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.main};
  border-collapse: collapse;
  border-radius: 16px;
`;
