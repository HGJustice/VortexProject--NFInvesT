import * as DialogPrimitive from '@radix-ui/react-dialog';
import styled from 'styled-components';

const DialogOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary.intense};
  transition: opacity 0.5s;
  opacity: 0.5;
  z-index: 10;
`;

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export { DialogOverlay };
