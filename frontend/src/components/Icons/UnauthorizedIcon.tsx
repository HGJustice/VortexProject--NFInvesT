import { SVGAttributes } from 'react';

export const UnauthorizedIcon = (props: SVGAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 9V7C8 5.66667 8.8 3 12 3C15.2 3 16 5.66667 16 7V9M8 9H5V21H19V9H16M8 9H16M12 14V16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
