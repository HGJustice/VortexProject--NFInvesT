import {
  FormEventHandler,
  HTMLProps,
  PropsWithChildren,
  SyntheticEvent,
  useCallback,
} from 'react';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';
import styled from 'styled-components';

type FormProps<T extends FieldValues> = {
  onSubmit: (values: T, buttonName?: string) => void;
  form: UseFormReturn<T>;
} & Omit<HTMLProps<HTMLFormElement>, 'onSubmit' | 'form'>;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  ...formProps
}: PropsWithChildren<FormProps<T>>) => {
  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    async (ev: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
      form.clearErrors();
      await form.handleSubmit(data => onSubmit(data))(ev);
    },
    [form, onSubmit],
  );

  return (
    <FormProvider {...form}>
      <StyledForm onSubmit={handleSubmit} noValidate {...formProps}>
        {children}
      </StyledForm>
    </FormProvider>
  );
};
