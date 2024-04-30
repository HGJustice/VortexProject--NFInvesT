import { type SVGAttributes } from 'react';

export const CloseIcon = (props: SVGAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 18.9998L12 12M5.00029 5.00015L12 12M19 18.9998L12 12M12 12L19 5.00006"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
