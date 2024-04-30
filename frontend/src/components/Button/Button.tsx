import type {
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactElement,
} from 'react';

import { PrimitiveButton } from './atoms';

export type ButtonVariant = 'primary' | 'default';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactElement;
  variant?: ButtonVariant;
};

const Button = ({
  children,
  icon,
  variant = 'default',
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <PrimitiveButton $variant={variant} {...props}>
      {icon && icon}
      {children}
    </PrimitiveButton>
  );
};

Button.displayName = 'Button';

export { Button };
