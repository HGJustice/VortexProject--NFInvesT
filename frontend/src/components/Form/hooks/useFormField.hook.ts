import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

import { FormFieldContext, FormItemContext } from '../context';

export const useFormField = () => {
  const { name } = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(name, formState);

  const { id } = itemContext;

  return {
    id,
    name,
    formItemId: `${id}-form-item`,
    ...fieldState,
  };
};
