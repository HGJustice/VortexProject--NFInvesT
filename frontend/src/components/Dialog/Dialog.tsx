import * as DialogPrimitive from '@radix-ui/react-dialog';
import { type PropsWithChildren } from 'react';

import { DialogContent, DialogOverlay, DialogTitle } from './atoms';

type DialogProps = PropsWithChildren & {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  description?: string;
  showCloseIcon?: boolean;
};

export const Dialog = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  showCloseIcon = true,
}: DialogProps) => {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogOverlay />
        <DialogContent showIcon={showCloseIcon}>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && description}
          {children}
        </DialogContent>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
