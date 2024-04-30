import styled from 'styled-components';

import { PrimitiveTableData } from './PrimitiveTableData';

export const PrimitiveTableRow = styled.tr`
  &:last-child {
    ${PrimitiveTableData} {
      padding-bottom: ${({ theme }) => theme.spacing.lg};
    }
  }
`;
