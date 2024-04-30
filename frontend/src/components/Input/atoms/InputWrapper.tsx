import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral.main};
  height: max-content;
  min-width: 300px;
  gap: ${({ theme }) => theme.spacing.xsm};
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
`;
