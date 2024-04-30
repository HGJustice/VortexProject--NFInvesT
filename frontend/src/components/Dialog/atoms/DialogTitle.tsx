import * as DialogPrimitive from '@radix-ui/react-dialog';
import styled from 'styled-components';

const DialogTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

DialogTitle.displayName = DialogPrimitive.Title.displayName;

export { DialogTitle };
