import styled, { css } from 'styled-components';

import type { ButtonVariant } from '../Button';

export const PrimitiveButton = styled.button<{ $variant?: ButtonVariant }>`
  border: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.default};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xsm};

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  svg {
    height: ${({ theme }) => theme.icon.default};
    width: auto;
  }

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background-color: ${({ theme }) => theme.colors.success.main};
          color: ${({ theme }) => theme.colors.primary.intense};
          font-weight: 600;

          &:hover {
            background-color: ${({ theme }) => theme.colors.success.strong};
          }
        `;
      case 'default':
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.primary.main};
          color: ${({ theme }) => theme.colors.neutral.main};

          &:hover {
            background-color: ${({ theme }) => theme.colors.primary.gentle};
          }
        `;
    }
  }}
`;
