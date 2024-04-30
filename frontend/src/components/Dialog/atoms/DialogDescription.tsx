import * as DialogPrimitive from '@radix-ui/react-dialog';
import styled from 'styled-components';

const DialogDescription = styled(DialogPrimitive.Description)`
  font-size: ${({ theme }) => theme.fontSize.default};
`;

DialogDescription.displayName = DialogPrimitive.Description.displayName;

export { DialogDescription };
