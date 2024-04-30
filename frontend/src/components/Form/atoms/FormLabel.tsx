import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

import { useFormField } from '../hooks';

const Label = styled.label`
  user-select: none;
  color: ${({ theme }) => theme.colors.neutral.gentle};
`;

const FormLabel = forwardRef<
  HTMLLabelElement,
  HTMLAttributes<HTMLLabelElement>
>(({ ...props }, ref) => {
  const { formItemId } = useFormField();
  return <Label ref={ref} htmlFor={formItemId} {...props} />;
});

FormLabel.displayName = 'FormLabel';

export { FormLabel };
