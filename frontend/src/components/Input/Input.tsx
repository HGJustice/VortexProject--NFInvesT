import { ChangeEvent, forwardRef, InputHTMLAttributes, ReactNode } from 'react';

import { useDelayedTask } from '@/hooks';

import { IconContainer, InputWrapper, PrimitiveInput } from './atoms';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: ReactNode;
  delayed?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ leftIcon, placeholder, delayed, onChange }: InputProps, ref) => {
    const delayedTask = useDelayedTask();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (!onChange) return;

      if (delayed) {
        delayedTask.start(() => onChange(e));
      } else {
        onChange(e);
      }
    };

    return (
      <InputWrapper>
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        <PrimitiveInput
          placeholder={placeholder}
          onChange={handleChange}
          ref={ref}
        />
      </InputWrapper>
    );
  },
);

Input.displayName = 'Input';

export { Input };
