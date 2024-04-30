import styled from 'styled-components';

export const PrimitiveTableHeader = styled.th`
  color: ${({ theme }) => theme.colors.neutral.strong};
  padding: ${({ theme }) => theme.spacing.lg};
  font-weight: normal;
  text-align: left;
`;
