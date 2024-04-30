import * as DialogPrimitive from '@radix-ui/react-dialog';
import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import styled from 'styled-components';

import { CloseIcon } from '@/components/Icons';

const Content = styled(DialogPrimitive.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  width: fit-content;
  max-width: 640px;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.primary.main};
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.neutral.main};

  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(DialogPrimitive.Close)`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 8px;
  display: flex;
  cursor: pointer;
  margin: 0;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.neutral.main};

  svg {
    height: ${({ theme }) => theme.icon.default};
    width: auto;
  }
`;

const DialogPortal = DialogPrimitive.Portal;

const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    showIcon: boolean;
  }
>(({ children, showIcon, ...props }, ref) => {
  return (
    <DialogPortal>
      <Content ref={ref} {...props}>
        {children}
        {showIcon && (
          <CloseButton>
            <CloseIcon />
          </CloseButton>
        )}
      </Content>
    </DialogPortal>
  );
});

DialogContent.displayName = DialogPrimitive.Content.displayName;

export { DialogContent };
