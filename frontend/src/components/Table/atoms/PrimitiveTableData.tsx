import styled from 'styled-components';

export const PrimitiveTableData = styled.td`
  color: ${({ theme }) => theme.colors.neutral.main};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
`;
