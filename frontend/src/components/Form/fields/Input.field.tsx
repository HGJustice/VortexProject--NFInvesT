import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/Input';

import { FormControl, FormField, FormItem, FormLabel } from '../atoms';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  type?: 'text' | 'email' | 'number' | 'password';
  delayed?: boolean;
};

export const InputField = ({
  name,
  type = 'text',
  label,
  ...inputProps
}: InputFieldProps) => {
  const { control } = useFormContext();
  return (
    <FormControl
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormField>
            <Input type={type} {...inputProps} {...field} />
          </FormField>
        </FormItem>
      )}
    />
  );
};
